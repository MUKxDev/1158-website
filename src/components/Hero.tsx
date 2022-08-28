import playIcon from "../assets/play.svg";
import asambaLogo from "../assets/asamba-logo.svg";
import Divider from "./Divider";
import HeroMenu from "./HeroMenu";
import "aos/dist/aos.css";
import "../index.css";
import { asambaHeroVideo, getAsamba } from "../api/api";
import { IAsamba } from "../api/IAsamba";
import { useEffect, useRef, useState } from "react";
// import FsLightbox from "fslightbox-react";
// import videoFull from "../assets/hero-full-video.mp4";
// import videoBg from "../assets/hero-bg-video.mp4";
// import VimeoPlayer from "react-player/vimeo";
// import VimeoPlayer from "react-player/vimeo";

const Hero = (props: {
  toggleIsPlaying: (play: boolean) => void;
  setShowLightBox: (show: boolean) => void;
}) => {
  const [heroVideo, setHeroVideo] = useState<IAsamba | null>(null);
  // const [openModal, setOpenModal] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null!);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });

  // const handleClick = () => {
  //   if (audioRef.current.paused) {
  //     audioRef.current.play();
  //   } else {
  //     audioRef.current.pause();
  //   }
  // };
  const stopMusic = () => {
    // audioRef.current.pause();
    props.toggleIsPlaying(false);
  };
  // const playMusic = () => {
  //   // audioRef.current.play();
  //   props.toggleIsPlaying(true);
  // };

  function toggleModal() {
    // setOpenModal(!openModal);
    stopMusic();
    props.setShowLightBox(true);
  }

  useEffect(() => {
    fetchData();
    async function fetchData() {
      let _asamba: IAsamba | null = await getAsamba(asambaHeroVideo);
      setHeroVideo(_asamba);
    }
  }, []);

  return (
    <div data-aos="fade" data-aos-duration="500" id="overview" className="z-10">
      {/* <div className="hidden">{heroVideo?.acf?.discover_video}</div> */}
      {/* <FsLightbox
        toggler={openModal}
        onClose={stopMusic}
        onOpen={stopMusic}
        // sources={["https://www.youtube.com/watch?v=plvZgYTBGp4"]}
        sources={[heroVideo?.acf?.full_video ?? ""]}

        // customSources={[
        //   <div key="video" className="w-[500px] h-[250px]">
        //     <VimeoPlayer
        //       url={"https://vimeo.com/735918780"}
        //       playing
        //       muted
        //       width={"100%"}
        //       height={"100%"}
        //       loop
        //       className="!rounded-full w-full h-full"
        //       config={{
        //         playerOptions: {
        //           background: true,
        //           muted: true,
        //         },
        //       }}
        //     />
        //   </div>,
        // ]}
      /> */}
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
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* <VimeoPlayer
          url={"https://vimeo.com/735918780"}
          playing
          muted
          width={"100%"}
          height={"100%"}
          loop
          className="!rounded-full w-full h-full"
          config={{
            playerOptions: {
              background: true,
              muted: true,
            },
          }}
        /> */}
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
              onClick={toggleModal}
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
