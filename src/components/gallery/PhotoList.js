import React from "react";
import { useGallery } from "../../contexts/galleryContext";
import PropTypes from "prop-types";

const PhotoList = () => {
  const { photos } = useGallery();
  return (
    <div className="px-5 py-10">
      <div className="grid grid-cols-4 gap-10">
        {photos.length > 0 &&
          photos.map((item) => (
            <PhotoItem key={item.id} info={item}></PhotoItem>
          ))}
      </div>
    </div>
  );
};

const PhotoItem = ({ info: { url, isFavourite, id } }) => {
  const { toggleFavourite, addToCart } = useGallery();
  return (
    <div className="relative h-[300px] cursor-pointer group">
      <img src={url} alt="" className="object-cover w-full h-full" />
      <span
        className="absolute z-10 invisible w-8 transition-all opacity-0 cursor-pointer right-5 top-5 group-hover:opacity-100 group-hover:visible"
        onClick={() => toggleFavourite(id)}
      >
        {!isFavourite ? (
          <img src="./favourite.svg" alt="" className="max-w-full" />
        ) : (
          <img src="./favourite-red.svg" alt="" className="max-w-full" />
        )}
      </span>
      <button
        className="absolute invisible px-6 py-3 text-sm font-medium text-black transition-all -translate-x-1/2 bg-white rounded-lg opacity-0 bottom-5 left-1/2 group-hover:opacity-100 group-hover:visible"
        onClick={() => addToCart({ url, isFavourite, id })}
      >
        Add to cart
      </button>
    </div>
  );
};

PhotoItem.propTypes = {
  url: PropTypes.string,
  id: PropTypes.number,
  isFavourite: PropTypes.bool,
};

export default PhotoList;
