import Image from "next/image";
import Kailee from "../img/about.jpg";
import KaileeFull from "../img/about.webp";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: "wp8uopenh4qw",
    accessToken: "xDgcnPxAqVj2rKf-Ei8MwBL43tThS_2XocbK_Lpslso",
  });

  const about = await client.getEntries({ content_type: "aboutPage" });

  return {
    props: {
      about: about.items,
    },
  };
}

function About({ about }) {
  console.log(about[0].fields.image.fields.file.url);
  return (
    <div className="p-8 md:flex md:flex-row-reverse md:p-32 justify-center">
      <div className="md:max-w-[500px] md:p-16 md:bg-[#26282d] md:flex md:flex-col justify-end mt-20">
        <div className="md:flex md:flex-col-reverse">
          <h2 className="font-playfair text-2xl pb-4 md:text-4xl md:leading-[1.25em]">
            {about[0].fields.title}
          </h2>
          <h3 className="font-playfair text-xl pb-4">
            {about[0].fields.subtitle}
          </h3>
        </div>
        <p className="font-futura-pt text-lg tracking-wide pb-8">
          {about[0].fields.description.content[0].content[0].value}
        </p>
      </div>
      <div className="md:hidden">
        <Image
          src={"https:" + about[0].fields.image.fields.file.url}
          alt="About image of Kailee Hashimoto"
          width="560"
          height="820"
        />
      </div>
      <div className="hidden md:flex">
        <Image
          src={"https:" + about[0].fields.image.fields.file.url}
          alt="About image of Kailee Hashimoto"
          width="560"
          height="820"
        />
      </div>
    </div>
  );
}
export default About;
