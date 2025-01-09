import React, { useState } from 'react'
import EventModal from './Add_edit_modal'
import './ScheduleComponent.css'
import { employees } from './employees'
import { allEvents } from './events'
import EventDetailsModal from './Event_details_modal'

const ScheduleComponent = () => {
  const [view, setView] = useState('weekly')
  const [currentDate] = useState(new Date())
  const [openModal, setOpenModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedEvents, setSelectedEvents] = useState([])

  const handleShowMoreClick = (events, e) => {
    e.stopPropagation()
    setSelectedEvents(events)
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
    setSelectedEvents([])
  }

  // Generate array of hours for daily view
  const getHourSlots = () => {
    const hours = []
    for (let i = 0; i <= 24; i++) {
      const hour =
        i === 0
          ? '12 AM'
          : i < 12
          ? `${i} AM`
          : i === 12
          ? '12 PM'
          : `${i - 12} PM`
      hours.push({ label: hour, value: i })
    }
    return hours
  }

  const getVisibleDates = () => {
    const dates = []
    const startDate = new Date(currentDate)

    if (view === 'Today') {
      dates.push(startDate.toISOString().split('T')[0])
    } else if (view === 'weekly') {
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
      for (let i = 0; i < 14; i++) {
        const date = new Date(sundayDate)
        date.setDate(sundayDate.getDate() + i)
        dates.push(date.toISOString().split('T')[0])
      }
    }
    return dates
  }

  const handleEventClick = (event) => {
    setSelectedEvent(event)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedEvent(null)
  }

  const getHourFromTimeString = (timeString) => {
    const [hours] = timeString.split(':')
    return parseInt(hours, 10)
  }

  const isEventInHourSlot = (event, hour) => {
    const startHour = getHourFromTimeString(event.start)
    const endHour = getHourFromTimeString(event.end)
    return hour >= startHour && hour <= endHour
  }

  const renderDailyView = () => {
    const hours = getHourSlots()
    const currentDateStr = currentDate.toISOString().split('T')[0]

    return (
      <div className='schedule daily'>
        <div className='dailyContainer'>
          {/* Date Header */}
          <div className='dailyHeader'>
            <div className='cornerCell'>
              {new Date(currentDateStr).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
              })}
            </div>
            {/* Hour Headers */}
            {hours.map((hour) => (
              <div key={hour.label} className='hourCell'>
                {hour.label}
              </div>
            ))}
          </div>

          {/* Grid Content */}
          <div className='dailyContent'>
            {employees.map((employee) => (
              <div key={employee.id} className='employeeRow'>
                <div className='employeeCell'>{employee.name}</div>
                {hours.map((hour) => {
                  const events = allEvents.filter(
                    (event) =>
                      event.employeeId === employee.id &&
                      event.date === currentDateStr &&
                      isEventInHourSlot(event, hour.value)
                  )
                  return (
                    <div
                      key={`${employee.id}-${hour.value}`}
                      className='timeSlotCell'
                    >
                      {events.map((event) => (
                        <div
                          key={event.id}
                          className='eventInfo'
                          onClick={() => handleEventClick(event)}
                        >
                          <div className='eventTime'>
                            {event.start} - {event.end}
                          </div>
                          <div className='eventTime'>{event.title}</div>
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const visibleDates = getVisibleDates()

  return (
    <div className='container'>
      <div className='header'>
        <h2>Roster Schedule</h2>
        <div>
          <button className='addNewEvent' onClick={handleEventClick}>
            + Add Shift
          </button>
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
        {view === 'Today' ? (
          renderDailyView()
        ) : (
          <>
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
                          event.employeeId === employee.id &&
                          event.date === date
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
                                      `${e.careGiver} - ${e.start} - ${e.end}`
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
                                <div className='subText'>{event.title}</div>
                              </div>
                            ))
                          )}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <EventDetailsModal
        isVisible={modalVisible}
        events={selectedEvents}
        onClose={closeModal}
      />
      <EventModal
        open={openModal}
        handleClose={handleCloseModal}
        event={selectedEvent}
      />
    </div>
  )
}

export default ScheduleComponent
