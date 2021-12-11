import { LoaderFunction, useLoaderData } from 'remix'
import { getSeasonInfo } from '~/utils/getSeasonInfo'
import { RaceTable, SeasonInfoData } from '~/types/SeasonInfoData'
import { writeTackIds } from '~/utils/writeTrackIds'

export let loader: LoaderFunction = async ({ params, request }) => {
  const { year } = params

  const isDev = process.env.NODE_ENV === 'development'
  const seasonData = await getSeasonInfo(year || 2021)
  const typedSeasonData = (await seasonData) as unknown as SeasonInfoData

  if (isDev) {
    try {
      const races = typedSeasonData?.MRData?.RaceTable?.Races || []

      writeTackIds(races)
    } catch (e) {
      console.error(e)
    }
  }

  return typedSeasonData?.MRData?.RaceTable || {}
}

export default function SeasonYear() {
  const data = useLoaderData<RaceTable>()
  const year = data?.season

  return (
    <div>
      Season Year {year}
      {data?.Races?.map(race => {
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
