"use client";
import React, { useState } from "react";
import Image from "next/image";
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
              <Image src="/logo.png" alt="Logo" width={65} height={55} />
            </Link>
          </div>

          <nav className={`navigation ${mobileMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#videos">Videos</Link>
              </li>
              <li>
                <Link href="#testimonials">Testimonials</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
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
