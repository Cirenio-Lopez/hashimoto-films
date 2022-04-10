import { motion } from "framer-motion";
import Link from "next/link";

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
          <motion.img src={`/images/cover/image-contact.webp`} />
          <div className="text-cover">
            <h2 className="title">Let's get in touch!</h2>
            <p className="subtitle">
              What are you waiting for? I can't wait to start!
            </p>
            <p
              className="description"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link href="mailto:hashimotofilms@gmail.com">
                <a
                  style={{
                    color: "inherit",
                    fontWeight: "inherit",
                    padding: "5px 0",
                  }}
                >
                  hashimotofilms@gmail.com
                </a>
              </Link>
              <Link href="tel:9723438799">
                <a
                  style={{
                    color: "inherit",
                    fontWeight: "inherit",
                    padding: "5px 0",
                  }}
                >
                  9723438799
                </a>
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
