import type { LoaderFunction } from 'remix'
import { Link, useLoaderData, useTransition } from 'remix'
import { getConstructorsData } from '~/utils/getConstructorsData'

export let loader: LoaderFunction = async () => {
  return getConstructorsData({ year: 2021 })
}

export default function WowzersIndex() {
  const data = useLoaderData()
  const test = useTransition()

  return (
    <div>
      Wowzers
      <strong>
        <Link to="..">
          Go back to the <code>/about</code> index.
        </Link>

        <Link to="../whoa">
          Go back to the <code>/whoa</code> index.
        </Link>
      </strong>
    </div>
  )
}
