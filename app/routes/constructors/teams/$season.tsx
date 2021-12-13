import type { ActionFunction, LoaderFunction } from 'remix'
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useTransition,
} from 'remix'
import { getConstructorsData } from '../../../utils/getConstructorsData'
import { Constructor, ConstructorData } from '../../../types/ConstructorData'
import { useParams } from '@remix-run/react'

export let action: ActionFunction = async ({ request }) => {
  let body = await request.formData()
  const year = body.get('year') as string
  return redirect(`/constructors/teams/${year}`)
}

export let loader: LoaderFunction = async ({ params, request }) => {
  return getConstructorsData({ year: params.season })
}

interface IConstructorDisplay {
  constructor: Constructor
  number?: number
}

const ConstructorDisplay = ({ constructor, number }: IConstructorDisplay) => {
  return (
    <div>
      <div>{number}</div>
      <div>
        Name: <a href={constructor.url}>{constructor.name}</a>
      </div>
      <div>Nationality: {constructor.nationality}</div>
      <div>ID: {constructor.constructorId}</div>
      <hr />
    </div>
  )
}

export default function ConstructorSeasonINdex() {
  const data = useLoaderData<ConstructorData>()
  const actionData = useActionData<ConstructorData>()
  const transition = useTransition()
  const test = useParams()

  const selectedData = actionData ? actionData : data

  const isLoading =
    transition.state === 'submitting' || transition.state === 'loading'

  return (
    <div>
      <h1>Season: {selectedData.MRData.ConstructorTable.season} </h1>
      <Form method="post">
        <input name="year" type="number" />
        <button type="submit">Submit</button>
      </Form>

      {isLoading && <div>Loading New Data...</div>}

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
  )
}
