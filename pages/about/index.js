import { motion } from "framer-motion";
import { createClient } from "contentful";
//Components

//Contentful
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: "AusnZD5XJqAJNKsuqVHSNCIIdrn-uIYUTEQExZbJDTM",
  });

  const res = await client.getEntries({ content_type: "about" });

  return {
    props: {
      about: res.items,
    },
  };
}

export default function Index({ about }) {
  return (
    <>
      <div className="transition-image about-wrapper">
        <motion.div
          initial={{ y: 800, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
          }}
          exit={{ y: 800, opacity: 0 }}
          className="about"
        >
          <div className="img-container">
            <motion.img src={`/images/about/index.jpg`} />
          </div>
          <div className="text-cover">
            <p className="subtitle">{about[0].fields.subtitle}</p>
            <h2 className="title">{about[0].fields.title}</h2>
            <p className="description">{about[0].fields.description}</p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
