import { LoaderFunction, useLoaderData } from 'remix'
import { getLapData } from '~/utils/getLapData'
import { AllLapData } from '~/types/AllLapData'
import { Lap } from '~/types/DriverLapData'
import { RenderLap } from '~/components/RenderLapTimes'
import { TrackInfo } from '~/components/TrackInfo'

export let loader: LoaderFunction = async ({ params, request }) => {
  return getLapData(params)
}

export default function CircuitLapTimeIndex() {
  const data = useLoaderData<AllLapData>()
  const lapData = data.MRData.RaceTable?.Races[0]?.Laps || []

  return (
    <div>
      <TrackInfo data={data} />
      {lapData?.map((lap: Lap) => {
        return <RenderLap lapData={lap} />
      })}
    </div>
  )
}
