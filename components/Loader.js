import React from "react";
import Image from "./Image";
import { motion } from "framer-motion";

// Variants
const container = {
  show: {
    transition: { staggerChildren: 0.35 },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 400 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading, loader }) => {
  return (
    <div className="loader">
      <motion.div
        className="loader-inner"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
      >
        <motion.div variants={itemMain} className="transition-image">
          <motion.img
            src={`/images/cover/image-1.webp`}
            alt="random alt"
            layoutId="main-image-1"
            className="image-1"
          />
        </motion.div>
        <ImageBlock
          variants={item}
          id="2"
          image={`/images/cover/image-2.webp`}
        />
        <ImageBlock
          variants={item}
          id="3"
          image={`/images/cover/image-3.webp`}
        />
        <ImageBlock
          variants={item}
          id="4"
          image={`/images/cover/image-4.webp`}
        />
        <ImageBlock
          variants={item}
          id="5"
          image={`/images/cover/image-5.webp`}
        />
      </motion.div>
    </div>
  );
};

export const ImageBlock = ({ id, variants, image }) => {
  return (
    <motion.div className={`image-block image-${id}`} variants={variants}>
      <Image src={image} alt={`image-${id}`} />
      {/* <Image src={`https: + ${photos[i].fields.image.fields.file.url}`} alt={id} /> */}
    </motion.div>
  );
};
export default Loader;
