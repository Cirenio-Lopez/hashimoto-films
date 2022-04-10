import ImageGallery from "react-image-gallery";
import data from "./galleryData";

export default function Gallery() {
  return (
    <>
      <ImageGallery items={data.dataInfo} />
    </>
  );
}
