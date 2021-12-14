import type { LoaderFunction } from 'remix'
import { useActionData, useLoaderData, useTransition } from 'remix'
import { getConstructorsData } from '~/utils/getConstructorsData'
import { Constructor, ConstructorData } from '~/types/ConstructorData'

export let loader: LoaderFunction = async ({ params, request }) => {
  return getConstructorsData({ year: params.season })
}

interface IConstructorDisplay {
  constructor: Constructor
  number?: number
}

const RenderConstructor = ({ lapData }: any) => {
  return (
    <div>
      <div className="card-body">
        <p>Driver: {lapData.driverId}</p>
        <p>Position: {lapData.position}</p>
        <p>Driver: {lapData.time}</p>
      </div>
    </div>
  )
}

const ConstructorDisplay = ({ constructor, number }: IConstructorDisplay) => {
  return (
    <div className="card bordered m-2 bg-base-200">
      <div className="card-body">
        <div>{number}</div>
        <div>
          Name: <a href={constructor.url}>{constructor.name}</a>
        </div>
        <div>Nationality: {constructor.nationality}</div>
        <div>ID: {constructor.constructorId}</div>
      </div>
    </div>
  )
}

export default function ConstructorSeasonINdex() {
  const data = useLoaderData<ConstructorData>()
  const actionData = useActionData<ConstructorData>()
  const transition = useTransition()

  const selectedData = actionData ? actionData : data

  const isLoading =
    transition.state === 'submitting' || transition.state === 'loading'

  return (
    <div>
      <div className="w-full flex justify-center m-4">
        <h1 className="text-3xl">
          Season {selectedData.MRData.ConstructorTable.season}
        </h1>
      </div>
      {isLoading && <div>Loading New Data...</div>}

      <div className="flex flex-wrap">
        {selectedData.MRData.ConstructorTable.Constructors.map(
          (constructor, index) => {
            if (constructor) {
              return (
                <ConstructorDisplay
                  // @ts-ignore
                  constructor={constructor}
                  number={index + 1}
                />
              )
            }
          }
        )}
      </div>
    </div>
  )
}
