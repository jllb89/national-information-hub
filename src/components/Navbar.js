"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from 'next/image';


export default function Navbar() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY && currentScrollY > 1);
      setAtBottom(currentScrollY + window.innerHeight >= document.body.scrollHeight);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <>
      <div className={`${styles.menuContainer} ${menuOpen ? styles.menuOpen : ""}`}>
      <nav className={`${styles.navbar} ${scrollingDown ? styles.hidden : ""}`}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/nih-logo.svg" alt="Logo" />
          </Link>
        </div>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <ul className={`${styles.links} ${menuOpen ? styles.menuOpen : ""}`}>
          <li className={styles.dropdown}>
            <div className={styles.dropdownWrapper}>
              <Link href="/resources">
                Resources
                <span className={styles.arrowIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </span>
              </Link>
              <div className={styles.dropdownContent}>
                <Link href="/resources/children-families"><span>Children & Families</span></Link>
                <Link href="/resources/children-families"><span>Adults & Senior Care</span></Link>
                <Link href="/resources/children-families"><span>Professional Resources</span></Link>
              </div>
            </div>
          </li>
{/*           <li><Link href="/events">Events Calendar</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/faq">FAQ</Link></li> */}
{/*           <li>
            <button className={styles.loginButton}>
              <Link href="/login">Login</Link>
            </button>
          </li> */}
        </ul>
      </nav>
      {menuOpen && (
        <div className={styles.overlay}>
        </div>
      )}
      </div>
      </>

  );
}
