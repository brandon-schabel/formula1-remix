import { getUrlWithRoundYearDriver } from './getUrlWithRoundYearDriver'
import { fetchWithCache } from '~/utils/localCacher'

export const getPitstopData = async ({ year, round, driver }: any) => {
  // http://ergast.com/api/f1/2011/5/drivers/alonso/laps/1
  // http://ergast.com/api/f1/2021/22/drivers/max_verstappen/laps.json?limit=100 all laps for driver
  let url = getUrlWithRoundYearDriver({ year, round, driver })

  url += `/pitstops.json`

  // @ts-ignore
  return fetchWithCache(url)
}
