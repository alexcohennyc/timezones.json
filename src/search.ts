import { DateTime, Zone } from 'luxon'

const IANAForQuery = (query: string) => {
  switch (query) {
    // US timezones
    case 'ET':
      return 'America/New_York'
    case 'CT':
      return 'America/Chicago'
    case 'MT':
      return 'America/Denver'
    case 'PT':
      return 'America/Los_Angeles'
    // US major cities
    case 'LA':
      return 'America/Los_Angeles'
    case 'SF':
      return 'America/Los_Angeles'
    case 'NY':
      return 'America/New_York'
      // US states with 1 timezone
    case 'CA':
      return 'America/Los_Angeles'
    case 'New York':
      return 'America/New_York'
    case 'MIA':
      return 'America/New_York'
    default:
      return
  }
}

type Output = Zone | undefined

export function search(query: string, time = DateTime.utc()): Output {
  const iana = IANAForQuery(query)
  if (iana) return time.setZone(iana).zone
}
