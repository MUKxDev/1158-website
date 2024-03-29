import "aos/dist/aos.css";
import { useState, useEffect, useRef } from "react";
import { getAsamba, asambaDiscoverVideo } from "../api/api";
import { IAsamba } from "../api/IAsamba";

import activeLogo from "../assets/active-logo.svg";

export default function Discover() {
  const [discoverVideo, setDiscoverVideo] = useState<IAsamba | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null!);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });

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
      className="relative flex flex-col items-center justify-center w-full max-w-5xl min-h-[50vh] px-10 mx-auto mt-5 text-white align-middle"
    >
      <div
        data-aos="fade"
        data-aos-duration="1000"
        className="flex max-w-[220px] p-10  mx-auto md:hidden"
      >
        <img
          src={activeLogo}
          alt="Active Logo"
          className="w-full h-full duration-200 opacity-100 hover:opacity-100"
        />
      </div>

      {/* Hero */}
      <div className="z-10 mb-12">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="z-20 flex flex-col justify-center mt-6 mb-12 text-white uppercase header md:mt-0"
        >
          <div className="hidden py-10 max-w-[120px] md:flex">
            <img
              src={activeLogo}
              alt="Active Logo"
              className="w-full h-full duration-200 opacity-40 hover:opacity-100"
            />
          </div>
          <h1 className="z-10 max-w-4xl text-4xl text-center md:text-left font-Mirage md:text-7xl">
            The greatest experience in the Universe
          </h1>
          {/* Video */}
          <div className="md:absolute md:top-40 md:mt-0 mt-11 md:right-0 md:w-[75%] md:min-w-0 min-w-full right-0 z-0 ">
            <video
              ref={videoRef}
              className="object-cover w-full h-full rounded-full md:max-h-80"
              src={discoverVideo?.acf?.discover_video}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        <div
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="150"
          className="line-divider"
        >
          <h4 className="max-w-xl text-2xl font-bold text-justify md:mt-0 md:text-left md:text-4xl font-Mirage">
            ASAMBA will be the future of Health & Fitness.
          </h4>
          <p className="max-w-xl mt-3 text-justify md:text-left">
            Creating entertainment through sight & sound to stimulate physical &
            emotional well-being.
          </p>
        </div>
      </div>
    </div>
  );
}
