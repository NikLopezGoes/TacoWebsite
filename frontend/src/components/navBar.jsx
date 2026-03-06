import React, { useEffect, useRef, useState } from 'react';
import '../css/navBar.css'; // or a separate CSS file if needed
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const accumulatedRef = useRef(0);
  const lastDirRef = useRef(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY || 0;
    accumulatedRef.current = 0;
    lastDirRef.current = null;

    const onScroll = () => {
      const currentY = window.scrollY || 0;

      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const lastY = lastScrollYRef.current;
        const goingDown = currentY > lastY;
        const delta = Math.abs(currentY - lastY);
        const dir = goingDown ? 'down' : 'up';

        // Ignore tiny scroll jitter
        if (delta < 6) {
          tickingRef.current = false;
          return;
        }

        // Accumulate scroll in one direction to avoid flicker on mobile.
        if (lastDirRef.current !== dir) {
          accumulatedRef.current = 0;
          lastDirRef.current = dir;
        }
        accumulatedRef.current += delta;

        // Always show at the very top
        if (currentY <= 20) {
          setIsHidden(false);
        } else if (dir === 'down' && accumulatedRef.current > 40) {
          setIsHidden(true);
        } else if (dir === 'up' && accumulatedRef.current > 30) {
          setIsHidden(false);
        }

        lastScrollYRef.current = currentY;
        tickingRef.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
      <header className={`siteHeader ${isHidden ? 'isHidden' : ''}`}>
        <nav className="navBar" aria-label="Primary">
          <Link to="/" className="navBrand" aria-label="Kris' Tacos Home">
            <span className="navBrandMark" aria-hidden="true">
              <img className="navBrandImg" src="/images/TacoGuy.png" alt="" />
            </span>
            <span className="navBrandText">Kris' Tacos</span>
          </Link>

          <div className="navLinks">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `navLink ${isActive ? 'isActive' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) => `navLink ${isActive ? 'isActive' : ''}`}
            >
              Menu
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `navLink ${isActive ? 'isActive' : ''}`}
            >
              Contact
            </NavLink>
            <NavLink
              to="/calendar"
              className={({ isActive }) => `navLink ${isActive ? 'isActive' : ''}`}
            >
              Calendar
            </NavLink>
          </div>
        </nav>
      </header>
  );
}

export default NavBar;
