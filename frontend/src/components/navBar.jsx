import React, { useEffect, useRef, useState } from 'react';
import '../css/navBar.css'; // or a separate CSS file if needed
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const syncMobile = () => setIsMobile(mq.matches);
    syncMobile();

    // matchMedia listener (Safari fallback supported)
    if (mq.addEventListener) mq.addEventListener('change', syncMobile);
    else mq.addListener(syncMobile);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', syncMobile);
      else mq.removeListener(syncMobile);
    };
  }, []);

  useEffect(() => {
    // On mobile, keep the header stable (no auto-hide) to avoid jitter.
    if (isMobile) {
      setIsHidden(false);
      return;
    }

    lastScrollYRef.current = window.scrollY || 0;

    const onScroll = () => {
      const currentY = window.scrollY || 0;

      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const lastY = lastScrollYRef.current;
        const goingDown = currentY > lastY;
        const delta = Math.abs(currentY - lastY);

        // Ignore tiny scroll jitter
        if (delta < 12) {
          tickingRef.current = false;
          return;
        }

        // Always show at the very top; otherwise hide on scroll-down, show on scroll-up
        const shouldHide = goingDown && currentY > 80;
        setIsHidden(shouldHide);

        lastScrollYRef.current = currentY;
        tickingRef.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

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
