import React, { useState } from 'react'
import { Modal } from '@mui/material'
import EventModal from './Add_edit_modal'
import './ScheduleComponent.css'
import { employees } from './employees'
import { allEvents } from './events'

const ScheduleComponent = () => {
  const [view, setView] = useState('weekly')
  const [currentDate] = useState(new Date('2025-01-07'))
  const [openModal, setOpenModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedEvents, setSelectedEvents] = useState([])

  const handleShowMoreClick = (events, e) => {
    e.stopPropagation() // Prevent event from propagating to parent elements
    setSelectedEvents(events)
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
    setSelectedEvents([])
  }

  const getVisibleDates = () => {
    const dates = []
    const startDate = new Date(currentDate)

    const daysToShow = {
      Today: 1,
      weekly: 7,
      fortnightly: 14,
      monthly: new Date(
        startDate.getFullYear(),
        startDate.getMonth() + 1,
        0
      ).getDate(),
    }
    if (view === 'weekly') {
      const dayOfWeek = startDate.getDay()
      const sundayDate = new Date(startDate)
      sundayDate.setDate(startDate.getDate() - dayOfWeek)
      for (let i = 0; i < 7; i++) {
        const date = new Date(sundayDate)
        date.setDate(sundayDate.getDate() + i)
        dates.push(date.toISOString().split('T')[0])
      }
    } else if (view === 'monthly') {
      const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      )
      const lastDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      )
      for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        const date = new Date(firstDayOfMonth)
        date.setDate(i)
        dates.push(date.toISOString().split('T')[0])
      }
    } else if (view === 'fortnightly') {
      const dayOfWeek = startDate.getDay()
      const sundayDate = new Date(startDate)
      sundayDate.setDate(startDate.getDate() - dayOfWeek)
      const nextSaturday = new Date(sundayDate)
      nextSaturday.setDate(sundayDate.getDate() + 13)
      for (let i = 0; i <= 13; i++) {
        const date = new Date(sundayDate)
        date.setDate(sundayDate.getDate() + i)
        dates.push(date.toISOString().split('T')[0])
      }
    } else {
      for (let i = 0; i < daysToShow[view]; i++) {
        const date = new Date(startDate)
        date.setDate(startDate.getDate() + i)
        dates.push(date.toISOString().split('T')[0])
      }
    }

    return dates
  }

  const visibleDates = getVisibleDates()

  const handleEventClick = (event) => {
    setSelectedEvent(event)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedEvent(null)
  }

  return (
    <div className='container'>
      <div className='header'>
        <h2>Roster Schedule</h2>
        <div>
          {['Today', 'weekly', 'fortnightly', 'monthly'].map((viewOption) => (
            <button
              key={viewOption}
              onClick={() => setView(viewOption)}
              className={`viewButton ${view === viewOption ? 'active' : ''}`}
            >
              {viewOption.charAt(0).toUpperCase() + viewOption.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div className='sidebar'>
          <div className='header'>Caregivers</div>
          {employees.map((employee) => (
            <div key={employee.id} className='employee'>
              {employee.name}
            </div>
          ))}
        </div>

        <div className='schedule'>
          <div className='eventContainer'>
            {visibleDates.map((date) => (
              <div key={date} style={{ flex: 1, minWidth: '150px' }}>
                <div className='dateHeader'>
                  {new Date(date).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
                {employees.map((employee) => {
                  const events = allEvents.filter(
                    (event) =>
                      event.employeeId === employee.id && event.date === date
                  )
                  return (
                    <div
                      key={`${employee.id}-${date}`}
                      className='event'
                      onClick={() => handleEventClick(events[0])}
                    >
                      {events.length > 1 ? (
                        <div className='eventInfo'>
                          {events[0].careGiver}
                          <div className='subText'>
                            {events[0].start} - {events[0].end}
                          </div>
                          <div
                            className='showMore'
                            title={events
                              .map(
                                (e) =>
                                  `${e.careGiver}  -  ${e.start} - ${e.end}`
                              )
                              .join('\n')}
                            onClick={(e) => handleShowMoreClick(events, e)}
                          >
                            Show more ({events.length})
                          </div>
                        </div>
                      ) : (
                        events.map((event) => (
                          <div key={event.id} className='eventInfo'>
                            {event.careGiver}
                            <div className='subText'>
                              {event.start} - {event.end}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
          {modalVisible && (
            <div className='modal'>
              <div className='modalContent'>
                <h2>Event Details</h2>
                <table className='eventTable'>
                  <thead>
                    <tr>
                      <th>Caregiver</th>
                      <th>Event Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedEvents.map((event) => (
                      <tr key={event.id}>
                        <td className='eventCareGiver'>{event.careGiver}</td>
                        <td className='eventTimes'>
                          {event.start} - {event.end}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button className='closeModal' onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <EventModal
        open={openModal}
        handleClose={handleCloseModal}
        event={selectedEvent}
      />
    </div>
  )
}

export default ScheduleComponent
