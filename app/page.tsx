import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroBackground}>
        <Image
          src="/hero-car.png"
          alt="Luxury Car Showcase"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>

      <header className={styles.header}>
        <div className={styles.logo}>ALi</div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#" className={styles.navLink}>Inventory</a>
          <a href="#" className={styles.navLink}>Services</a>
          <a href="#" className={styles.navLink}>Contact</a>
        </nav>
      </header>

      <main className={styles.content}>
        <h1 className={styles.title}>ALi Dealership</h1>
        <p className={styles.subtitle}>
          Discover the pinnacle of luxury. Experience world-class performance 
          and exquisite design with our exclusive collection.
        </p>
        <a href="#" className={styles.ctaButton}>View Inventory</a>
      </main>
    </div>
  );
}
