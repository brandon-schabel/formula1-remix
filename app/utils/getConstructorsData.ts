import { ERGAST_CONSTRUCTORS } from '../constants/urls'
import { getUrlWithRoundAndYear } from './getUrlWithRoundAndYear'

type ConstructorsOptions = {
  year?: number | string
  round?: number | string
}

export const getConstructorsData = async ({
  year,
  round,
}: ConstructorsOptions) => {
  const url = getUrlWithRoundAndYear({ year, round })

  console.log('Making request', url, year, round)
  return fetch(url + ERGAST_CONSTRUCTORS)
}
