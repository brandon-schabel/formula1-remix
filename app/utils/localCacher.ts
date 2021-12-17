import fs from 'fs'
import fsPromise from 'fs/promises'
import { supabase } from '~/supabase'

const isDev = process.env.NODE_ENV === 'development'

export const replaceAll = (str: string, find: string, replace: string) => {
  return str.replace(new RegExp(find, 'g'), replace)
}

const replaceUrlChar = (url: string) => {
  let returnUrl = url.replace('.json', '')
  return replaceAll(returnUrl, '/', '_')
}

export const fileExist = (url: string) => {
  const file = getFileName(url)
  return fs.existsSync(file)
}

const getFileName = (url: string) => {
  const replacedUrl = replaceUrlChar(url)
  const dir = __dirname.replace('api/build', '')
  return dir + '.urlCache/' + replacedUrl + '.json'
}

export const localCacher = async (url: string) => {
  const file = getFileName(url)
  console.log('reading cache file...', file)

  const readFile = await fsPromise.readFile(file)

  // @ts-ignore
  return JSON.parse(readFile)
}

export const writeCacheFile = async (url: string, data: any) => {
  const file = getFileName(url)

  if (data) {
    console.log('writing cache file...', file)
    return await fsPromise.writeFile(file, JSON.stringify(data))
  }
}

const getSupabaseCache = async (url: string) => {
  const { data } = await supabase
    .from('api_cache')
    .select('data')
    .eq('url', url)

  if (data?.length) {
    return data[0].data
  } else {
    return null
  }
}

const existsInSupabase = async (url: string) => {
  const { data } = await supabase
    .from('api_cache')
    .select('data')
    .eq('url', url)
  return data?.length !== 0
}

const writeSupabaseCache = async (url: string, cacheData: any) => {
  const { data, status, body, statusText, error, count } = await supabase
    .from('api_cache')
    .upsert([{ url, data: cacheData }])

  if (error) {
    console.error(error)
  }

  return data
}

// check if url exists in db and then cache data if it doesnt
const checkAndCacheData = async (url: string, data: any) => {
  const exists = await existsInSupabase(url)

  if (!exists) {
    console.log('***writing database cache***', url)
    await writeSupabaseCache(url, data)
  }
}

// function used to locally cache API data to prevent as many API calls to Ergast
export const fetchWithCache = async <ReturnData>(
  input: RequestInfo,
  init?: RequestInit
) => {
  const fetchUrl = typeof input === 'string' ? input : input.url

  // local read local file cache
  if (isDev && fileExist(fetchUrl)) {
    console.log('***reading local cache file***', fetchUrl)
    const cachedData = await localCacher(fetchUrl)

    await checkAndCacheData(fetchUrl, cachedData)
    return cachedData
  }

  console.log('***reading db cache***', fetchUrl)
  const supabaseCache = await getSupabaseCache(fetchUrl)

  if (supabaseCache) {
    return supabaseCache as ReturnData
  }

  const fetchResult = await fetch(<Request | string>input, init)
  const fetchData = await fetchResult.json()

  if (isDev) {
    console.log('***writing local cache file***', fetchUrl)
    await writeCacheFile(fetchUrl, fetchData)
  }

  await checkAndCacheData(fetchUrl, fetchData)

  return fetchData as ReturnData
}
