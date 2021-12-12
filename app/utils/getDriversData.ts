import { ERGAST_DRIVERS } from '~/constants/urls'
import { getUrlWithRoundAndYear } from './getUrlWithRoundAndYear'
import { fetchWithCache } from '~/utils/localCacher'

type DriversOptions = {
  year?: number
  round?: number
}

export const getDriversData = async ({ year, round }: DriversOptions) => {
  const url = getUrlWithRoundAndYear({ year, round })

  // @ts-ignore
  return fetchWithCache(url + ERGAST_DRIVERS)
}
