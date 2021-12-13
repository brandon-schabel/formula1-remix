import { LoaderFunction, useLoaderData } from 'remix'
import { getLapData } from '~/utils/getLapData'
import { AllLapData } from '~/types/AllLapData'
import { RenderLap } from '~/routes/circuits/lap-times/year/$year/round/$round/lap/$lap/driver/$driver'
import { Lap } from '~/types/DriverLapData'

export let loader: LoaderFunction = async ({ params, request }) => {
  const { year, round, lap } = params
  console.log(year, round, lap)
  const result = await getLapData({
    year,
    round,
    lap,
  })

  return result
}

export default function CircuitLapTimeIndex() {
  const data = useLoaderData<AllLapData>()
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
      {lapData?.map((lap: Lap) => {
        return <RenderLap lapData={lap} />
      })}
    </div>
  )
}
