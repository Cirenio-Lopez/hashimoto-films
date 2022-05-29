import { motion } from "framer-motion";
import { createClient } from "contentful";
//Components

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: "AusnZD5XJqAJNKsuqVHSNCIIdrn-uIYUTEQExZbJDTM",
  });

  const res = await client.getEntries({ content_type: "loader" });

  return {
    props: {
      loader: res.items,
      fallback: false,
    },
  };
}

export default function Index({ loader }) {
  return (
    <>
      <div className="transition-image final">
        <motion.img
          src={`/images/cover/image-1.webp`}
          layoutId="main-image-1"
          initial={{ y: 800, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
          }}
          exit={{ y: 800, opacity: 0 }}
        />
      </div>
    </>
  );
}
