import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/Calendar.css'; // Your custom CSS
import { format } from 'date-fns';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const CALENDAR_ID = 'tacomyfriend@gmail.com';

function CalendarPage() {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
          CALENDAR_ID
        )}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true`;

        const response = await fetch(url);
        const data = await response.json();

        const formatted = (data.items || []).map((event) => ({
          title: event.summary,
          start: event.start.dateTime
            ? new Date(event.start.dateTime)
            : new Date(`${event.start.date}T00:00:00`), // handle all-day events

          end: event.end.dateTime
            ? new Date(event.end.dateTime)
            : new Date(`${event.end.date}T00:00:00`),

          description: event.description || '',
          allDay: !event.start.dateTime,
        }));

        setEvents(formatted);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }

    fetchEvents();
  }, []);

  const selectedDateEvents = events.filter(
    (event) => format(event.start, 'yyyy-MM-dd') === format(value, 'yyyy-MM-dd')
  );

  return (
    <div className="calendar-page">
      <h1 className="calendar-title">Kris Tacos Schedule</h1>

      <Calendar onChange={setValue} value={value} />

      <div className="event-list">
        <h2>Events on {format(value, 'PPP')}:</h2>
        {selectedDateEvents.length > 0 ? (
          selectedDateEvents.map((event, index) => (
            <div key={index} className="event-card">
              <strong>{event.title}</strong>
              <div>
                {event.allDay ? (
                  'All Day'
                ) : (
                  <>
                    {event.start.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}{' '}
                    -{' '}
                    {event.end.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </>
                )}
              </div>
              <p>{event.description || 'No description'}</p>
            </div>
          ))
        ) : (
          <p>No events for this day.</p>
        )}
      </div>
    </div>
  );
}

export default CalendarPage;
