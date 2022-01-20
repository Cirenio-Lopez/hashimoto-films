import Image from "next/image";
import Kailee from "../img/about.jpg";
function About() {
  return (
    <div className="p-8">
      <h2 className="font-playfair text-2xl pb-4">About Hashimoto Films</h2>
      <h3 className="font-playfair text-xl pb-4">Growing Visual Storyteller</h3>
      <p className="font-futura-pt text-lg tracking-wide pb-8">
        Hashimoto Films is run by me, Kai Hashimoto. I've had short films
        accepted in IMDB certified film festivals, I've been doing videography
        and photography for the past three years. I'm currently enrolled in
        USC's prestigious Film Production program, selecting only 60 students
        per class. I like to spend my time outside my class learning and
        applying my film knowledge. This involves me working with local
        businesses, friends, and acquaintances to provide whatever they need
        from portraits to small commercials. I do this not as a way to profit,
        but as a way to learn my craft. And I want you to be apart of that
        learning process.
      </p>
      <Image src={Kailee} alt="About image of Kailee Hashimoto" />
    </div>
  );
}
export default About;
