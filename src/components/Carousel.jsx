import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/productDetail/product-detail-1b.png", // Ana görselin yolu
    thumbnail: "/productDetail/product-detail-2k.png", // Küçük resmin yolu
  },
  {
    original: "/productDetail/product-detail-1b.png",
    thumbnail: "/productDetail/product-detail-1k.png",
  },
];

const MyCarousel = () => {
  return (
    <div className=" [&_.image-gallery-thumbnails]:mt-8 [&_.image-gallery-thumbnails]:w-1/2 [&_.image-gallery-thumbnails]:flex">
      <ImageGallery
        items={images}
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
