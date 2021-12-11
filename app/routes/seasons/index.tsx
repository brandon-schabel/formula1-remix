import { Link } from 'remix'
import { generateArrayOfYears } from '~/utils/generateArrayOfYears'

export default function SeasonYear() {
  const years = generateArrayOfYears()

  return (
    <div className="flex flex-col">
      {years.map(year => {
        return <Link to={`/seasons/${year}`}>{year}</Link>
      })}
    </div>
  )
}
