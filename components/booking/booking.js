import Image from "next/image";
import Link from "next/link";
import bookingOne from "../../img/booking1.jpg";
import bookingTwo from "../../img/booking2.jpg";
import bookingThree from "../../img/booking3.jpg";
function Booking() {
  return (
    <div className="md:max-w-[900px] md:m-auto">
      <div className="flex flex-col px-8 py-10">
        <div className="md:h-auto w-full bg-white flex flex-col md:flex-row md:mb-10">
          <div className="p-[0.05rem] md:w-[70%]">
            <Image src={bookingOne} alt="Headshots"></Image>
          </div>
          <div className="md:w-[50%]">
            <div className="text-black pt-5 font-futura-pt px-6 ">
              <h2 className="text-3xl pb-3">Headshots</h2>
              <p className="text-lg pb-4 border-b border-b-black">
                Looking for a new profile picture or headshot for your next
                audition?
              </p>
            </div>
            <div className="text-black pt-5 font-futura-pt px-6 ">
              <p className="text-lg">1hr</p>
              <p className="text-lg">Starting at $100</p>
            </div>
            <div className="px-6 pt-5 pb-5">
              <Link href="/">
                <a>
                  <button className="bg-[#1e2025] h-12 w-full hover:opacity-70 transition duration-300">
                    Book Now
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:h-auto w-full bg-white flex flex-col md:flex-row md:mb-10">
          <div className="p-[0.05rem] md:w-[70%]">
            <Image src={bookingTwo} alt="Headshots"></Image>
          </div>
          <div className="md:w-[50%]">
            <div className="text-black pt-5 font-futura-pt px-6 ">
              <h2 className="text-3xl pb-3">Portraits</h2>
              <p className="text-lg pb-4 border-b border-b-black">
                Senior, baby or adult, it doesn&apost matter, I&aposll take
                whatever you need
              </p>
            </div>
            <div className="text-black pt-5 font-futura-pt px-6 ">
              <p className="text-lg">1hr</p>
              <p className="text-lg">Starting at $325</p>
            </div>
            <div className="px-6 pt-5 pb-5">
              <Link href="/">
                <a>
                  <button className="bg-[#1e2025] h-12 w-full hover:opacity-70 transition duration-300">
                    Book Now
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:h-auto w-full bg-white flex flex-col md:flex-row md:mb-10">
          <div className="p-[0.05rem] md:w-[70%]">
            <Image src={bookingThree} alt="Headshots"></Image>
          </div>
          <div className="md:w-[50%]">
            <div className="text-black pt-5 font-futura-pt px-6 ">
              <h2 className="text-3xl pb-3">Videography</h2>
              <p className="text-lg pb-4 border-b border-b-black">
                Promotional, narrative, documentary, BTS, music video, you name
                it!
              </p>
            </div>
            <div className="text-black pt-5 font-futura-pt px-6 ">
              <p className="text-lg">Price Varies</p>
            </div>
            <div className="px-6 pt-5 pb-5">
              <Link href="/">
                <a>
                  <button className="bg-[#1e2025] h-12 w-full hover:opacity-70 transition duration-300">
                    Book Now
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Booking;
