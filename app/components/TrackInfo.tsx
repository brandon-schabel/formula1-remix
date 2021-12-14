import { DriverLapData } from '~/types/DriverLapData'
import { AllLapData } from '~/types/AllLapData'
import { FC } from 'react'

interface ITrackInfo {
  data: DriverLapData | AllLapData
}

export const TrackInfo: FC<ITrackInfo> = ({ data }) => {
  const season = data.MRData.RaceTable.season
  const round = data.MRData.RaceTable.round

  const circuitName = data.MRData.RaceTable.Races[0]?.Circuit?.circuitName || ''

  return (
    <div>
      Teams
      <div>Season: {season}</div>
      <div>Round: {round}</div>
      <div>Circuit: {circuitName}</div>
    </div>
  )
}
