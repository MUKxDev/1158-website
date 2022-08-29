import "aos/dist/aos.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./sections/Features";
import Discover from "./sections/Discover";
import Main from "./sections/Main";
import Investment from "./sections/Investment";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import Divider from "./components/Divider";
import music from "./assets/music.mp3";
import Lightbox from "./components/Lightbox";
import { IAsamba } from "./api/IAsamba";
import { asambaFullVideo, getAsamba } from "./api/api";

function App() {
  const audioRef = useRef(new Audio(music));
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLightBox, setShowLightBox] = useState(false);
  const [fullVideo, setFullVideo] = useState<IAsamba | null>(null);
  useEffect(() => {
    AOS.init({});
    // autoPlay();

    // async function autoPlay() {
    //   await delay(5000);

    //   audioRef.current.play();
    // }
  }, []);

  // function delay(ms: number) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  useEffect(() => {
    fetchData();
    async function fetchData() {
      let _asamba: IAsamba | null = await getAsamba(asambaFullVideo);
      setFullVideo(_asamba);
    }
  }, []);

  const toggleIsPlaying: (play: boolean) => void = (play) => {
    setIsPlaying(play);
    play ? audioRef.current.play() : audioRef.current.pause();
  };

  return (
    <div className="h-auto bg-black">
      {showLightBox && (
        <div className="">
          <Lightbox
            setShowLightBox={setShowLightBox}
            url={fullVideo?.acf?.full_video}
          ></Lightbox>
        </div>
      )}
      <Header isPlaying={isPlaying} toggleIsPlaying={toggleIsPlaying} />
      <Footer />
      <Main
        toggleIsPlaying={toggleIsPlaying}
        setShowLightBox={setShowLightBox}
      />
      <Discover />
      <Divider></Divider>
      <Features />
      <Investment />
    </div>
  );
}

export default App;
