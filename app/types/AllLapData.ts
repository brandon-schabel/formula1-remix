export interface AllLapData {
  MRData: MRData
}

export interface MRData {
  xmlns: string
  series: string
  url: string
  limit: string
  offset: string
  total: string
  RaceTable: RaceTable
}

export interface RaceTable {
  season: string
  round: string
  Races: Race[]
}

export interface Race {
  season: string
  round: string
  url: string
  raceName: string
  Circuit: Circuit
  date: Date
  time: string
  Laps: Lap[]
}

export interface Circuit {
  circuitId: string
  url: string
  circuitName: string
  Location: Location
}

export interface Location {
  lat: string
  long: string
  locality: string
  country: string
}

export interface Lap {
  number: string
  Timings: Timing[]
}

export interface Timing {
  driverId: string
  position: string
  time: string
}
