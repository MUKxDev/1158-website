// import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import { asambaGallery, getAsamba } from "../api/api";
// import { IAsamba } from "../api/IAsamba";
import pic1 from "../assets/gallery/pic0.jpg";
import pic2 from "../assets/gallery/pic1.jpg";
import pic3 from "../assets/gallery/pic2.jpg";
import pic4 from "../assets/gallery/pic3.jpg";
import pic5 from "../assets/gallery/pic4.jpg";
import pic6 from "../assets/gallery/pic5.jpg";
import pic7 from "../assets/gallery/pic6.jpg";
import pic8 from "../assets/gallery/pic7.jpg";

const handleDragStart = (e: any) => e.preventDefault();

export default function GalleryList() {
  // const [activeIndex, setActiveIndex] = useState<number>(0);
  // const [gallery, setGallery] = useState<IAsamba | null>(null);
  const localGallery = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

  // useEffect(() => {
  //   fetchData();
  //   /**
  //    * It fetches data from the server and sets the state of the gallery.
  //    */
  //   async function fetchData() {
  //     let _asamba: IAsamba | null = await getAsamba(asambaGallery);
  //     setGallery(_asamba);
  //   }
  // }, []);

  // function onSlideChanged(e: EventObject) {
  //   setActiveIndex(e.item);
  // }

  return (
    <AliceCarousel
      // activeIndex={activeIndex}
      // onSlideChanged={onSlideChanged}
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
      // items={gallery?.acf?.gallery?.map((pic: string) => (
      //   <div className="h-[calc(100vh-200px)] md:h-[500px] lg:h-[600px] max-h-[1000px]">
      //     <img
      //       key={pic}
      //       className={`object-cover !w-full !h-full px-2 scroll-mx-6 md:opacity-50 hover:cursor-grab active:cursor-grabbing hover:opacity-100 duration-150`}
      //       onDragStart={handleDragStart}
      //       role="presentation"
      //       src={pic}
      //       alt={pic}
      //     />
      //   </div>
      // ))}
      items={localGallery.map((v, i) => (
        <div className="h-[calc(100vh-200px)] md:h-[500px] lg:h-[600px] max-h-[1000px]">
          <img
            key={i}
            className={`object-cover !w-full !h-full px-2 scroll-mx-6 md:opacity-50 hover:cursor-grab active:cursor-grabbing hover:opacity-100 duration-150`}
            onDragStart={handleDragStart}
            role="presentation"
            src={v}
            alt={"pic"}
          />
        </div>
      ))}
    />
  );
}
