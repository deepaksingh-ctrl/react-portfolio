import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../../src/assets/logo.png';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socialMedia = [
    { name: 'FB', path: "/" },
    { name: 'TW', path: "/" },
    { name: 'IN', path: "/" },
    { name: 'LN', path: "/" }
  ];

  return (
    <>
      <header className="header-navbar">
        <div className="container">
          <div className="header-inner">
            <div className="logo logodesigngit">
              <Link to="/" onClick={closeMenu}>
                <img src={Logo} alt="Logo" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>

            {/* Navigation & Actions Container */}
            <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
              <nav>
                <ul>
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link to={item.path} onClick={closeMenu}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="request-btn">
                <a href="#quote" onClick={closeMenu}>
                  Get A Quote!
                </a>
              </div>

              <div className="socialmedia-icons">
                <ul>
                  {socialMedia.map((item) => (
                    <li key={item.name}>
                      <Link to={item.path} onClick={closeMenu}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile */}
      <div
        className={`mobile-backdrop ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />
    </>
  );
}

export default Navbar;