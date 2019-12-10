import React from 'react'

import './TimeTable.css'

const TimeTable = () => {
  const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

  return <div className='time-table'>
    <div className='time-table__hours-container'>
      {hours.map((hour, index) =>
        <div className='time-table__hours-container__hour'>
          {`${hour}:00`}
        </div>
      )}
    </div>
  </div>
}

export default TimeTable
