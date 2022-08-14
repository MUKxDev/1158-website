import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import asambaSymbol from "../assets/asamba-symbol.svg";
import soundOn from "../assets/sound-on.svg";
import soundOff from "../assets/sound-off.svg";
import HeroMenu from "./HeroMenu";
import music from "../assets/music.mp3";

const Header = () => {
  const [scrollShow, setScrollPosition] = useState(0);
  const handleScroll = (event: any) => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  console.log(scrollShow);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio(music));
  const play = () => {
    setPlaying(true);
    audioRef.current.play();
  };
  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };

  return (
    <div className="fixed inset-x-0 p-10 top-0 flex flex-row justify-between z-10 text-white bg-transparent">
      <div className="nav-start">
        <img className="h-10" src={asambaSymbol} alt="asamba-symbol" />
      </div>
      <div className={scrollShow > 550 ? "nav-middle" : "nav-hidden"}>
        <HeroMenu />
      </div>
      <div className="nav-end">
        <button onClick={playing ? pause : play} className="cursor-pointer">
          <img src={playing ? soundOn : soundOff} alt="sound-on" />
        </button>
      </div>
    </div>
  );
};

export default Header;
