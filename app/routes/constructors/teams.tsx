import { ActionFunction, Form, Outlet, redirect } from 'remix'

export let action: ActionFunction = async ({ request }) => {
  let body = await request.formData()
  const year = body.get('year') as string
  return redirect(`/constructors/teams/${year}`)
}

export default function TeamsIndex() {
  return (
    <div>
      <Form method="post" action="/constructors/teams">
        {/*<label className="label text-xl">*/}
        {/*  Year*/}
        <input className="input input-bordered m-2" name="year" type="number" />
        {/*</label>*/}
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </Form>
      <Outlet />
    </div>
  )
}
