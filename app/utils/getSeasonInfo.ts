import { ERGAST_BASE_F1 } from '~/constants/urls'

export const getSeasonInfo = async (year: number | string) => {
  const url = `${ERGAST_BASE_F1}/${year}.json`

  return fetch(url)
}
