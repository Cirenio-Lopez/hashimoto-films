import Image from "next/image";
import Link from "next/link";
import contactImage from "../../img/contact.jpg";
function Contact() {
  return (
    <div className="flex flex-col text-center bg-[#26282d] py-8 md:py-0 md:mx-20 md:flex-row-reverse">
      <div className="md:w-1/2 md:relative hidden md:inline">
        <Image
          src={contactImage}
          alt="Contact Laptop"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="md:w-1/2 md:relative md:hidden">
        <Image src={contactImage} alt="Contact Laptop"></Image>
      </div>
      <div className="md:w-1/3 md:m-auto md:py-32">
        <h1 className="font-playfair text-3xl pt-10">
          Let&apos;s get in touch!
        </h1>
        <p className="font-futura-pt pt-5 text-lg">
          What are you waiting for? I can&apos;t wait to start!
        </p>
        <form className="bg-transparent text-xl font-futura-pt px-5">
          <div className="py-2">
            <input
              className="bg-transparent w-full border-b h-14"
              type="text"
              name="name"
              placeholder="Name"
            ></input>
          </div>
          <div className="py-2">
            <input
              className="bg-transparent w-full border-b h-14"
              type="text"
              name="Email"
              placeholder="Email"
            ></input>
          </div>
          <div className="py-2">
            <input
              className="bg-transparent w-full border-b h-14"
              type="text"
              name="Subject"
              placeholder="Subject"
            ></input>
          </div>
          <div className="py-2">
            <textarea
              className="bg-transparent w-full border-b h-32"
              name="body"
              placeholder="Type your message here..."
            ></textarea>
          </div>
        </form>
        <div className="pb-2 px-5">
          <button
            className="w-full text-black bg-white h-14 text-2xl font-playfair hover:opacity-70 transition duration-300"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </div>
        <div className="pt-14 font-futura-pt text-xl flex flex-col md:hidden">
          <Link href="mailto:hashimotofilms@gmail.com">
            <a className="pb-10">hashimotofilms@gmail.com</a>
          </Link>
          <Link href="tel:9723438799">
            <a className="pb-10">9723438799</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Contact;
