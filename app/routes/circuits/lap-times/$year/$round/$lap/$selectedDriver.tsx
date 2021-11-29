import { Link, LoaderFunction, useLoaderData } from 'remix'
import { getDriverLapData } from '../../../../../../utils/getDriverLapData'

export let loader: LoaderFunction = async ({ params, request }) => {
  const { year, round, selectedDriver, lap } = params
  const result = await getDriverLapData({
    year,
    round,
    lap,
    driver: selectedDriver,
  })

  return result
}

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

export default function DriverLapTimeIndex() {
  const data = useLoaderData()
  const lapData = data.MRData.RaceTable.Races[0].Laps[0].Timings
  const season = data.MRData.RaceTable.season
  const round = data.MRData.RaceTable.round

  const circuitName = data.MRData.RaceTable.Races[0].Circuit.circuitName

  return (
    <div>
      Teams
      <div>Season: {season}</div>
      <div>Round: {round}</div>
      <div>Circuit: {circuitName}</div>
      {lapData?.map((lap: any) => {
        return <RenderLap lapData={lap} />
      })}
    </div>
  )
}
