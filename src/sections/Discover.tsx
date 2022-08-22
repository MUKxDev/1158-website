import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { getAsamba, asambaDiscoverVideo } from "../api/api";
import { IAsamba } from "../api/IAsamba";

export default function Discover() {
  const [discoverVideo, setDiscoverVideo] = useState<IAsamba | null>(null);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      let _asamba: IAsamba | null = await getAsamba(asambaDiscoverVideo);
      setDiscoverVideo(_asamba);
    }
  }, []);

  return (
    <div
      id="discover"
      className="relative flex flex-col items-center justify-center w-full max-w-5xl min-h-screen px-10 mx-auto mt-5 text-white align-middle"
    >
      {/* Hero */}
      <div className="z-10 mb-12">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex justify-center mb-10 text-white uppercase header"
        >
          <h1 className="max-w-4xl font-Mirage text-4xl md:text-7xl">
            The greatest experience in the universe
          </h1>
        </div>
        <div
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="150"
          className="line-divider"
        >
          {/* <span className="h-[2px] w-20 bg-white flex justify-center mb-10"></span> */}
          <h4>ASAMBA will be the future of Health & Fitness</h4>
        </div>
      </div>
      {/* Video */}
      <div
        data-aos="fade"
        data-aos-duration="1000"
        className="absolute mt-40  md:right-0 w-[75%]"
      >
        <video
          className="object-cover w-full h-full rounded-full md:max-h-80"
          src={discoverVideo?.acf?.discover_video}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}
