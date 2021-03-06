import { FC } from 'react'
import { CarIcon } from '~/components/CarIcon'
import { Lap, Timing } from '~/types/DriverLapData'

interface IDriverPlacementDiagram {
  position: number | string
}
const DriverBlock: FC<{ isDriver: boolean }> = ({ isDriver }) => (
  <div
    className={`h-4 w-4 mx-1 rounded ${
      isDriver ? 'bg-green-600' : 'bg-red-600'
    }`}
  />
)

export const DriverPlacementDiagram: FC<IDriverPlacementDiagram> = ({
  position,
}) => {
  const driverBlocks = []

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

export const RenderTimings: FC<{ timing: Timing }> = ({ timing }) => {
  const position = parseInt(timing.position)

  return (
    <div className={`${position == 1 ? 'bg-green-400' : ''}`}>
      <p>Driver: {timing.driverId || ''}</p>
      <p>Position: {position || ''}</p>
      <p>Driver: {timing.time || ''}</p>
      <hr />
      {/*<DriverPlacementDiagram position={position || 100} />*/}
    </div>
  )
}

export const RenderLap = ({ lapData }: { lapData: Lap }) => {
  const timings = lapData.Timings

  if (!timings) {
    return null
  }

  const lapNumber = lapData.number

  return (
    <>
      {lapNumber}
      {timings.map((timing: Timing) => {
        if (timing) {
          return <RenderTimings timing={timing} />
        }
        return null
      })}
    </>
  )
}
