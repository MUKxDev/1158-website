import { Button } from "react-daisyui";
import Plyr from "plyr-react";

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
      <div className="z-40 w-full mx-auto select-none max-w-7xl hover:select-none isolate noBar aspect-video">
        <div className="relative w-full h-full px-6">
          {/* <iframe
            src={`${props.url}?start=1`}
            width="100%"
            height="100%"
            title="Asamba full video"
            scrolling="no"
            seamless={true}
            allowFullScreen={true}
            className="border shadow-2xl border-white/30 rounded-xl shadow-white/20"
          ></iframe>

          <div className="w-[80px] h-[80px] absolute bg-transparent right-0 top-0">
            &nbsp;
          </div> */}

          {/* <ReactPlayer className="" url={props.url}></ReactPlayer> */}

          <Plyr
            className=""
            source={{
              type: "video",
              title: "Asamba full video",
              sources: [
                {
                  src: `${props.url}`,
                  type: "video/mp4",
                  size: 720,
                },
                // {
                //   src: '/path/to/movie.webm',
                //   type: 'video/webm',
                //   size: 1080,
                // },
              ],
            }}
            src={props.url}
            controls
            preload="auto"
            autoPlay
          ></Plyr>
        </div>
      </div>
      <div
        onClick={closeLightBox}
        className="fixed z-10 flex items-center justify-center w-screen h-screen min-h-screen bg-black/90 isolate"
      ></div>
    </div>
  );
};

export default Lightbox;
