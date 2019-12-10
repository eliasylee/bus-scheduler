import React from 'react'

import { getTimeRange } from '../util/get-time-range'

import './BusHeader.css'

const BusHeader = ({
  header,
  busIndex,
  bus,
  trips
}) => {
  let content = <div className='bus-header__new-bus'>
    {header}
  </div>

  if (!header) {
    const { earliest, latest } = getTimeRange(bus, trips)

    content = <React.Fragment>
      <div className='bus-header__number'>
        {`Bus ${busIndex + 1}`}
      </div>
      <div className='bus-header__time-range'>
        {`${earliest} - ${latest}`}
      </div>
    </React.Fragment>
  }

  return <div className='bus-header'>
    {content}
  </div>
}

export default BusHeader
