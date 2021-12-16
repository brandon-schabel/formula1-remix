import { Outlet, ActionFunction, redirect } from 'remix'
import { InputConfig, WhoaForm } from '~/components/WhoaForm'
import { getDriver } from '~/utils/getDriver'

export let action: ActionFunction = async ({ request }) => {
  let body = await request.formData()
  const year = body.get('year') as string
  const round = body.get('round') as string
  const driver = body.get('driver') as string

  const selectedDriver = getDriver(driver)
  let urlRedirect = `/pitstops/search/year/${year}/round/${round}`

  if (driver) {
    urlRedirect = urlRedirect + `/driver/${selectedDriver}`
  }

  return redirect(urlRedirect)
}

const searchOptions: InputConfig[] = [
  { name: 'year', type: 'number', labelTitle: 'Year' },
  { name: 'round', type: 'number', labelTitle: 'Round' },
  { name: 'driver', type: 'text', labelTitle: 'Driver - Optional' },
]

export default function Index() {
  // const data = useLoaderData<PitstopData>()

  return (
    <div>
      <WhoaForm
        formTitle="Pitstop Search"
        inputConfigs={searchOptions}
        actionPath={'/pitstops/search'}
      />
      <Outlet />
    </div>
  )
}
