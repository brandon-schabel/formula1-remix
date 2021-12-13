import { LoaderFunction, useLoaderData } from 'remix'
import { getLapData } from '~/utils/getLapData'
import { DriverLapData } from '~/types/DriverLapData'
import { RenderLap } from '~/routes/circuits/lap-times/year/$year/round/$round/lap/$lap/driver/$driver'

export let loader: LoaderFunction = async ({ params, request }) => {
  const { year, round, driver } = params
  const result = await getLapData({
    year,
    round,
    driver,
  })

  return result
}

export default function DriverLapTimeIndex() {
  const data = useLoaderData<DriverLapData>()

  const lapData = data.MRData.RaceTable?.Races[0]?.Laps || []
  const season = data.MRData.RaceTable.season
  const round = data.MRData.RaceTable.round

  const circuitName = data.MRData.RaceTable.Races[0]?.Circuit?.circuitName || ''

  return (
    <div>
      Teams
      <div>Season: {season}</div>
      <div>Round: {round}</div>
      <div>Circuit: {circuitName}</div>
      {lapData?.map(lap => {
        return <RenderLap lapData={lap} />
      })}
    </div>
  )
}
