import { ERGAST_BASE_F1 } from '~/constants/urls'
import { fileExist, localCacher, writeCacheFile } from '~/utils/localCacher'

const isDev = process.env.NODE_ENV === 'development'

export const getSeasonInfo = async (year: number | string) => {
  const url = `${ERGAST_BASE_F1}/${year}.json`

  // local cache implementation
  if (isDev && fileExist(url)) {
    const fileData = await localCacher(url)
    return fileData
  }

  const response = await fetch(url)
  const data = await response.json()

  if (isDev) {
    writeCacheFile(url, data)
  }
  return data
}
