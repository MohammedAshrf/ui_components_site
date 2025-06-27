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
        {/* Background icons - moved inside hero section */}
        <div className={styles.bgIcons} aria-hidden="true">
          <span className={styles.bgIcon} style={{ top: '10%', left: '8%' }}>
            <Image src="/window.svg" alt="Window" width={48} height={48} />
          </span>
          <span className={styles.bgIcon} style={{ top: '30%', right: '12%' }}>
            <Image src="/js.svg" alt="JavaScript" width={48} height={48} />
          </span>
          <span
            className={styles.bgIcon}
            style={{ bottom: '18%', left: '15%' }}
          >
            <Image src="/vercel.svg" alt="Vercel" width={48} height={48} />
          </span>
          <span
            className={styles.bgIcon}
            style={{ bottom: '8%', right: '20%' }}
          >
            <Image src="/react.svg" alt="React" width={48} height={48} />
          </span>
          <span className={styles.bgIcon} style={{ top: '50%', left: '25%' }}>
            <Image src="/nodejs.svg" alt="Node.js" width={48} height={48} />
          </span>
          <span className={styles.bgIcon} style={{ top: '60%', right: '10%' }}>
            <Image src="/next.svg" alt="Next.js" width={48} height={48} />
          </span>
        </div>
      </main>

      {/* Projects Section */}
      <section className={styles.projectsSection} id="projects">
        <h2 className={styles.projectsTitle}>Featured Projects</h2>
        <p className={styles.projectsSubtitle}>
          A selection of my best work, demonstrating a range of skills and
          technologies.
        </p>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <div className={styles.projectIcon}>
              <Image
                src="/globe.svg"
                alt="Global Network"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.projectName}>Global Network Platform</h3>
            <p className={styles.projectDesc}>
              A scalable platform connecting users worldwide, ensuring high
              efficiency and reliability.
            </p>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectIcon}>
              <Image
                src="/rocket.svg"
                alt="Fast Delivery"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.projectName}>Fast Delivery App</h3>
            <p className={styles.projectDesc}>
              A real-time delivery tracking app with 24/7 support and seamless
              user experience.
            </p>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectIcon}>
              <Image
                src="/vercel.svg"
                alt="Secure Platform"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.projectName}>Secure E-Commerce</h3>
            <p className={styles.projectDesc}>
              A robust e-commerce solution with advanced security and full
              insurance on all transactions.
            </p>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectIcon}>
              <Image
                src="/window.svg"
                alt="Support System"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.projectName}>Premium Support System</h3>
            <p className={styles.projectDesc}>
              A dedicated support platform with expert consultants to assist
              users at every step.
            </p>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectIcon}>
              <Image
                src="/file.svg"
                alt="Advanced Tech"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.projectName}>Advanced Tech Suite</h3>
            <p className={styles.projectDesc}>
              Utilizing the latest technologies for transparency and efficiency
              in management.
            </p>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectIcon}>
              <span className={styles.dollarIcon}>$</span>
            </div>
            <h3 className={styles.projectName}>Competitive Pricing Tool</h3>
            <p className={styles.projectDesc}>
              A pricing tool offering the best rates and exclusive deals for
              premium clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
