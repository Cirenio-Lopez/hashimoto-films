import Link from "next/link";

function Footer() {
  return (
    <div className="text-center font-futura-pt px-8 pt-8">
      <Link href="tel:9723438799">
        <a>9723438799</a>
      </Link>
      <p className="py-5 bottom-0">
        ©2022 Hashimoto Films. Proudly created by Cirenio Lopez
      </p>
    </div>
  );
}
export default Footer;
