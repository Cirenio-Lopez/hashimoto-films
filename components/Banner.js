import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Variants

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
  exit: { y: 800, opacity: 0 },
};

const letterAnimation = {
  initial: {
    y: 800,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
  exit: { y: 800, opacity: 0 },
};

const Banner = (props) => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 1800);
  }, []);
  return (
    <>
      {props.location == "/" ? (
        <motion.div className="banner" variants={banner} key="banner-wrapper-1">
          <BannerRowTop title={"Film"} />
          <BannerRowCenter
            title={"Hashimoto Films"}
            playMarquee={playMarquee}
          />
          <BannerRowBottom title={"Photo"} />
        </motion.div>
      ) : props.location == "/portfolio" ? (
        <motion.div className="banner" variants={banner} key="banner-wrapper-1">
          <BannerRowCenter title={"Portfolio"} playMarquee={playMarquee} />
        </motion.div>
      ) : props.location == "/gallery" ? (
        <motion.div className="banner" variants={banner} key="banner-wrapper-1">
          <BannerRowCenter title={"Gallery"} playMarquee={playMarquee} />
        </motion.div>
      ) : props.location == "/about" ? (
        <motion.div className="banner" variants={banner} key="banner-wrapper-1">
          <BannerRowCenter title={"About"} playMarquee={playMarquee} />
        </motion.div>
      ) : props.location == "/contact" ? (
        <motion.div className="banner" variants={banner} key="banner-wrapper-1">
          <BannerRowCenter title={"Contact"} playMarquee={playMarquee} />
        </motion.div>
      ) : (
        <motion.div className="banner" variants={banner} key="banner-wrapper-1">
          <BannerRowTop title={"Film"} />
          <BannerRowCenter
            title={"Hashimoto Films"}
            playMarquee={playMarquee}
          />
          <BannerRowBottom title={"Photo"} />
        </motion.div>
      )}
    </>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className="row-title"
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
    key="animatedLetters"
  >
    {[...title].map((letter, index) => (
      <motion.span
        className="row-letter"
        variants={letterAnimation}
        key={index}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        className="row-col"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", delay: 0.4 }}
        key="top-banner"
      >
        <span className="row-message">
          Specialized in Narrative. Adaptable to your needs.
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <div className="row-col bottom">
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </div>
  );
};

export default Banner;
