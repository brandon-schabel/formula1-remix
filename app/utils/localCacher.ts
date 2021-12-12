import fs from 'fs'
import fsPromise from 'fs/promises'

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

// function used to locally cache API data to prevent as many API calls to Ergast
// @ts-ignore
export const fetchWithCache: Promise<Response> = async (
  input: RequestInfo,
  init?: RequestInit
) => {
  const fetchUrl = typeof input === 'string' ? input : input.url

  if (isDev && fileExist(fetchUrl)) {
    const cachedData = await localCacher(fetchUrl)
    return cachedData
  }

  const fetchResult = await fetch(<Request | string>input, init)
  const fetchData = await fetchResult.json()

  if (isDev) {
    console.log('writing file')
    await writeCacheFile(fetchUrl, fetchData)
  }

  return fetchData
}
