"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

interface NavbarProps {
  variant?: 'transparent' | 'solid';
  showFullMenu?: boolean;
}

export default function Navbar({ variant = 'transparent', showFullMenu = true }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (variant === 'solid') return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  const isSolid = variant === 'solid' || isScrolled;
  const headerClass = `${styles.header} ${isSolid ? styles.headerSolid : ""}`;

  return (
    <header className={headerClass}>
      <Link href="/" className={styles.logo}>
        <Image 
          src="/images/myLogo/MyLogo.png" 
          alt="ALi Dealership Logo" 
          width={100} 
          height={57} 
          className={styles.logoImage} 
          priority
        />
      </Link>
      
      {showFullMenu ? (
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/#inventory" className={styles.navLink}>Inventory</Link>
          <Link href="/#services" className={styles.navLink}>Services</Link>
          <Link href="/#contact" className={styles.navLink}>Contact</Link>
        </nav>
      ) : (
        <Link href="/" className={styles.backLink}>← Back to Home</Link>
      )}
    </header>
  );
}
