import { LoaderFunction, useLoaderData } from 'remix'
import { getDriverLapData } from '~/utils/getDriverLapData'
import { FC } from 'react'
import { useParams } from '@remix-run/react'
import { CarIcon } from '~/components/CarIcon'

export let loader: LoaderFunction = async ({ params, request }) => {
  const { year, round, driver, lap } = params
  console.log(year, round, driver, lap)
  const result = await getDriverLapData({
    year,
    round,
    lap,
    driver,
  })

  return result
}

interface IDriverPlacementDiagram {
  position: number
}
const DriverBlock: FC<{ isDriver: boolean }> = ({ isDriver }) => (
  <div
    className={`h-4 w-4 mx-1 rounded ${
      isDriver ? 'bg-green-600' : 'bg-red-600'
    }`}
  />
)

const DriverPlacementDiagram: FC<IDriverPlacementDiagram> = ({ position }) => {
  const driverBlocks = []

  // @ts-ignore
  console.log(position, parseInt(position))
  for (let i = 0; i < 20; i++) {
    // @ts-ignore
    let isCurrBlockTheDriver = i + 1 === parseInt(position)

    driverBlocks.push(
      <div
        style={{
          width: 50,
          height: 50,
        }}
      >
        <CarIcon color={isCurrBlockTheDriver ? 'green' : 'red'} />
      </div>
    )
  }

  return <div className="flex flex-row">{driverBlocks}</div>
}

const RenderLap = ({ lapData }: any) => {
  return (
    <div>
      <p>Driver: {lapData.driverId}</p>
      <p>Position: {lapData.position}</p>
      <p>Driver: {lapData.time}</p>
      <hr />

      <DriverPlacementDiagram position={lapData.position || 100} />
    </div>
  )
}

export default function DriverLapTimeIndex() {
  const data = useLoaderData()
  const params = useParams()
  console.log({ params })
  console.log('data', data)
  const lapData = data.MRData.RaceTable?.Races[0]?.Laps[0]?.Timings || []
  const season = data.MRData.RaceTable.season
  const round = data.MRData.RaceTable.round

  const circuitName = data.MRData.RaceTable.Races[0]?.Circuit?.circuitName || ''

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
