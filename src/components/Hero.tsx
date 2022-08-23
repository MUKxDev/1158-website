import playIcon from "../assets/play.svg";
import asambaLogo from "../assets/asamba-logo.svg";
import Divider from "./Divider";
import HeroMenu from "./HeroMenu";
import "aos/dist/aos.css";
import "../index.css";
import { asambaHeroVideo, getAsamba } from "../api/api";
import { IAsamba } from "../api/IAsamba";
import { useEffect, useState } from "react";
import Lightbox from "./Lightbox";

const Hero = () => {
  const [heroVideo, setHeroVideo] = useState<IAsamba | null>(null);
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);

  const handleClick = () => {
    setOpenModal((current) => !current);
  };

  document.body.style.overflow = openModal ? "hidden" : "auto";

  useEffect(() => {
    fetchData();
    async function fetchData() {
      let _asamba: IAsamba | null = await getAsamba(asambaHeroVideo);
      setHeroVideo(_asamba);
    }
  }, []);

  return (
    <div data-aos="fade" data-aos-duration="500" id="overview" className="z-10">
      <>
        {openModal ? (
          <div>
          <button className="absolute z-50 top-10 left-20" onClick={handleClick}>
          <div className="text-white flex flex-row gap-4 cursor-pointer align-middle items-center justify-center border-[1px] pl-3 pr-9 font-medium rounded-full border-white hover:opacity-70 transition-all duration-00">
            <div className="text-3xl font-light no-wrap items-center -translate-y-[2px]">
              &times;
            </div>
            <p className="text-sm font-regular drop-shadow-lg tracking-[0.15em]">
              CLOSE
            </p>
          </div>
          </button>
              <Lightbox />
              </div>
        ) : (
          <></>
        )}
      </>
      <div
        id="overlay"
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-grey"
      ></div>
      <div
        data-aos="fade"
        data-aos-duration="500"
        data-aos-delay="500"
        id="main-section"
        className="w-full h-screen"
      >
        <video
          className="object-cover w-full h-full"
          src={heroVideo?.acf?.hero_video}
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
