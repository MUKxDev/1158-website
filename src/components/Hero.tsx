import playIcon from "../assets/play.svg";
import asambaLogo from "../assets/asamba-logo.svg";
import Divider from "./Divider";
import HeroMenu from "./HeroMenu";
import "aos/dist/aos.css";
import "../index.css";
import { asambaHeroVideo, getAsamba } from "../api/api";
import { IAsamba } from "../api/IAsamba";
import { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";
import videoFull from "../assets/hero-full-video.mp4";
import videoBg from "../assets/hero-bg-video.mp4";

const Hero = () => {
  const [heroVideo, setHeroVideo] = useState<IAsamba | null>(null);
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);

  const handleClick = () => {
    setOpenModal((current) => !current);
  };

  useEffect(() => {
    fetchData();
    async function fetchData() {
      let _asamba: IAsamba | null = await getAsamba(asambaHeroVideo);
      setHeroVideo(_asamba);
    }
  }, []);

  return (
    <div data-aos="fade" data-aos-duration="500" id="overview" className="z-10">
      <FsLightbox toggler={openModal} sources={[videoFull]} />
      <div
        data-aos="fade"
        data-aos-duration="500"
        data-aos-delay="500"
        id="main-section"
        className="w-full h-screen"
      >
        <video
          className="object-cover w-full h-full"
          // src={heroVideo?.acf?.hero_video}
          src={videoBg}
          autoPlay
          loop
          muted
        />
        <div
          data-aos="fade"
          data-aos-duration="3000"
          data-aos-delay="3000"
          className="absolute bottom-0 flex flex-col justify-center w-full h-full text-center text-white align-middle"
        >
          <p className="text-xl drop-shadow-lg tracking-[0.3em]">EXPERIENCE</p>
          <br />
          <br />
          <img className="h-11 md:h-14 " src={asambaLogo} alt="asamba-logo" />
          <Divider />
          <div>
            <button
              type="button"
              onClick={handleClick}
              className="border-[1px] py-1.5 px-5 font-medium rounded-full border-white hover:opacity-70 transition-all duration-00"
            >
              <p className="text-sm drop-shadow-lg tracking-[0.15em] flex items-center">
                WATCH FULL VIDEO{" "}
                <img className="h-3 pl-2" src={playIcon} alt="sound-control" />
              </p>
            </button>
          </div>
          <Divider />
          <HeroMenu />
        </div>
      </div>
    </div>
  );
};

export default Hero;
