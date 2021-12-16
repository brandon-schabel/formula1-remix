import { LoaderFunction, useLoaderData } from 'remix'
import { DriverLapData } from '~/types/DriverLapData'
import { RenderLap } from '~/components/RenderLapTimes'
import { TrackInfo } from '~/components/TrackInfo'
import { getPitstopData } from '~/utils/getPitstopData'

export let loader: LoaderFunction = async ({ params }) => {
  return getPitstopData(params)
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
