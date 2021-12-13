import type { MetaFunction, LoaderFunction } from 'remix'
import { useLoaderData, json, Link } from 'remix'
import { getLoggedInUser } from '~/sessions.server'
import { supabase } from '~/supabase'
import { useUser } from '~/hooks/useUser'

type IndexData = {
  resources: Array<{ name: string; url: string }>
  demos: Array<{ name: string; to: string }>
}

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = async ({ request }) => {
  const user = await getLoggedInUser(request)
  return user

  // https://remix.run/api/remix#json
  // return json(data)
}

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Remix Formula 1',
    description: 'Welcome to remix!',
  }
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const { user, session } = useUser()
  const { id: userId } = useLoaderData() || {}

  return (
    <div>
      <main>index </main>
      <aside>test</aside>
      <hr />
      <div>
        <h1>Remix + Supabase Auth Starter</h1>

        {user && <p>Your user id from client is: {user.id}</p>}

        {userId && <p>Your user from server is: {userId}</p>}

        {user && (
          <button onClick={() => supabase.auth.signOut()}>logout</button>
        )}

        {!user && (
          <p>
            You're not logged in yet, go <Link to="signup">sign up</Link> or{' '}
            <Link to="login">log in</Link>!
          </p>
        )}
      </div>
    </div>
  )
}
