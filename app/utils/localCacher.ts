import fs from 'fs'
import fsPromise from 'fs/promises'

function replaceAll(str: string, find: string, replace: string) {
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

  const readFile = await fsPromise.readFile(file)

  // @ts-ignore
  return JSON.parse(readFile)
}

export const writeCacheFile = (url: string, data: any) => {
  const file = getFileName(url)

  console.log('writing file...', file)
  if (data) {
    fs.writeFile(file, JSON.stringify(data), function (err) {
      if (err) throw err
    })
  }
}
