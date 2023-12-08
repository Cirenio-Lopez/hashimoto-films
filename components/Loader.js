import React from "react";
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
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const Loader = ({ setLoading }) => {
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
          <motion.video
            src={`/videos/loading_video_1.webm`}
            autoPlay
            muted
            loop
            playsInline
            layoutId="main-video-1"
            className="video-1"
            aria-label="Video that plays while webpage loads"
          />
        </motion.div>
        <VideoBlock variants={item} id="2" />
        <VideoBlock variants={item} id="3" />
        <VideoBlock variants={item} id="4" />
        <VideoBlock variants={item} id="5" />
      </motion.div>
    </div>
  );
};

export const VideoBlock = ({ id, variants }) => {
  return (
    <motion.div className={`video-block video-${id}`} variants={variants}>
      <motion.video
        src={`/videos/loading_video_${id}.webm`}
        autoPlay
        muted
        loop
        playsInline
        layoutId={`main-video-${id}`}
        className={`video-${id}`}
        aria-label="Video that plays while webpage loads"
      />
    </motion.div>
  );
};

export default Loader;
