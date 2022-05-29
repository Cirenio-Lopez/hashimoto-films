import { motion } from "framer-motion";
import Vimeo from "../../components/Vimeo";
import { createClient } from "contentful";
//Components

//Contentful
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: "AusnZD5XJqAJNKsuqVHSNCIIdrn-uIYUTEQExZbJDTM",
  });

  const res = await client.getEntries({ content_type: "portfolio" });

  return {
    props: {
      portfolio: res.items,
    },
  };
}

export default function Index({ portfolio }) {
  var VimeoData = [];
  portfolio.forEach((item) => {
    VimeoData.push({
      id: item.fields.id,
      url: item.fields.videoLink,
      author: item.fields.author,
      title: item.fields.title,
      description: item.fields.description,
    });
  });
  return (
    <>
      <motion.div
        className="transition-image final"
        initial={{ y: 800, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 800, opacity: 0 }}
        transition={{
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1.6,
        }}
      >
        <Vimeo VimeoData={VimeoData} />
      </motion.div>
    </>
  );
}
