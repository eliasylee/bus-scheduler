import React from 'react'

import BusHeader from './BusHeader'

import './NewBus.css'

const Bus = ({
  selectedTrip,
  createNewBus
}) => {
  const { busIndex, tripIndex } = selectedTrip

  if (typeof busIndex === 'number' && typeof tripIndex === 'number') {
    return <div className='bus-container'>
      <BusHeader header={'New Bus'} />
      <div className='bus' onClick={createNewBus} />
    </div>
  } else {
    return null
  }
}

export default Bus
