import Divider from "../components/Divider";
import GalleryList from "../components/GalleryList";

import stick from "../assets/stick.png";
import Circles from "../components/Circles";

function Features() {
  return (
    <div id="features" className="w-full">
      {/* Header */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex justify-center  text-white uppercase header lg:text-6xl"
      >
        <h1 className="max-w-3xl  font-Mirage text-4xl font-extralight md:text-7xl">
          Features
        </h1>
      </div>

      <Circles></Circles>
      {/* Divider Stick */}
      <div className="container max-w-2xl mx-auto w-fit">
        <Divider></Divider>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="flex justify-center px-4 mb-5 text-white uppercase header"
        >
          <img className="w-full h-full" src={stick} alt="Stick.jpeg" />
        </div>
      </div>

      {/* Gallery */}
      <div className="flex flex-col">
        <Divider></Divider>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex justify-center mb-5 text-white uppercase header lg:text-6xl"
        >
          <GalleryList></GalleryList>
        </div>

        <Divider></Divider>
      </div>
    </div>
  );
}

export default Features;
