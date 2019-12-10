import React from 'react'

import BusHeader from './BusHeader'
import Trip from './Trip'

import { getTimeRange } from '../util/get-time-range'

import './Bus.css'

const Bus = ({
  busIndex,
  bus,
  trips,
  selectedTrip,
  generateOnClickTrip,
  generateOnClickBus
}) => {
  const style = busIndex % 2 === 0
    ? 'grey'
    : 'white'

  const { earliest, latest } = getTimeRange(bus, trips)

  return <div className={`bus-container ${style}`}>
    <BusHeader
      busIndex={busIndex}
      bus={bus}
      trips={trips} />
    <div
      className='bus'
      onClick={generateOnClickBus(busIndex)}>
      {bus.map(index =>
        <Trip
          key={index}
          busIndex={busIndex}
          tripIndex={index}
          trip={trips[index]}
          selectedTrip={selectedTrip}
          generateOnClickTrip={generateOnClickTrip} />
      )}
    </div>
  </div>
}

export default Bus
