import Image from "next/image";
import Kailee from "../../img/index.jpg";

function Cover({ data }) {
  return (
    <div className="flex flex-col pt-8 md:pt-0 md:px-20 md:flex-row-reverse md:min-h-[500px] md:h-[60vh] md:pb-16">
      <div className="md:w-1/2 md:relative hidden md:inline">
        <Image
          src={"https:" + data.coverImage.fields.file.url}
          alt="Kailee Hashimoto"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="md:w-1/2 md:relative md:hidden">
        <Image src={Kailee} alt="Kailee Hashimoto"></Image>
      </div>
      <div className="md:w-1/2 md:bg-[#26282d] md:justify-center md:flex md:flex-col">
        <h1 className="font-playfair text-4xl md:text-7xl md:leading-[1.125em] text-center pt-8 md:pt-0 md:px-4">
          {data.title}
        </h1>
        <h2 className="font-playfair text-2xl md:text-xl text-center pt-8 px-4">
          {data.subtitle}
        </h2>
        <p className="font-futura-pt text-xl md:text-lg text-center p-8 2xl:px-40">
          {data.description_0}
        </p>
      </div>
    </div>
  );
}

export default Cover;
