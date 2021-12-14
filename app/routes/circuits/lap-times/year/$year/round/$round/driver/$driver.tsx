import { LoaderFunction, useLoaderData } from 'remix'
import { getLapData } from '~/utils/getLapData'
import { DriverLapData } from '~/types/DriverLapData'
import { RenderLap } from '~/components/RenderLapTimes'
import { TrackInfo } from '~/components/TrackInfo'

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

  return (
    <div>
      <TrackInfo data={data} />
      {lapData?.map(lap => {
        return <RenderLap lapData={lap} />
      })}
    </div>
  )
}
