import { LoaderFunction, useLoaderData } from 'remix'
import { getPitstopData } from '~/utils/getPitstopData'
import { PitstopData } from '~/types/PitstopData'

export let loader: LoaderFunction = async ({ params }) => {
  return getPitstopData(params)
}

export default function DriverLapTimeIndex() {
  const data = useLoaderData<PitstopData>()

  // const lapData = data.MRData.RaceTable?.Races[0]?.Laps || []

  // data.MRData.RaceTable.Races
  data.MRData.RaceTable.Races.map(race => {
    race.PitStops
  })
  return (
    <div>
      {data.MRData.RaceTable.Races.map(race => {
        return <div>{JSON.stringify(race.PitStops)}</div>
      })}
      {/*<TrackInfo data={data} />*/}
      {/*{lapData?.map(lap => {*/}
      {/*  return <RenderLap lapData={lap} />*/}
      {/*})}*/}
    </div>
  )
}
