import ImageGallery from "react-image-gallery";
function Gallery() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../../gallery", false, /\.(png|jpe?g|svg|webp)$/)
  );
  const imgSrc = [];
  for (let i in images) {
    imgSrc.push({
      original: images[i].default.src,
      thumbnail: images[i].default.src,
    });
  }
  console.log(imgSrc);
  return (
    <div className="pt-8">
      <ImageGallery items={imgSrc} />
    </div>
  );
}
export default Gallery;
