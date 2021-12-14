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
      <div className="w-full flex justify-center m-4">
        <h1 className="text-3xl">{year} Season</h1>
      </div>
      <div className="flex flex-wrap">
        {data?.Races?.map(race => {
          const raceTime = race.time
          const raceDate = race.date
          return (
            <div className="card bg-base-200 bordered m-2">
              <div className="card-body">
                <p>Circuit Name{race.Circuit.circuitName}</p>
                <p>
                  City:
                  {race.Circuit.Location.locality}
                </p>
                <p>
                  Race Time {raceTime} {raceDate}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
