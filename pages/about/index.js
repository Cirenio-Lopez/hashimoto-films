import { motion } from "framer-motion";
export default function Index() {
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
          <motion.img src={`/images/cover/image-about.webp`} />
          <div className="text-cover">
            <p className="subtitle">Growing Visual Storyteller</p>
            <h2 className="title">About Hashimoto Films</h2>
            <p className="description">
              Hashimoto Films is run by me, Kai Hashimoto. I&lsquo;ve had short
              films accepted in IMDB certified film festivals, I&lsquo;ve been
              doing videography and photography for the past three years.
              I&lsquo;m currently enrolled in USC&lsquo;s prestigious Film
              Production program, selecting only 60 students per class. I like
              to spend my time outside my class learning and applying my film
              knowledge. This involves me working with local businesses,
              friends, and acquaintances to provide whatever they need from
              portraits to small commercials. I do this not as a way to profit,
              but as a way to learn my craft. And I want you to be apart of that
              learning process.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
