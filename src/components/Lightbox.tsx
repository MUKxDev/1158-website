// import { useEffect, useRef } from "react";
import { Button } from "react-daisyui";
import FilePlayer from "react-player/file";
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
        {/* <FilePlayer
          // ref={videoRef}
          className="z-40 w-full h-full"
          // src={videoSrc}
          width={"100%"}
          height={"100%"}
          controlsList="nodownload"
          controls
          url={
            "https://drive.google.com/file/d/1kiUb0yw5fdujKl9Ks3WrJksMehspramT/preview"
          }
          // url={props.url}
          autoPlay
          playing
          loop
          // muted
          playsInline
          config={{
            attributes: {
              // autoPlay: true,
              // playing: true,
              loop: true,
              muted: false,
              playsInline: true,
              controlsList: "nodownload",
              controls: true,
            },
          }}
        /> */}
        <div className="relative w-full h-full">
          <iframe
            src="https://drive.google.com/file/d/1kiUb0yw5fdujKl9Ks3WrJksMehspramT/preview"
            width="100%"
            // height="480"
            height="100%"
            title="hi"
            scrolling="no"
            seamless={true}
            className=""
          ></iframe>

          <div className="w-[80px] h-[80px] absolute opacity-1 bg-black right-0 top-0">
            &nbsp;
          </div>
        </div>
        {/* <iframe
          id="sheeel"
          src="https://drive.google.com/file/d/1kiUb0yw5fdujKl9Ks3WrJksMehspramT/preview"
          title="asamba full video"
          width="100%"
          height="100%"
          allow="autoplay"
        ></iframe> */}
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
