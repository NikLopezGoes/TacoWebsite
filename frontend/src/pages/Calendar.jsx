import '../css/Calendar.css'; // or a separate CSS file if needed
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarPage() {
  const [value, setValue] = useState(new Date());

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Food Truck Schedule</h2>
      <Calendar onChange={setValue} value={value} />
      <p style={{ marginTop: '1rem' }}>
        <strong>Selected Date:</strong> {value.toDateString()}
      </p>
    </div>
  );
}

export default CalendarPage;


// import React, { useEffect, useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import '../css/Calendar.css';
// import Papa from 'papaparse';

// function CalendarPage() {
//   const [value, setValue] = useState(new Date());
//   const [events, setEvents] = useState({});

//   const sheetURL = 'https://docs.google.com/spreadsheets/d/e/your-sheet-id/pub?output=csv';

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch(sheetURL);
//         const csvText = await response.text();
//         const parsed = Papa.parse(csvText, { header: true });

//         const eventMap = {};
//         parsed.data.forEach(row => {
//           const dateKey = new Date(row.Date).toDateString();
//           eventMap[dateKey] = row.Location;
//         });

//         setEvents(eventMap);
//       } catch (error) {
//         console.error('Failed to load calendar data:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const selectedDateKey = value.toDateString();
//   const location = events[selectedDateKey];

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Food Truck Calendar</h2>
//       <Calendar onChange={setValue} value={value} />
//       <p style={{ marginTop: '1rem' }}>
//         <strong>{selectedDateKey}</strong><br />
//         {location ? `🚚 Location: ${location}` : 'No location scheduled.'}
//       </p>
//     </div>
//   );
// }

// export default CalendarPage;
