import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [show, setShow] = useState();
  library.add(faInstagram);
  return (
    <>
      <header className="flex z-30 relative overflow-hidden justify-between w-full font-playfair">
        <div className=" pt-8 pl-8">
          <Link aria-label="Kailee Hashimoto" href="/" passHref={true}>
            <a className="h-6 sm:block text-2xl">Hashimoto Films</a>
          </Link>
        </div>
        <div className="flex items-center z-10  pt-8 pr-8">
          <div
            className={`tham tham-e-spin tham-w-8 ${show ? "tham-active" : ""}`}
            onClick={() => setShow(!show)}
          >
            <div className="tham-box">
              <div className="tham-inner bg-white" />
            </div>
          </div>
        </div>
        <nav
          className={`fixed bg-[#1e2025] w-full h-screen flex flex-col justify-center items-center text-2xl transition-all duration-300 delay-3 00 ${
            show ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <Link href="/">
            <a className="pb-6" onClick={() => setShow(!show)}>
              Home
            </a>
          </Link>
          <Link href="/portfolio-film">
            <a className="pb-6" onClick={() => setShow(!show)}>
              Portfolio (Film)
            </a>
          </Link>
          <Link href="/gallery-photography">
            <a className="pb-6" onClick={() => setShow(!show)}>
              Gallery (Photography)
            </a>
          </Link>
          <Link href="/about">
            <a className="pb-6" onClick={() => setShow(!show)}>
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="pb-6" onClick={() => setShow(!show)}>
              Contact
            </a>
          </Link>
          <Link href="https://www.instagram.com/hashimoto_films/">
            <a className="pb-6" onClick={() => setShow(!show)}>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
          </Link>
        </nav>
      </header>
    </>
  );
}
export default Header;
