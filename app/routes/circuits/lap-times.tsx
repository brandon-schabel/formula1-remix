import LapTimeSearch from '~/components/LapTimeSearch'
import { ActionFunction, redirect, Outlet } from 'remix'

const driverMap: Record<string, string> = {
  max: 'max_verstappen',
}

const getDriver = (driver: string) => {
  const driverFromMap = driverMap[driver]

  return driverFromMap ? driverFromMap : driver
}

// http://ergast.com/api/f1/2021/22/drivers/max_verstappen/laps?limit=100

export let action: ActionFunction = async ({ request }) => {
  let body = await request.formData()
  const year = body.get('year') as string
  const round = body.get('round') as string
  const lap = body.get('lap') as string
  const driver = body.get('driver') as string

  const selectedDriver = getDriver(driver)
  let urlRedirect = `/circuits/lap-times/year/${year}/round/${round}`

  if (lap) {
    urlRedirect += `/lap/${lap}`
  }

  if (driver) {
    urlRedirect = urlRedirect + `/driver/${selectedDriver}`
  }

  return redirect(urlRedirect)
}

export default function () {
  return (
    <div>
      <LapTimeSearch />
      <Outlet />
    </div>
  )
}
