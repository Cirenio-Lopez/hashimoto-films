import { motion } from "framer-motion";
//Components

export default function Index() {
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
