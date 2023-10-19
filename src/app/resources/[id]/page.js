import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import styles from "../page.module.css";
import Link from "next/link";
import Image from 'next/image';



export default function Resources() {

  const mediaSection = [
    {
      category: "Children & Families",
      subcategory: "Leisure",
      mediaCategory: "Video",
      backgroundImage: "/media-bg1.png",
      videoTitle: "Virtual Playground Adventures",
      description: "Explore imaginative and interactive virtual playgrounds, ensuring children experience playful adventures from the comfort of home.",
      file: "/videos/virtual-playground.mp4"
    },
    {
      category: "Children & Families",
      subcategory: "Accomodation",
      mediaCategory: "Video",
      backgroundImage: "/media-bg5.png",
      videoTitle: "The AR Alphabet Journey",
      description: "Children embark on a whimsical journey through the alphabet, encountering animated characters and interactive stories using Augmented Reality.",
      file: "/videos/ar-alphabet-journey.mp4"
    },
    {
      category: "Children & Families",
      subcategory: "Education",
      mediaCategory: "Video",
      backgroundImage: "/media-bg3.png",
      videoTitle: "Techy Tot&apos;s First Computer",
      description: "Discover foundational computer skills through playful, engaging visuals aimed at introducing tots to the digital world.",
      file: "/videos/techy-tot.mp4"
    },
    {
      category: "Children & Families",
      subcategory: "Training",
      mediaCategory: "Video",
      backgroundImage: "/media-bg4.png",
      videoTitle: "Healthy Habits with Harry the Hippo",
      description: "Join Harry the Hippo in fun animations, teaching children about hygiene, nutrition, and daily healthy habits.",
      file: "/videos/healthy-habits.mp4"
    }
  ];

  const linksSection = [
    {
      category: "Children & Families",
      subcategory: "Leisure",
      videoTitle: "Childnet International",
      description: "Providing resources and insights to ensure a safe online environment for children.",
      link: "https://www.childnet.com/"
    },
    {
      category: "Children & Families",
      subcategory: "Leisure",
      videoTitle: "NSPCC Learning",
      description: "Ensuring child protection with resources, training, and research to safeguard children.",
      link: "https://learning.nspcc.org.uk/"
    },
    {
      category: "Children & Families",
      subcategory: "Leisure",
      videoTitle: "Young Minds",
      description: "Advocating for children&apos;s mental health with resources, support, and interventions.",
      link: "https://youngminds.org.uk/"
    },
    {
      category: "Children & Families",
      subcategory: "Leisure",
      videoTitle: "The Children’s Society",
      description: "Engage with resources, insights, and support mechanisms, all geared towards championing children&apos;s rights and voices.",
      link: "https://www.childrenssociety.org.uk/"
    }
  ];

  const articlesSection = [
    {
      category: "Children & Families",
      subcategory: "Accommodation",
      videoTitle: "How I Managed a Young Family",
      date: "Jul 7, 2021",
      description: "A personal narrative on balancing family needs while going through the process of building a home.",
      url: "https://medium.com/@davidosborn_37027/how-i-managed-a-young-family-while-building-a-home-c9d1df4b8e59"
    },
    {
      category: "Children & Families",
      subcategory: "Education",
      videoTitle: "The Challenges of Homeschooling",
      date: "Mar 15, 2022",
      description: "Exploring the ups and downs of homeschooling and the impact on family life.",
      url: "https://medium.com/@johndoe/the-challenges-and-rewards-of-homeschooling-4a2d334bdd"
    },
    {
      category: "Children & Families",
      subcategory: "Leisure",
      videoTitle: "Managing Work, Family & Leisure",
      date: "Sep 10, 2021",
      description: "Spending quality time with your spouse or children can benefit them in the long run. Balancing work and leisure time can be challenging but integrating family time into leisure time is achievable.",
      url: "https://genittaienipascal.medium.com/tips-for-managing-work-family-leisure-dc56f15e9e7c"
    },
    {
      category: "Children & Families",
      subcategory: "Leisure",
      videoTitle: "Making Time for Leisure",
      date: "Feb 8, 2022",
      description: "Leisure time allows you to step back — physically but most important, mentally — from stress. During leisure activities, you can achieve relaxation and better mental tuning.",
      url: "https://medium.com/@janedoe/the-importance-of-making-time-for-leisure-8a7f9ed67b2"
    }
  ];

  const documentsSection = [
    {
      category: "Children & Families",
      subcategory: "Education",
      backgroundImage: "/ch-bg2.png",
      videoTitle: "The Importance of Play",
      author: "N/A",
      description: "An article discussing the importance of play in children&apos;s education and development.",
      url: "https://www.childcareexchange.com/catalog/product/the-importance-of-play/3600496/"
    },
    {
      category: "Children & Families",
      subcategory: "Accommodation",
      backgroundImage: "/ch-bg3.png",
      videoTitle: "Family Friendly Accommodation",
      author: "N/A",
      description: "A guide on choosing family-friendly accommodation for vacations or trips.",
      url: "https://www.familyvacationcritic.com/family-friendly-hotels/art/"
    }
  ];
  

  return (
    <>
      <header>
        <Navbar />
      </header>

      <section className={styles.filterSection}>
        <div className={styles.categoriesHeader}>
          <span className={styles.resourcesTitle}>Category:</span>
          <span className={styles.resourcesTitle}>Subcategory:</span>
        </div>
      </section>

      <section className={styles.mediaSection}>
        <div className={styles.resourcesHeader}>
          <span className={styles.resourcesTitle}>Media & Entertainment</span>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.mediaOuterContainer}>
          <div className={styles.mediaContainer}>
            {mediaSection.map((media, index) => (
              <div className={styles.mediaCard} key={index} style={{ backgroundImage: `url(${media.backgroundImage})` }}>
                <p className={styles.mediaTitle}>{media.videoTitle}</p>
                <span className={styles.mediaCategory}>{media.mediaCategory}</span>
                <p className={styles.mediaDescription}>{media.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className={styles.linksSection}>
        <div className={styles.resourcesHeader}>
          <span className={styles.resourcesTitle}>External links</span>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.mediaOuterContainer}>
          <div className={styles.mediaContainer}>
            {linksSection.map((links, index) => (
              <div className={styles.linksCard} key={index}>
                <p className={styles.mediaTitle}>{links.videoTitle}</p>
                <span className={styles.linksCategory}>{links.linksCategory}</span>
                <p className={styles.mediaDescription}>{links.description}</p>
                <Link href={links.link} className={styles.cardLink}>Follow link</Link>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className={styles.articlesSection}>
        <div className={styles.resourcesHeader}>
          <span className={styles.resourcesTitle}>Articles</span>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.mediaOuterContainer}>
          <div className={styles.mediaContainer}>
            {articlesSection.map((articles, index) => (
              <div className={styles.articlesCard} key={index}>
                <p className={styles.mediaTitle}>{articles.videoTitle}</p>
                <p className={styles.articlesDate}>{articles.date}</p>
                <p className={styles.mediaDescription}>{articles.description}</p>
                <Link href={articles.url} className={styles.cardLink}>Read article</Link>
              </div>
            ))}
          </div>
        </div>
      </section>




      <section className={styles.documentsSection}>
        <div className={styles.resourcesHeader}>
          <span className={styles.resourcesTitle}>PDF&apos;s & Documents</span>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.mediaOuterContainer}>
          <div className={styles.mediaContainer}>
            {documentsSection.map((documents, index) => (
              <div className={styles.documentsCard} key={index} style={{ backgroundImage: `url(${documents.backgroundImage})` }}>
                  <p className={styles.mediaTitle}>{documents.videoTitle}</p>
                  <p className={styles.mediaDescription}>{documents.description}</p>
                  <Link href={documents.url} className={styles.cardLink}>View document</Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      <div className={styles.resourcesHeader}>
          <span className={styles.resourcesTitle}>Events</span>
          <div className={styles.divider}></div>
        </div>
      <section className={styles.eventsSection}>


        <div className={styles.calendarCard}>
                  <p className={styles.calendarDescription}>Visit our Calendar Page to stay informed about events about this and other topics.</p>
                  <Link href="/calendar" className={styles.calendarLink}>Visit our calendar</Link>
              </div>
      </section>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}
