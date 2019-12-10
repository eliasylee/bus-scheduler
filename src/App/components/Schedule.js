import React from 'react'

import Bus from './Bus'
import NewBus from './NewBus'

import './Schedule.css'

const Schedule = ({
  buses,
  trips,
  selectedTrip,
  generateOnClickTrip,
  generateOnClickBus,
  createNewBus
}) =>
  <div className='schedule'>
    {buses.map((bus, index) => {
      if (bus.length) {
        return <Bus
          key={index}
          busIndex={index}
          bus={bus}
          trips={trips}
          selectedTrip={selectedTrip}
          generateOnClickTrip={generateOnClickTrip}
          generateOnClickBus={generateOnClickBus} />
      } else {
        return null
      }
    })}
    <NewBus
      selectedTrip={selectedTrip}
      createNewBus={createNewBus} />
  </div>


export default Schedule
