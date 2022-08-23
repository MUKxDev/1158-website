import { useEffect, useState } from "react";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { asambaGallery, getAsamba } from "../api/api";
import { IAsamba } from "../api/IAsamba";

const handleDragStart = (e: any) => e.preventDefault();

export default function GalleryList() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [gallery, setGallery] = useState<IAsamba | null>(null);

  useEffect(() => {
    fetchData();
    /**
     * It fetches data from the server and sets the state of the gallery.
     */
    async function fetchData() {
      let _asamba: IAsamba | null = await getAsamba(asambaGallery);
      setGallery(_asamba);
    }
  }, []);

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
