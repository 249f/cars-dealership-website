import Image from "next/image";
import Link from "next/link";
import { supabase } from "../../lib/supabase";
import styles from "./page.module.css";

// Force Next.js to render this dynamically so we always see fresh DB states
export const dynamic = 'force-dynamic';

export default async function VehiclesPage() {
  let cars = [];
  let fetchError = null;

  try {
    const { data, error } = await supabase.from('cars').select('*');
    if (error) {
      console.error('Supabase fetch error:', error);
      fetchError = error.message;
    } else {
      cars = data || [];
    }
  } catch (err) {
    console.error('Failed to fetch from Supabase:', err);
    fetchError = String(err);
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>ALi</div>
        <Link href="/" className={styles.backLink}>← Back to Home</Link>
      </header>

      <main className={styles.content}>
        <h1 className={styles.pageTitle}>Explore Collection</h1>

        {fetchError && (
          <div className={styles.emptyState}>
            <p>We encountered an issue checking the database.</p>
            <p style={{ fontSize: '0.875rem', marginTop: '1rem', color: '#ff4444' }}>
              Error Details: {fetchError}
            </p>
            <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
              Have you added your Supabase URL and Key to the .env file yet?
            </p>
          </div>
        )}

        {!fetchError && cars.length === 0 && (
          <div className={styles.emptyState}>
            <p>Our expansive new collection has not yet arrived. Please check back soon.</p>
            <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
              (If you just created the Supabase table, make sure you add some rows!)
            </p>
          </div>
        )}

        {!fetchError && cars.length > 0 && (
          <div className={styles.carGrid}>
            {cars.map((car: any, index: number) => (
              <div key={index} className={styles.carCard}>
                <div className={styles.carImageContainer}>
                  {car.image_link ? (
                    <Image 
                      src={car.image_link} 
                      alt={car.name || 'Vehicle'} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.carImage} 
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      No Image Available
                    </div>
                  )}
                </div>
                <div className={styles.carInfo}>
                  <h3 className={styles.carName}>{car.name || 'Unnamed Vehicle'}</h3>
                  <p className={styles.carDesc}>{car.description || 'No description provided.'}</p>
                  
                  <div className={styles.carPrice}>
                    ${Number(car.price || 0).toLocaleString()}
                  </div>
                  
                  <button className={styles.detailsBtn}>Reserve</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
