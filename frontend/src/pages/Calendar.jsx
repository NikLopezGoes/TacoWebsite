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
  const [status, setStatus] = useState('idle'); // idle | loading | error | ready
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function fetchEvents() {
      try {
        if (!API_KEY) {
          setStatus('error');
          setErrorMessage('Missing Google Calendar API key (VITE_GOOGLE_API_KEY).');
          return;
        }

        setStatus('loading');
        const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
          CALENDAR_ID
        )}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Calendar request failed (${response.status})`);
        }
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
        setStatus('ready');
      } catch (error) {
        console.error('Error fetching events:', error);
        setStatus('error');
        setErrorMessage('Unable to load events right now. Please try again later.');
      }
    }

    fetchEvents();
  }, []);

  const selectedDateEvents = events.filter(
    (event) => format(event.start, 'yyyy-MM-dd') === format(value, 'yyyy-MM-dd')
  );

  const upcomingEvents = [...events]
    .filter((e) => e.end >= new Date())
    .sort((a, b) => a.start - b.start)
    .slice(0, 6);

  const formatTimeRange = (event) => {
    if (event.allDay) return 'All day';
    const start = event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const end = event.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${start} – ${end}`;
  };

  return (
    <div className="calendarPage">
      <section className="calendarHero">
        <div className="calendarHeroInner">
          <h1 className="calendarTitle">Truck Schedule</h1>
          <p className="calendarSubtitle">
            Tap a date to see where we’ll be. We keep this calendar updated as events are confirmed.
          </p>
        </div>
      </section>

      <section className="calendarMain" aria-label="Calendar and events">
        <div className="calendarGrid">
          <div className="calendarCard">
            <div className="calendarCardHeader">
              <h2 className="calendarCardTitle">Select a day</h2>
            </div>

            <div className="calendarWidget">
              <Calendar
                onChange={setValue}
                value={value}
                calendarType="gregory"
              />
            </div>

            {status === 'loading' && (
              <div className="calendarNotice calendarNotice--loading" role="status" aria-live="polite">
                Loading events…
              </div>
            )}
            {status === 'error' && (
              <div className="calendarNotice calendarNotice--error" role="status" aria-live="polite">
                {errorMessage}
              </div>
            )}
          </div>

          <div className="eventsColumn">
            <div className="eventsCard">
              <h2 className="calendarCardTitle">Events on {format(value, 'PPP')}</h2>

              {selectedDateEvents.length > 0 ? (
                <div className="eventList">
                  {selectedDateEvents.map((event, index) => (
                    <article key={`${format(event.start, 'T')}-${index}`} className="eventCard">
                      <div className="eventTop">
                        <div className="eventTitle">{event.title}</div>
                        <div className="eventTime">{formatTimeRange(event)}</div>
                      </div>
                      <div className="eventDescription">
                        {event.description?.trim() ? event.description : 'No details provided.'}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="eventsEmpty">No events on this day.</p>
              )}
            </div>

            <div className="eventsCard">
              <h2 className="calendarCardTitle">Upcoming</h2>
              {upcomingEvents.length > 0 ? (
                <div className="upcomingList">
                  {upcomingEvents.map((event, index) => (
                    <button
                      key={`${format(event.start, 'T')}-${index}-upcoming`}
                      type="button"
                      className="upcomingItem"
                      onClick={() => setValue(event.start)}
                    >
                      <div className="upcomingDate">{format(event.start, 'EEE, MMM d')}</div>
                      <div className="upcomingMeta">
                        <div className="upcomingTitle">{event.title}</div>
                        <div className="upcomingTime">{formatTimeRange(event)}</div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="eventsEmpty">No upcoming events found.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CalendarPage;
