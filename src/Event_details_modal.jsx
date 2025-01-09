import React from 'react';
import './ScheduleComponent.css';

const EventDetailsModal = ({ isVisible, events, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal">
      <div className="modalContent">
        <h2>Event Details</h2>
        <table className="eventTable">
          <thead>
            <tr>
              <th>Caregiver</th>
              <th>Event Time</th>
              <th>Event Title</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td className="eventCareGiver">{event.careGiver}</td>
                <td className="eventTimes">
                  {event.start} - {event.end}
                </td>
                <td className="eventTitle">{event.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="closeModal" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EventDetailsModal;
