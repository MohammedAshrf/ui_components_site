import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page} dir="rtl">
      <main className={styles.main} id="home">
        <h1 className={styles.title}>
          Mohamed <span>Ashraf</span>
        </h1>
        <h2 className={styles.subtitle}>{'{ Full-Stack dev }'}</h2>
        <p className={styles.description}>
          Welcome to my personal portfolio! I am a passionate full-stack
          developer specializing in building modern web applications, scalable
          backends, and beautiful user interfaces. Explore my projects, blog
          posts, and the technologies I use.
        </p>
        <a href="#contact" className={styles.cta}>
          <Image src="/rocket.svg" alt="Rocket" width={20} height={20} />
          Get in touch
        </a>
      </main>
      {/* Background icons */}
      <div className={styles.bgIcons} aria-hidden="true">
        <Image
          src="/file.svg"
          alt=""
          width={48}
          height={48}
          className={styles.bgIcon}
        />
        <Image
          src="/window.svg"
          alt=""
          width={48}
          height={48}
          className={styles.bgIcon}
        />
        <Image
          src="/globe.svg"
          alt=""
          width={48}
          height={48}
          className={styles.bgIcon}
        />
        {/* Add more icons as needed */}
      </div>
    </div>
  );
}
