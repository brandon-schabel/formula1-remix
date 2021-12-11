import { ActionFunction, Form, Link, Outlet, redirect } from 'remix'
import type { MetaFunction, LinksFunction } from 'remix'

import stylesUrl from '~/styles/demos/about.css'

export let meta: MetaFunction = () => {
  return {
    title: 'Lap Times',
  }
}

const driverMap: Record<string, string> = {
  max: 'max_verstappen',
}

const getDriver = (driver: string) => {
  const driverFromMap = driverMap[driver]

  return driverFromMap ? driverFromMap : driver
}

export let action: ActionFunction = async ({ request }) => {
  let body = await request.formData()
  const year = body.get('year') as string
  const round = body.get('round') as string
  const lap = body.get('lap') as string
  const driver = body.get('driver') as string

  const selectedDriver = getDriver(driver)

  return redirect(
    `/circuits/lap-times/year/${year}/round/${round}/lap/${lap}/driver/${selectedDriver}`
  )
}

export default function Index() {
  // const link =
  // '/circuits/lap-times/year/2021/round/5/lap/10/driver/max_verstappen'
  return (
    <div>
      {/*<Link to={'/circuits/lap-times/year/2021/round/5/lap/10/driver/alonso'}>*/}
      {/*  Lap Times*/}
      {/*</Link>*/}

      <Form method="post">
        <label>
          Year
          <input className="text-black" name="year" type="number" />
        </label>

        <label>
          Round
          <input className="text-black" name="round" type="number" />
        </label>

        <label>
          Lap
          <input className="text-black" name="lap" type="number" />
        </label>

        <label>
          Driver
          <input className="text-black" name="driver" type="text" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}
