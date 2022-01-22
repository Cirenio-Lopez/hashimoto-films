import ImageGallery from "react-image-gallery";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: "wp8uopenh4qw",
    accessToken: "xDgcnPxAqVj2rKf-Ei8MwBL43tThS_2XocbK_Lpslso",
  });

  const photos = await client.getEntries({
    content_type: "galleryPhotography",
  });

  return {
    props: {
      photos: photos.items,
    },
  };
}

function Gallery({ photos }) {
  const imgSrc = [];
  for (let i in photos) {
    imgSrc.push({
      original: "https:" + photos[i].fields.image.fields.file.url,
      thumbnail: "https:" + photos[i].fields.image.fields.file.url,
    });
  }
  return (
    <div className="pt-8">
      <ImageGallery items={imgSrc} />
    </div>
  );
}
export default Gallery;
