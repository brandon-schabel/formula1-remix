import { ERGAST_BASE_F1 } from '../constants/urls'

type RoundAndYearOptions = {
  year?: number | string
  round?: number | string
  url?: string
}

export const getUrlWithRoundAndYear = ({
  year,
  round,
  url = ERGAST_BASE_F1,
}: RoundAndYearOptions) => {
  let returnUrl = url

  if (year && round) {
    returnUrl += `/${year}/${round}`
  }

  if (year && !round) {
    returnUrl = url + `/${year}`
  }

  return returnUrl
}
