import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";
import Link from "next/link";
import Image from 'next/image';


export default function Home() {

  const cardData = [
    {
      image: "cf.png",
      title: "Children & Families",
      description: "A nurturing foundation for families and children, offering an expanse of resources spanning accommodation, health, education, and more. Find a myriad of opportunities, guidelines, and supportive mechanisms that seamlessly weave into the evolving needs of today’s families and children.",
      link: "/resources/children-families"
    },
    {
      image: "asc.png",
      title: "Adults & Senior Care",
      description: "Tailored resources ensuring quality, support, and care for adults and seniors. Navigate through a dedicated hub providing integral information related to accommodation, health services, and legal matters, amidst others, ensuring a dignified, supported living at every stage.",
      link: "/resources/adults-senior-care"
    },
    {
      image: "pr.png",
      title: "Professional Resources",
      description: "Your ally in professional development and resource access, the hub offers a plethora of information from research papers, guidance links, and training, to job and volunteering opportunities, crafting a unified platform for professionals across various domains.",
      link: "/resources/professional-resources"
    }
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className={styles.main}>

        <section className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <Image src="/nih-logo.svg" alt="Logo" />
            <p>
              Stay informed with consistently updated resources, backed by the professionalism of our esteemed partners.<br />
              Experience accurate and authoritative insights, sourced exclusively from official institutes and organizations across the UK.
            </p>
          </div>
        </section>

        <section className={styles.videoSection}>
          <video autoPlay muted loop className={styles.video}>
            <source src="/nih.mp4" type="video/mp4" />
          </video>
        </section>

        <section className={styles.cardsSection}>

          <div className={styles.resourcesHeader}>
            <span className={styles.resourcesTitle}>Resources</span>
            <div className={styles.divider}></div>

          </div>

          <div className={styles.cardsContainer}>
            {cardData.map((card, index) => (
              <div className={styles.card} key={index}>
                <Image src={card.image} alt={card.title} className={styles.cardImage} />
                <div className={styles.cardContent}>
                  <h2 className={styles.cardTitle}>{card.title}</h2>
                  <div className={styles.cardDivider}></div>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <div className={styles.linkContainer}>
                    <Link href={card.link} className={styles.cardLink}>Learn more <Image src="/arrow-right.svg" alt="Arrow Right" /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        <div className={styles.resourcesHeader}>
          <span className={styles.resourcesTitle}>Events</span>
          <div className={styles.divider}></div>
        </div>

        <section className={styles.calendarSection}>

          <div className={styles.calendarContainer}>
            <div className={styles.leftColumn}>
              <p className={styles.calendarTitle}>
                Empowering Resources with our Event Calendar
              </p>
              <p className={styles.calendarText}>
                The ebb and flow of vital events, campaigns, and conferences, all curated meticulously in our Event Calendar. Navigate through a wealth of opportunities and informative events across varied categories, ensuring you stay abreast with key dates, critical for children, adults, families, and professionals alike.
                <br /><br />
                Your journey through national events, made seamless and insightful, begins <Link href="/calendar" className={styles.linkClass}>here</Link>.             
              </p>
            </div>

            <div className={styles.rightColumn}>
              <div className={styles.calendarGrid}>
                <div className={styles.calendarMonth}>
                  October - 2023
                </div>
                <div className={styles.calendarDay}>S</div>
                <div className={styles.calendarDay}>M</div>
                <div className={styles.calendarDay}>T</div>
                <div className={styles.calendarDay}>W</div>
                <div className={styles.calendarDay}>T</div>
                <div className={styles.calendarDay}>F</div>
                <div className={styles.calendarDay}>S</div>
                {Array.from({ length: 35 }, (_, index) => (
                  <div className={styles.calendarDay} key={index}>
                    {index < 30 ? index + 1 : null}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>


        <footer className={styles.footer}>
          <Footer />
        </footer>
      </main>
    </>
  );
}
