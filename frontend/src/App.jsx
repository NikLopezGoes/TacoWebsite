import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import NavBar from './components/navBar.jsx';
import CalendarPage from './pages/Calendar.jsx';
import ContactPage from './pages/contact.jsx';
import MenuPage from './pages/menu.jsx';
import HomePage from './pages/Home.jsx';
import Footer from './components/Footer.jsx';



function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <main className="app-content">
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App
