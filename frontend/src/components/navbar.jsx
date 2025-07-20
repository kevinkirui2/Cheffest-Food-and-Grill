"use client"

import { useState } from "react"
import "./navbar.css"
import logo from '../images/logo.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="navbar-container">
      {/* Desktop Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <ul className="navbar-menu">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/menu">MENU</a>
          </li>
          <li>
            <a href="/blog">BLOG</a>
          </li>
          <li>
            <a href="/contact">CONTACT US</a>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <img src={logo} alt="Logo" className="mobile-logo" />
          <div className="close-btn" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className="mobile-menu-items">
          <li>
            <a href="/" onClick={toggleMobileMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="/menu" onClick={toggleMobileMenu}>
              MENU
            </a>
          </li>
          <li>
            <a href="/blog" onClick={toggleMobileMenu}>
              BLOG
            </a>
          </li>
          <li>
            <a href="/contact" onClick={toggleMobileMenu}>
              CONTACT US
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      <div className={`overlay ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}></div>
    </div>
  )
}

export default Navbar
