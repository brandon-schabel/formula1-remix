import { ERGAST_BASE_F1 } from '~/constants/urls'

type RoundAndYearOptions = {
  year?: number | string
  round?: number | string
  driver?: string
  url?: string
}

export const getUrlWithRoundYearDriver = ({
  year,
  round,
  driver,
  url = ERGAST_BASE_F1,
}: RoundAndYearOptions) => {
  let returnUrl = url

  if (year && round) {
    returnUrl += `/${year}/${round}`
  }

  if (year && !round) {
    returnUrl = url + `/${year}`
  }

  if (driver) {
    returnUrl += `/drivers/${driver}`
  }

  return returnUrl
}
