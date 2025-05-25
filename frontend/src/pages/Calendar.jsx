import '../css/Calendar.css';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

function CalendarPage() {
  // we will update the state of value based on the date selected in the calendar
  const [value, setValue] = useState(new Date());
  // this will hold all of the events that get fetched
  const [events, setEvents] = useState([]);

  const calendarId = 'tacomyfriend@gmail.com';
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
    calendarId
  )}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true`;

  // Fetch events from Google Calendar API, but only on initial render, hence the []
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // we get all of the events from the calendar and set events state
        setEvents(data.items || []);
        console.log('Fetched Events:', data.items);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    }

    fetchEvents();
  }, []);

  // here we comare events to value states to make sure they are the same
  const matchingEvents = events.filter((event) => {
    const eventDate = new Date(event.start.dateTime || event.start.date);
    return eventDate.toDateString() === value.toDateString();
  });


  return (
  <div>
    <h1>Kris Tacos Calendar</h1>
    <div className="calendar-container">
      <Calendar
        onChange={setValue}
        value={value}
        className="react-calendar"
      />
    </div>
    <div>
      <h2>Details for: {value.toDateString()}</h2>
      {matchingEvents.length > 0 ? (
        <ul>
          {matchingEvents.map((event) => (
            <li key={event.id}>
              <strong>Location:</strong> {event.summary}<br />
              <strong>Description:</strong> {event.description || 'No description available'}<br />
              <strong>Time:</strong> {new Date(event.start.dateTime || event.start.date).toLocaleTimeString()} – {new Date(event.end.dateTime || event.end.date).toLocaleTimeString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No events found for this date.</p>
      )}
    </div>
  </div>
);

}

export default CalendarPage;
