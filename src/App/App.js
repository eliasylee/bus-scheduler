import React from 'react'
import { connect } from 'react-redux'

import TimeTable from './components/TimeTable'
import Schedule from './components/Schedule'

import { selectTrip, moveTrip, createNewBus } from './actions/trip-actions'

import './App.css'

const mapStateToProps = ({ buses, trips, selectedTrip }) => ({
  buses,
  trips,
  selectedTrip
})

const mapDispatchToProps = dispatch => ({
  generateOnClickTrip: (busIndex, tripIndex) => e => {
    e.stopPropagation()
    dispatch(selectTrip(busIndex, tripIndex))
  },
  generateOnClickBus: busIndex => e => {
    dispatch(moveTrip(busIndex))
  },
  createNewBus: () => dispatch(createNewBus)
})

const App = ({
  buses,
  trips,
  selectedTrip,
  generateOnClickTrip,
  generateOnClickBus,
  createNewBus
}) =>
  <div className='App'>
    <TimeTable />
    <Schedule
      buses={buses}
      trips={trips}
      selectedTrip={selectedTrip}
      generateOnClickTrip={generateOnClickTrip}
      generateOnClickBus={generateOnClickBus}
      createNewBus={createNewBus} />
  </div>


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
