import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [show, setShow] = useState(false);
  library.add(faInstagram);

  return (
    <motion.div
      className="header"
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}
    >
      <div className="header-inner">
        <div className="logo">
          <Link href="/">
            <a onClick={() => setShow(false)}>Hashimoto Films</a>
          </Link>
        </div>
        <nav className="nav">
          <li>
            <Link href="/portfolio">Portfolio (Film)</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery (Photography)</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/hashimoto_films">
              <a style={{ fontSize: "28px" }}>
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </Link>
          </li>
        </nav>
        <motion.div
          className="hamburger-menu"
          onClick={() => setShow((show) => !show)}
          whileTap={{ scale: 0.9 }}
        >
          <span></span>
          <span></span>
        </motion.div>
      </div>
      <Nav show={show} setShow={setShow} />
    </motion.div>
  );
};

export default Header;
