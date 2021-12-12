import { getUrlWithRoundAndYear } from './getUrlWithRoundAndYear'
import { fetchWithCache } from '~/utils/localCacher'

export const getDriverLapData = async ({ year, round, driver, lap }: any) => {
  // http://ergast.com/api/f1/2011/5/drivers/alonso/laps/1
  let url = getUrlWithRoundAndYear({ year, round })

  if (driver) {
    url += '/drivers'
    url += `/${driver}`
  }

  if (lap) {
    url += `/laps/${lap}`
  }

  url += '.json'


  // @ts-ignore
  return fetchWithCache(url)
}
