'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [navbarState, setNavbarState] = useState<
    'transparent' | 'hidden' | 'solid'
  >('transparent');
  const lastScrollY = useRef(0);
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);
  const threshold = 24;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 2) {
        setNavbarState('transparent');
        setScrolledPastThreshold(false);
      } else if (!scrolledPastThreshold && currentScrollY > threshold) {
        setNavbarState('hidden');
        setScrolledPastThreshold(true);
      } else if (scrolledPastThreshold && currentScrollY > threshold) {
        setNavbarState('solid');
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolledPastThreshold]);

  let navbarClass = styles.navbar;
  if (navbarState === 'transparent')
    navbarClass += ' ' + styles.navbarTransparent;
  if (navbarState === 'solid') navbarClass += ' ' + styles.navbarSolid;

  // Animation variants for Framer Motion
  const variants = {
    initial: { y: '-100%', opacity: 0 },
    transparent: {
      y: 0,
      opacity: 1,
      transition: { type: 'tween' as const, duration: 0.2 },
    },
    solid: {
      y: ['-100%', '10%', '-5%', '0%'],
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: { y: '-100%', opacity: 0, transition: { duration: 0.15 } },
  };

  return (
    <AnimatePresence>
      {navbarState !== 'hidden' && (
        <motion.nav
          key={navbarState}
          className={navbarClass}
          initial="initial"
          animate={navbarState}
          exit="exit"
          variants={variants}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            zIndex: 100,
          }}
        >
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
