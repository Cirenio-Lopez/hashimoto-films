import Vimeo from "../components/portfolio/vimeo";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: "wp8uopenh4qw",
    accessToken: "xDgcnPxAqVj2rKf-Ei8MwBL43tThS_2XocbK_Lpslso",
  });

  const video = await client.getEntries({ content_type: "vimeoPortfolio" });

  return {
    props: {
      video: video.items,
    },
  };
}

function Portfolio({ video }) {
  return (
    <div className="flex flex-col">
      <Vimeo data={video} />
    </div>
  );
}
export default Portfolio;
