import { ERGAST_CONSTRUCTORS } from '~/constants/urls'
import { getUrlWithRoundAndYear } from './getUrlWithRoundAndYear'
import { fetchWithCache } from '~/utils/localCacher'

type ConstructorsOptions = {
  year?: number | string
  round?: number | string
}

export const getConstructorsData = async ({
  year,
  round,
}: ConstructorsOptions) => {
  const url = getUrlWithRoundAndYear({ year, round })

  // @ts-ignore
  return fetchWithCache(url + ERGAST_CONSTRUCTORS)
}
