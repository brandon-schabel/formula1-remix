import { ERGAST_BASE_F1 } from '~/constants/urls'
import {
  fetchWithCache,
} from '~/utils/localCacher'



export const getSeasonInfo = async (year: number | string) => {
  const url = `${ERGAST_BASE_F1}/${year}.json`

  return fetchWithCache(url)
}
