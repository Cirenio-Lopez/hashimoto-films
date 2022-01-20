import Image from "next/image";
import Kailee from "../../img/index.jpg";
function Cover() {
  return (
    <div className="flex flex-col pt-8 md:pt-0 md:px-20 md:flex-row-reverse md:min-h-[500px] md:h-[60vh] md:pb-16">
      <div className="md:w-1/2 md:relative hidden md:inline">
        <Image
          src={Kailee}
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
          Hashimoto Films
        </h1>
        <h2 className="font-playfair text-2xl md:text-xl text-center pt-8 md:px-4">
          Specialized in Narrative.
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          Adaptable to your needs.
        </h2>
        <p className="font-futura-pt text-xl md:text-lg text-center p-8 2xl:px-40">
          I believe that a creative endeavor cannot be undertaken by a single
          person. My goal is to learn and absorb as much information about film
          and photography as possible, in order to better myself. YOU need a
          photo shoot or a video project done and you need someone to help.
          Together, we can solve both of our problems together.
        </p>
      </div>
    </div>
  );
}
export default Cover;
