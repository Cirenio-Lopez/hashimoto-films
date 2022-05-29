import ImageGallery from "react-image-gallery";

export default function Gallery(images) {
  return (
    <>
      <ImageGallery items={images.images} />
    </>
  );
}
