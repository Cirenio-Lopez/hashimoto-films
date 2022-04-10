import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <span className="phone">9723438799</span>
      <div className="copyright-wrapper">
        <span>©2020 by Hashimoto Films.&nbsp;</span>
        <span>
          Created by <Link href="https://www.cirenio.net/">Cirenio</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
