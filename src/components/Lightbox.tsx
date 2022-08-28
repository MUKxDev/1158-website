// import { useEffect, useRef } from "react";
import { Button } from "react-daisyui";
import ReactPlayer from "react-player";
// import VimeoPlayer from "react-player/vimeo";
// import ReactPlayer from "react-player";
// import YouTubePlayer from "react-player/youtube";
// import videoModal from "../assets/hero-bg-video.mp4";

const Lightbox = (props: {
  setShowLightBox: (show: boolean) => void;
  url: string | undefined;
}) => {
  function closeLightBox() {
    props.setShowLightBox(false);
  }

  // const videoRef = useRef<HTMLVideoElement>(null!);
  // useEffect(() => {
  //   videoRef.current.defaultMuted = true;
  // });

  return (
    <div className="fixed z-40 flex items-center justify-center w-screen h-screen min-h-screen isolate">
      <div className="absolute z-50 top-8 left-8">
        <Button
          onClick={closeLightBox}
          className="mx-auto font-normal text-white uppercase duration-150 bg-black border border-white rounded-full cursor-pointer btn-sm md:btn-md md:col-span-2 md:mr-0 hover:border-white hover:bg-zinc-800 mt-11 w-fit"
          type="button"
        >
          Close
        </Button>
      </div>
      <div className="z-40 w-full select-none hover:select-none isolate noBar aspect-video">
        {/* <VimeoPlayer
          className="z-40"
          muted={false}
          width="100%"
          height="100%"
          controls={false}
          config={
            {
              // playerVars: { disablekb: 1, controls: 0, autoplay: 1, loop: 1 },
            }
          }
          url={props.url}
        /> */}
        <ReactPlayer
          // ref={videoRef}
          className="z-40 w-full h-full"
          // src={videoSrc}
          width={"100%"}
          height={"100%"}
          controlsList="nodownload"
          controls
          // url={
          //   "https://rr5---sn-4wg7ln7d.c.drive.google.com/videoplayback?expire=1661704899&ei=g2ILY5HSJfCS2LYPxbmxuAE&ip=77.69.161.254&cp=QVRLU0hfU1hXSlhPOmFOd0pOZDZscDY2NG1RWTVzVTBxelRSQUVaQlFyMDJGbEhMNW5zNEEtZDI&id=c6172a944187eba4&itag=59&source=webdrive&requiressl=yes&mh=45&mm=32&mn=sn-4wg7ln7d&ms=su&mv=u&mvi=5&pl=24&ttl=transient&susc=dr&driveid=0B0PZBRAmHTpGUnpyU1QyMmIzN2s&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=670.661&lmt=1376342922787944&mt=1661689539&subapp=DRIVE_WEB_FILE_VIEWER&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgNyEPt2qb9VRHTaGGYUi9SeN4CLVjgv-jzYp5BrOnnjQCIQC9I3dtC590MywHmZf1UDO1pCGKcfxqHItAPRn5yNi7wA==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAOZl-oCseGAeXGeuLS320KnsOSCRcV5oD_qtCVk4JX3JAiAHGl0mCSNmRumZfNUPE8iKgy0x8VlIQleiifB1cz5wlA==&cpn=RKAOpm-gmxICJgzP&c=WEB_EMBEDDED_PLAYER&cver=1.20220824.01.00"
          // }
          url={props.url}
          autoPlay
          playing
          loop
          muted
          playsInline
        />
      </div>
      <div
        onClick={closeLightBox}
        className="fixed z-10 flex items-center justify-center w-screen h-screen min-h-screen bg-black/90 isolate"
      ></div>
    </div>
  );
};

export default Lightbox;

// https://www.youtube.com/watch?v=gv2xExcaGTE
