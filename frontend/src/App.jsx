import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import NavBar from './components/navBar.jsx';
import CalendarPage from './pages/Calendar.jsx';
import ContactPage from './pages/contact.jsx';
import MenuPage from './pages/menu.jsx';




function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<CalendarPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<CalendarPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </div>
  );
}

export default App
