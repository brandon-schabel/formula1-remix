import { getUrlWithRoundYearDriver } from './getUrlWithRoundYearDriver'
import { fetchWithCache } from '~/utils/localCacher'

export const getLapData = async ({ year, round, driver, lap }: any) => {
  // http://ergast.com/api/f1/2011/5/drivers/alonso/laps/1
  // http://ergast.com/api/f1/2021/22/drivers/max_verstappen/laps.json?limit=100 all laps for driver
  let url = getUrlWithRoundYearDriver({ year, round })

  if (driver) {
    url += '/drivers'
    url += `/${driver}`
  }

  if (lap) {
    url += `/laps/${lap}`
  } else if (driver && !lap) {
    url += '/laps'
  } else if (!driver && !lap) {
    url += '/laps'
  }

  url += '.json?limit=1000'

  return fetchWithCache(url)
}
