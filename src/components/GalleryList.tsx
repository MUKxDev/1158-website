import { useEffect, useState } from "react";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { asambaGallery, getAssamba } from "../api/api";
import { IAssamba } from "../api/IAssamba";

const handleDragStart = (e: any) => e.preventDefault();

export default function GalleryList() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [gallery, setGallery] = useState<IAssamba | null>(null);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      let _assamba: IAssamba | null = await getAssamba(asambaGallery);
      setGallery(_assamba);
    }
  }, []);

  /**
   * We're using the axios library to make a GET request to the Pexels API, and then we're using the
   * setPictures function to set the state of the pictures array to the response we get from the API
   */

  function onSlideChanged(e: EventObject) {
    setActiveIndex(e.item);
  }

  return (
    <AliceCarousel
      activeIndex={activeIndex}
      onSlideChanged={onSlideChanged}
      autoPlay={true}
      infinite={true}
      autoHeight={true}
      autoPlayInterval={3000}
      disableDotsControls={true}
      disableButtonsControls={true}
      responsive={{
        0: {
          items: 1,
        },
        500: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1024: {
          items: 5,
        },
      }}
      mouseTracking
      items={gallery?.acf?.gallery?.map((pic: string, index) => (
        <div className="h-[calc(100vh-200px)] md:h-[500px] lg:h-[600px]">
          {/* <div className="h-[90%] !md:h-[70%]"> */}
          <img
            key={pic}
            className={`object-cover !w-full !h-full px-2 scroll-mx-6 md:opacity-50 hover:cursor-grab active:cursor-grabbing hover:opacity-100 duration-150 ${
              activeIndex === index ? "opacity-100" : ""
            }`}
            onDragStart={handleDragStart}
            role="presentation"
            src={pic}
            alt={pic}
          />
        </div>
      ))}
    />
  );
}
