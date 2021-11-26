import { Link } from 'remix'

export default function AboutIndex() {
  return (
    <div>
      <p>
        You are looking at the index route for the <code>/about</code> URL
        segment, but there are nested routes as well!
      </p>
      <p>
        <strong>
          <Link to="whoa">Check out one of them here.</Link>
        </strong>
        <strong>
          <Link to="wowzers">Check out wowzers</Link>
        </strong>
      </p>
    </div>
  )
}
