import { ERGAST_DRIVERS } from '../constants/urls'
import { getUrlWithRoundAndYear } from './getUrlWithRoundAndYear'

type DriversOptions = {
  year?: number
  round?: number
}

export const getDriversData = async ({ year, round }: DriversOptions) => {
  const url = getUrlWithRoundAndYear({ year, round })

  return fetch(url + ERGAST_DRIVERS)
}
