import Cover from "../components/index/cover";
import Vimeo from "../components/portfolio/vimeo";
import Insta from "../components/instagram/insta";
import Contact from "../components/contact/contact";
import Booking from "../components/booking/booking";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: "wp8uopenh4qw",
    accessToken: "xDgcnPxAqVj2rKf-Ei8MwBL43tThS_2XocbK_Lpslso",
  });

  const homepage = await client.getEntries({ content_type: "homepage" });
  const video = await client.getEntries({ content_type: "vimeoPortfolio" });
  const booking = await client.getEntries({ content_type: "homepageBooking" });

  return {
    props: {
      homepage: homepage.items,
      video: video.items,
      booking: booking.items,
    },
  };
}

function Index({ homepage, video, booking }) {
  return (
    <div className="flex flex-col">
      <Cover data={homepage[0].fields} />
      <Vimeo data={video} />
      <Insta />
      <Contact />
      <Booking data={booking[0].fields} />
    </div>
  );
}
export default Index;
