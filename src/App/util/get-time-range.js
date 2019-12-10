import { formatTime } from './format-time'

export const getTimeRange = (bus, trips) => {
  let earliest = 1440
  let latest = 0

  bus.forEach(tripIndex => {
    const { startTime, endTime } = trips[tripIndex]

    earliest = earliest < startTime ? earliest : startTime
    latest = latest > endTime ? latest : endTime
  })

  return {
    earliest: formatTime(earliest),
    latest: formatTime(latest)
  }
}
