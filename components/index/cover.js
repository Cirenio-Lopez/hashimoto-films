import Image from "next/image";
import Kailee from "../../img/index.jpg";
function Cover() {
  return (
    <div className="flex flex-col pt-8">
      <div>
        <Image src={Kailee} alt="Kailee Hashimoto"></Image>
      </div>
      <div>
        <h1 className="font-playfair text-4xl text-center pt-8">
          Hashimoto Films
        </h1>
        <h2 className="font-playfair text-2xl text-center pt-8">
          Specialized in Narrative.
          <br />
          Adaptable to your needs.
        </h2>
        <p className="font-futura-pt text-xl text-center p-8">
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
