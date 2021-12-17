import { ERGAST_CONSTRUCTORS } from '~/constants/urls'
import { getUrlWithRoundYearDriver } from './getUrlWithRoundYearDriver'
import { fetchWithCache } from '~/utils/localCacher'

type ConstructorsOptions = {
  year?: number | string
  round?: number | string
}

export const getConstructorsData = async ({
  year,
  round,
}: ConstructorsOptions) => {
  const url = getUrlWithRoundYearDriver({ year, round })

  return fetchWithCache(url + ERGAST_CONSTRUCTORS)
}
