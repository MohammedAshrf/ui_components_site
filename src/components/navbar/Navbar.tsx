'use client';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Blogs', href: '#blogs' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Stack', href: '#stack' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <span className={styles.logo}>Mohamed Ashraf</span>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className={styles.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
