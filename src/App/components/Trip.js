import React from 'react'

import './Trip.css'

const Trip = ({
  busIndex,
  tripIndex,
  trip,
  selectedTrip,
  generateOnClickTrip
}) => {
  const { id, startTime, endTime } = trip

  const status = tripIndex === selectedTrip.tripIndex
    ? 'active'
    : 'inactive'

  const style = {
    left: `${startTime}px`,
    width: `${endTime - startTime}px`
  }

  return <div className={`trip ${status}`}
    style={style}
    onClick={generateOnClickTrip(busIndex, tripIndex)}>
    {id}
  </div>
}

export default Trip
