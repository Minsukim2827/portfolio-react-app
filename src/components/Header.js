import React, { useState, useEffect } from 'react';

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }

    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        setNavOpen(false);
      });
    });
  }, [navOpen]);

  return (
    <header>
      <div className="logo" id="devminsu">
        &lt;devMinsu&gt;
      </div>
      <button onClick={() => setNavOpen(!navOpen)} className="nav-toggle" aria-label="toggle navigation">
        <span className={`hamburger ${navOpen ? 'nav-open' : ''}`}></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
          <li className="nav__item"><a href="#services" className="nav__link">My Values</a></li>
          <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
          <li className="nav__item"><a href="#work" className="nav__link">Personal Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
