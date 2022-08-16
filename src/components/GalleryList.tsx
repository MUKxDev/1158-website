import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e:any) => e.preventDefault();


const APIKEY: string =
  "563492ad6f91700001000001f1ea21d82f2b4c6a994d089180f7cbea";

export default function GalleryList() {
  const [pictures, setPictures] = useState<Photo[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  /**
   * We're using the axios library to make a GET request to the Pexels API, and then we're using the
   * setPictures function to set the state of the pictures array to the response we get from the API
   */
  async function fetchData() {
    await axios
      .get<Pictures>(`https://api.pexels.com/v1/curated?page=2&per_page=10`, {
        headers: { Authorization: `${APIKEY}` },
      })
      .then((res) => {
        const images = res.data;
        console.log(images.photos);
        setPictures(images.photos);
      })
      .catch((err) => {
        console.log("Error getting pictures", err);
      });
  }

  return (
    <AliceCarousel autoPlay={true} infinite={true} autoPlayInterval={3000} disableDotsControls={true} disableButtonsControls={true} responsive={{
      0: {
          items: 1,
      },
      500:{
        items:2
      },
      800: {
        items:3
      },
      1024: {
          items: 5
      }
    }} mouseTracking items= {pictures.map((pic: Photo) => (
      <img
        key={pic.id}
        className="object-cover w-full h-[90%] md:h-[70%] px-1 scroll-mx-6 opacity-50 hover:opacity-100 duration-150"
        onDragStart={handleDragStart} role="presentation"
        src={pic.src.portrait}
        alt={pic.alt}
      />
    ))}/>
  );
}

interface Pictures {
  page: number;
  per_page: number;
  photos: Photo[];
  next_page: string;
}

interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: Src;
  liked: boolean;
  alt: string;
}

interface Src {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}
