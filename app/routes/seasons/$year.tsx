import { LoaderFunction, useLoaderData } from 'remix'
import { getSeasonInfo } from '~/utils/getSeasonInfo'
import { RaceTable, SeasonInfoData } from '~/types/SeasonInfoData'
import { writeTackIds } from '~/utils/writeTrackIds'

export let loader: LoaderFunction = async ({ params, request }) => {
  const { year } = params

  const isDev = process.env.NODE_ENV === 'development'

  // if (isDev) {
  //   try {
  //     const seasonData = await getSeasonInfo(year || 2021)
  //     console.log('season data', seasonData)
  //     const typedSeasonData = (await seasonData) as unknown as SeasonInfoData
  //
  //     const races = typedSeasonData?.MRData?.RaceTable?.Races || []
  //
  //     writeTackIds(races)
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  const seasonInfoResponse = await getSeasonInfo(year || 2021)
  console.log(seasonInfoResponse)
  const seasonInfo = (await seasonInfoResponse) as unknown as SeasonInfoData
  return seasonInfo?.MRData?.RaceTable || {}
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
