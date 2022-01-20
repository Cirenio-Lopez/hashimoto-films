import Image from "next/image";
import Kailee from "../img/about.jpg";
import KaileeFull from "../img/about.webp";
function About() {
  return (
    <div className="p-8 md:flex md:flex-row-reverse md:p-32 justify-center">
      <div className="md:max-w-[500px] md:p-16 md:bg-[#26282d] md:flex md:flex-col justify-end mt-20">
        <div className="md:flex md:flex-col-reverse">
          <h2 className="font-playfair text-2xl pb-4 md:text-4xl md:leading-[1.25em]">
            About Hashimoto Films
          </h2>
          <h3 className="font-playfair text-xl pb-4">
            Growing Visual Storyteller
          </h3>
        </div>
        <p className="font-futura-pt text-lg tracking-wide pb-8">
          Hashimoto Films is run by me, Kai Hashimoto. I&apos;ve had short films
          accepted in IMDB certified film festivals, I&apos;ve been doing
          videography and photography for the past three years. I&apos;m
          currently enrolled in USC&apos;s prestigious Film Production program,
          selecting only 60 students per class. I like to spend my time outside
          my class learning and applying my film knowledge. This involves me
          working with local businesses, friends, and acquaintances to provide
          whatever they need from portraits to small commercials. I do this not
          as a way to profit, but as a way to learn my craft. And I want you to
          be apart of that learning process.
        </p>
      </div>
      <div className="md:hidden">
        <Image src={Kailee} alt="About image of Kailee Hashimoto" />
      </div>
      <div className="hidden md:flex">
        <Image src={KaileeFull} alt="About image of Kailee Hashimoto" />
      </div>
    </div>
  );
}
export default About;
