import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const MyCarousel = (product) => {
  const { images } = product.images;
  const urls = [
    {
      original: images[0].url,
      thumbnail: images[0].url,
      thumbnailHeight: 20,
      thumbnailWidth: 20,
    },
    {
      original: images[0].url,
      thumbnail: images[0].url,
      thumbnailHeight: 20,
      thumbnailWidth: 20,
    },
  ];

  return (
    <div className="[&_.image-gallery-thumbnails.innerimg]:h-1/2 [&_.image-gallery-thumbnails]:mt-8 [&_.image-gallery-thumbnails]:w-1/2 [&_.image-gallery-thumbnails]:flex">
      <ImageGallery
        items={urls}
        infinite={true}
        // showFullscreenButton={true} // Tam ekran butonu
        showThumbnails={true}
        showNav={true}
        showPlayButton={false}
        autoPlay={false}
        thumbnailPosition="bottom"
      />
    </div>
  );
};

export default MyCarousel;
