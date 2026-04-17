import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroBackground}>
          <Image
            src="/hero-car.png"
            alt="Luxury Car Showcase"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <Navbar />

        <main className={styles.content}>
          <h1 className={styles.title}>ALi Dealership</h1>
          <p className={styles.subtitle}>
            Discover the pinnacle of luxury. Experience world-class performance 
            and exquisite design with our exclusive collection.
          </p>
          <a href="#inventory" className={styles.ctaButton}>View Inventory</a>
        </main>
      </div>

      {/* Featured Vehicles Section */}
      <section id="inventory" className={styles.featuredSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Inventory</h2>
          <Link href="/vehicles" className={styles.exploreLink}>Explore All Vehicles</Link>
        </div>

        <div className={styles.carGrid}>
          {/* Car 1 */}
          <div className={styles.carCard}>
            <div className={styles.carImageContainer}>
              <Image 
                src="/car-1.png" 
                alt="White Luxury Sports Car" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.carImage} 
              />
            </div>
            <div className={styles.carInfo}>
              <span className={styles.carYear}>2025</span>
              <h3 className={styles.carModel}>Phantom GT</h3>
              <div className={styles.carPrice}>$125,000</div>
              <div className={styles.carSpecs}>
                <span>V8 Twin Turbo</span>
                <span>1,200 mi</span>
              </div>
              <a href="#" className={styles.detailsBtn}>View Details</a>
            </div>
          </div>

          {/* Car 2 */}
          <div className={styles.carCard}>
            <div className={styles.carImageContainer}>
              <Image 
                src="/car-2.png" 
                alt="Black Premium SUV" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.carImage} 
              />
            </div>
            <div className={styles.carInfo}>
              <span className={styles.carYear}>2026</span>
              <h3 className={styles.carModel}>Apex SUV</h3>
              <div className={styles.carPrice}>$98,500</div>
              <div className={styles.carSpecs}>
                <span>Hybrid Electric</span>
                <span>15 mi</span>
              </div>
              <a href="#" className={styles.detailsBtn}>View Details</a>
            </div>
          </div>

          {/* Car 3 */}
          <div className={styles.carCard}>
            <div className={styles.carImageContainer}>
              <Image 
                src="/hero-car.png" 
                alt="Black Luxury Sports Car" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.carImage} 
              />
            </div>
            <div className={styles.carInfo}>
              <span className={styles.carYear}>2024</span>
              <h3 className={styles.carModel}>Noir Spyder</h3>
              <div className={styles.carPrice}>$145,000</div>
              <div className={styles.carSpecs}>
                <span>V10 Naturally Aspirated</span>
                <span>800 mi</span>
              </div>
              <a href="#" className={styles.detailsBtn}>View Details</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="services" className={styles.whyUsSection}>
        <h2 className={styles.whyUsTitle}>Why Choose ALi</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>✦</div>
            <h3 className={styles.featureTitle}>Unrivaled Selection</h3>
            <p className={styles.featureDesc}>
              A meticulously curated inventory of the world's most sought-after
              luxury and performance vehicles.
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>♛</div>
            <h3 className={styles.featureTitle}>White-Glove Service</h3>
            <p className={styles.featureDesc}>
              Experience an unparalleled level of personal attention and complete
              transparency throughout your journey.
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>❖</div>
            <h3 className={styles.featureTitle}>Bespoke Financing</h3>
            <p className={styles.featureDesc}>
              Tailored financial solutions that respect your time and seamlessly align
              with your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.footerBrand}>
              <Image 
                src="/images/myLogo/MyLogo.png" 
                alt="ALi Dealership Logo" 
                width={80} 
                height={46} 
                className={styles.logoImage} 
              />
            </div>
            <p className={styles.footerText}>
              The ultimate destination for luxury automotive enthusiasts.
              Elevate your driving experience today.
            </p>
          </div>
          <div>
            <h4 className={styles.footerHeading}>Showroom</h4>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>123 Luxury Avenue</a>
              <a href="#" className={styles.footerLink}>Beverly Hills, CA 90210</a>
              <a href="#" className={styles.footerLink}>contact@alidealership.com</a>
              <a href="#" className={styles.footerLink}>+1 (800) 555-0199</a>
            </div>
          </div>
          <div>
            <h4 className={styles.footerHeading}>Quick Links</h4>
            <div className={styles.footerLinks}>
              <a href="#inventory" className={styles.footerLink}>Inventory</a>
              <a href="#services" className={styles.footerLink}>Services</a>
              <a href="#" className={styles.footerLink}>Financing</a>
              <a href="#" className={styles.footerLink}>Trade-In</a>
            </div>
          </div>
          <div>
            <h4 className={styles.footerHeading}>Hours</h4>
            <div className={styles.footerLinks}>
              <span className={styles.footerLink}>Mon - Fri: 9am - 7pm</span>
              <span className={styles.footerLink}>Saturday: 10am - 5pm</span>
              <span className={styles.footerLink}>Sunday: Closed</span>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>&copy; {new Date().getFullYear()} ALi Dealership. All rights reserved.</span>
          <span>Privacy Policy &middot; Terms of Service</span>
        </div>
      </footer>
    </>
  );
}
