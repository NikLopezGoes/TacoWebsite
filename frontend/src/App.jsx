import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import NavBar from './components/navBar.jsx';
import CalendarPage from './pages/Calendar.jsx'




function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<CalendarPage />} />
        <Route path="/menu" element={<CalendarPage />} />
        <Route path="/contact" element={<CalendarPage />} />
        <Route path="/about" element={<CalendarPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </div>
  );
}

export default App
