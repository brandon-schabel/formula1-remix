import { ERGAST_DRIVERS } from '~/constants/urls'
import { getUrlWithRoundYearDriver } from './getUrlWithRoundYearDriver'
import { fetchWithCache } from '~/utils/localCacher'

type DriversOptions = {
  year?: number
  round?: number
}

export const getDriversData = async ({ year, round }: DriversOptions) => {
  const url = getUrlWithRoundYearDriver({ year, round })

  // @ts-ignore
  return fetchWithCache(url + ERGAST_DRIVERS)
}
