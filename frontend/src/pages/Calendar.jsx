import '../css/Calendar.css';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

function CalendarPage() {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState([]);

  const calendarId = 'tacomyfriend@gmail.com';
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
    calendarId
  )}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true`;

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setEvents(data.items || []);
        console.log('Fetched Events:', data.items);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    }

    fetchEvents();
  }, []);

  // 🔍 Filter events for the selected day
  const matchingEvents = events.filter((event) => {
    const eventDate = new Date(event.start.dateTime || event.start.date);
    return eventDate.toDateString() === value.toDateString();
  });

  return (
    <div>
      <h2>Food Truck Schedule</h2>
      <Calendar onChange={setValue} value={value} />

      {matchingEvents.length > 0 ? (
        <div>
          <h3>Schedule for {value.toDateString()}:</h3>
          {matchingEvents.map((event) => {
            const start = new Date(event.start.dateTime || event.start.date);
            const end = new Date(event.end?.dateTime || event.end?.date);
            
            const startTime = event.start.dateTime
              ? start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              : 'All day';

            const endTime = event.end?.dateTime
              ? end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              : '';

            return (
              <div key={event.id}>
                <strong>{event.summary}</strong>{' '}
                {event.location && `@ ${event.location}`} — {startTime}
                {endTime && ` to ${endTime}`}
              </div>
            );
          })}
        </div>
      ) : (
        <p>No events scheduled for {value.toDateString()}.</p>
      )}
    </div>
  );
}

export default CalendarPage;
