import { updateState } from './redux-actions'

export const selectTrip = (busIndex, tripIndex) => (dispatch, getState) => {
  const { selectedTrip } = getState()

  const newSelectedTrip = busIndex === selectedTrip.busIndex && tripIndex === selectedTrip.tripIndex
    ? {
      busIndex: undefined,
      tripIndex: undefined
    }
    : {
      busIndex,
      tripIndex
    }

  dispatch(updateState({
    selectedTrip: newSelectedTrip
  }))
}

export const moveTrip = newBusIndex => (dispatch, getState) => {
  const { buses, trips, selectedTrip } = getState()
  const { busIndex, tripIndex } = selectedTrip

  if (typeof busIndex === 'number' && typeof tripIndex === 'number') {
    let conflicting = false

    const { startTime, endTime } = trips[tripIndex]

    buses[newBusIndex].forEach(tripIdx => {
      if (!(trips[tripIdx].startTime > endTime) && !(trips[tripIdx].endTime < startTime)) {
        conflicting = true
      }
    })

    if (!conflicting) {
      const newBuses = [...buses]
      newBuses[busIndex].splice(newBuses[busIndex].indexOf(tripIndex), 1)
      newBuses[newBusIndex].push(tripIndex)

      dispatch(updateState({
        buses: newBuses,
        selectedTrip: {
          busIndex: undefined,
          tripIndex: undefined
        }
      }))
    }
  }
}

export const createNewBus = (dispatch, getState) => {
  const { buses, selectedTrip } = getState()
  const { busIndex, tripIndex } = selectedTrip

  const newBuses = [...buses]
  newBuses[busIndex].splice(newBuses[busIndex].indexOf(tripIndex), 1)
  newBuses.push([tripIndex])

  dispatch(updateState({
    buses: newBuses,
    selectedTrip: {
      busIndex: undefined,
      tripIndex: undefined
    }
  }))
}
