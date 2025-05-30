"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link href="/">
              <img src="/images/logo.png" alt="Logo" width={65} height={55} />
            </Link>
          </div>

          <nav className={`navigation ${mobileMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link href="#about" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#videos" onClick={() => setMobileMenuOpen(false)}>
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            <div className={`hamburger ${mobileMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
