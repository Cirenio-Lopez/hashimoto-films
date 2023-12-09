import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function Nav(props) {
  library.add(faInstagram);

  return (
    <motion.nav
      className="nav-mobile"
      animate={props.show ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="inner-nav">
        <ul>
          <li>
            <Link href="/">
              <a onClick={() => props.setShow(!props.show)}>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a onClick={() => props.setShow(!props.show)}>PORTFOLIO</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a onClick={() => props.setShow(!props.show)}>GALLERY</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a onClick={() => props.setShow(!props.show)}>ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a onClick={() => props.setShow(!props.show)}>RESUME</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a onClick={() => props.setShow(!props.show)}>CONTACT</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/hashimoto_films">
              <a onClick={() => props.setShow(!props.show)}>
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
}
