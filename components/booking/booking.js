import Image from "next/image";
import Link from "next/link";
function Booking({ data }) {
  return (
    <div className="md:w-[900px] md:h-[1100px] md:m-auto">
      <div className="flex flex-col px-8 py-10">
        <div className="md:h-auto w-full bg-white flex flex-col md:flex-row mb-10">
          <div className="p-[0.05rem] md:w-[70%]">
            <Image
              src={"https:" + data.headshotImage.fields.file.url}
              alt="Headshots"
              width="516"
              height="341"
            ></Image>
          </div>
          <div className="md:w-[50%]">
            <div className="text-black pt-5 font-futura-pt px-6 ">
              <h2 className="text-3xl pb-3">Headshots</h2>
              <p className="text-lg pb-4 border-b border-b-black">
                {data.headshotDescription}
              </p>
            </div>
            <div className="text-black pt-5 font-futura-pt px-6 ">
              <p className="text-lg">1hr</p>
              <p className="text-lg">{data.headshotPrice}</p>
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
        <div className="md:h-auto w-full bg-white flex flex-col md:flex-row mb-10">
          <div className="p-[0.05rem] md:w-[70%]">
            <Image
              src={"https:" + data.portraitImage.fields.file.url}
              width="516"
              height="341"
              alt="Headshots"
            ></Image>
          </div>
          <div className="md:w-[50%]">
            <div className="text-black pt-5 font-futura-pt px-6 ">
              <h2 className="text-3xl pb-3">Portraits</h2>
              <p className="text-lg pb-4 border-b border-b-black">
                {data.portraitDescription}
              </p>
            </div>
            <div className="text-black pt-5 font-futura-pt px-6 ">
              <p className="text-lg">1hr</p>
              <p className="text-lg">{data.portraitPrice}</p>
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
        <div className="md:h-auto w-full bg-white flex flex-col md:flex-row mb-10">
          <div className="p-[0.05rem] md:w-[70%]">
            <Image
              src={"https:" + data.videographyImage.fields.file.url}
              width="516"
              height="341"
              alt="Headshots"
            ></Image>
          </div>
          <div className="md:w-[50%]">
            <div className="text-black pt-5 font-futura-pt px-6 ">
              <h2 className="text-3xl pb-3">Videography</h2>
              <p className="text-lg pb-4 border-b border-b-black">
                {data.videographyDescription}
              </p>
            </div>
            <div className="text-black pt-5 font-futura-pt px-6 ">
              <p className="text-lg">{data.videographyPrice}</p>
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
