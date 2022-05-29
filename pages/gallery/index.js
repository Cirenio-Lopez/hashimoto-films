import Gallery from "../../components/Gallery";
import { motion } from "framer-motion";
import { createClient } from "contentful";
//Components

//Contentful
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: "AusnZD5XJqAJNKsuqVHSNCIIdrn-uIYUTEQExZbJDTM",
  });

  const res = await client.getEntries({ content_type: "gallery" });

  return {
    props: {
      gallery: res.items,
    },
  };
}

export default function Index({ gallery }) {
  var galleryData = [];
  gallery.forEach((item) => {
    galleryData.push({
      id: item.fields.id,
      original: "https:" + item.fields.photo.fields.file.url,
      thumbnail: "https:" + item.fields.photo.fields.file.url,
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
        <Gallery images={galleryData} />
      </motion.div>
    </>
  );
}
