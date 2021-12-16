import { Link } from 'remix'

export default function Index() {
  // const data = useLoaderData<PitstopData>()

  return (
    <div>
      <Link to="./search">Pitstop Search</Link>
    </div>
  )
}
