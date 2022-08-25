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

function App() {
  const audioRef = useRef(new Audio(music));
  const [isPlaying, setIsPlaying] = useState(false);
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

  const toggleIsPlaying: (play: boolean) => void = (play) => {
    setIsPlaying(play);
    play ? audioRef.current.play() : audioRef.current.pause();
  };

  return (
    <div className="h-auto bg-black">
      <Header isPlaying={isPlaying} toggleIsPlaying={toggleIsPlaying} />
      <Footer />
      <Main toggleIsPlaying={toggleIsPlaying} />
      <Discover />
      <Divider></Divider>
      <Features />
      <Investment />
    </div>
  );
}

export default App;
