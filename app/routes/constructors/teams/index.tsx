import { Link, LoaderFunction, useLoaderData } from 'remix'
import { getLapData } from '~/utils/getLapData'

export let loader: LoaderFunction = async ({ params, request }) => {
  const result = await getLapData({ year: 2011, round: 10, lap: 1 })
  console.log('lap 1', result)
  return result
}

export default function TeamsIndex() {
  const data = useLoaderData()
  console.log('data', data)
  const lapData = data.MRData.RaceTable.Races[0].Laps[0].Timings
  console.log(lapData)
  const season = data.MRData.RaceTable.season
  const round = data.MRData.RaceTable.round

  const RenderLap = ({ lapData }: any) => {
    return (
      <div>
        <p>Driver: {lapData.driverId}</p>
        <p>Position: {lapData.position}</p>
        <p>Driver: {lapData.time}</p>
        <hr />
      </div>
    )
  }

  return (
    <div>
      Teams
      <div>Season: {season}</div>
      <div>Round: {round}</div>
      <p>
        <strong>
          <Link to="2019">Constructors</Link>
        </strong>
      </p>
      {lapData?.map((lap: any) => {
        return <RenderLap lapData={lap} />
      })}
    </div>
  )
}
