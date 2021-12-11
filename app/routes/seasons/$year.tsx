import { LoaderFunction, useLoaderData } from 'remix'
import { getSeasonInfo } from '~/utils/getSeasonInfo'
import { SeasonInfoData } from '~/types/SeasonInfoData'
import { writeTackIds } from '~/utils/writeTrackIds'

export let loader: LoaderFunction = async ({ params, request }) => {
  const { year } = params

  const isDev = process.env.NODE_ENV || 'development'

  if (isDev) {
    try {
      const seasonData = await getSeasonInfo(year || 2021)
      console.log('season data', seasonData)
      const typedSeasonData =
        (await seasonData.json()) as unknown as SeasonInfoData

      const races = typedSeasonData?.MRData?.RaceTable?.Races || []

      writeTackIds(races)
    } catch (e) {
      console.error(e)
    }
  }

  return getSeasonInfo(year || 2021)
}

export default function SeasonYear() {
  const data = useLoaderData<SeasonInfoData>()
  const year = data.MRData.RaceTable.season

  return (
    <div>
      Season Year {year}
      {data.MRData.RaceTable.Races.map(race => {
        const raceTime = race.time
        const raceDate = race.date
        return (
          <div>
            <p>Circuit Name{race.Circuit.circuitName}</p>
            <p>
              City:
              {race.Circuit.Location.locality}
            </p>
            <p>
              Race Time {raceTime} {raceDate}
            </p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}
