import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1657311277126-8f227a99d60a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1100&q=60",
    isLike: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1657366917003-9f9b6d3edc5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1100&q=60",
    isLike: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1656624407940-a67e5e872cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1100&q=60",
    isLike: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1621504439318-462309338b96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1100&q=60",
    isLike: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1645472630623-55607702c509?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1100&q=60",
    isLike: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1657277368599-31bebdda19a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=60",
    isLike: false,
  },
];

const GalleryContext = createContext();

function GalleryProvider(props) {
  const { storedValue: storedPhotos, setValue: setStoredPhotos } =
    useLocalStorage("photos", fakeData);
  const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage(
    "cart",
    []
  );
  const [photos, setPhotos] = useState(storedPhotos);
  const [cartItems, setCartItems] = useState(storedCart);
  const [favouriteList, setFavouriteList] = useState([]);

  function toggleFavourite(photoId) {
    const updatedArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavourite: !photo.isFavourite };
      }
      return photo;
    });
    setPhotos(updatedArray);
    setStoredPhotos(updatedArray);
  }

  function addToCart(newItem) {
    setCartItems((prevItems) => {
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      if (isExisted) {
        setStoredCart([...prevItems]);
        return [...prevItems];
      } else {
        setStoredCart([...prevItems, newItem]);
        return [...prevItems, newItem];
      }
    });
  }

  function removeFromCart(photoId) {
    setCartItems((prevItems) => {
      const newCart = prevItems.filter((item) => item.id !== photoId);
      setCartItems(newCart);
      return newCart;
    });
  }

  const value = {
    photos,
    cartItems,
    favouriteList,
    setPhotos,
    setCartItems,
    setFavouriteList,
    toggleFavourite,
    addToCart,
    removeFromCart,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
}

export { useGallery, GalleryProvider };
