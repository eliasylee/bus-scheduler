import { UPDATE_STATE } from '../constants/redux-constants'

import * as trips from '../assets/trips'

const DEFAULT_STATE = {
  buses: [
    [0],
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8]
  ],
  trips: trips.default,
  selectedTrip: {
    busId: undefined,
    tripId: undefined
  }
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
