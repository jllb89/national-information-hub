import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
      <div className={styles.column}>
        <Link href="/">
          <img src="/nih-logo.svg" alt="Logo" />
        </Link>
      </div>
      <div className={styles.column}>
        <Link href="/events">Events Calendar</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/faq">FAQ</Link>
      </div>
      <div className={styles.column}>
      <Link href="/resources/children-families">Resources</Link>

        <Link href="/resources/children-families">Children & Families</Link>
        <Link href="/resources/adults-senior-care">Adults & Senior Care</Link>
        <Link href="/resources/professional-resources">Professional Resources</Link>
      </div>
      <div className={styles.column}>
        <img src="/facebook.svg" alt="Social Icon 1" />
        <img src="/youtube.svg" alt="Social Icon 2" />
        <img src="/twitter.svg" alt="Social Icon 3" />
        <img src="/linkedin.svg" alt="Social Icon 4" />
        </div>
      </div>
    </footer>
  );
}