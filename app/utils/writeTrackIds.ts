import fs from 'fs'
import { Race } from '~/types/SeasonInfoData'

export const writeTackIds = (races: Race[]) => {
  const dir = __dirname.replace('api/build', '')
  const file = dir + 'app/constants/trackIds.json'
  console.log('reading file..', file)
  fs.readFile(file, function (err, content) {
    if (err) throw err
    // @ts-ignore
    const parseJson = JSON.parse(content)
    let jsonUpdated = false

    races.forEach(race => {
      // if circuit name does not exist in json, add it
      if (!parseJson[race.Circuit.circuitName]) {
        parseJson[race.Circuit.circuitName] = race.Circuit.circuitId
        jsonUpdated = true
      }
    })

    if (jsonUpdated) {
      fs.writeFile(file, JSON.stringify(parseJson), function (err) {
        if (err) throw err
      })
    }
  })
}
