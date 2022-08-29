import "./Header.css";
import { useState } from "react";
import asambaSymbol from "../assets/asamba-symbol.svg";
import hamburger from "../assets/menu-icon.svg";
import cross from "../assets/x.svg";
import soundOn from "../assets/sound-on.svg";
import soundOff from "../assets/sound-off.svg";
import HeroMenu from "./HeroMenu";
import { Link } from "react-scroll";
import MobileNav from "./MobileNav";

const Header = (props: {
  isPlaying: boolean;
  toggleIsPlaying: (play: boolean) => void;
}) => {
  const play = () => {
    props.toggleIsPlaying(true);
  };
  const pause = () => {
    props.toggleIsPlaying(false);
  };
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu((current) => !current);
  };

  return (
    <div>
      <div className="fixed inset-x-0 top-0 z-30 flex flex-row items-center justify-between p-10 text-white bg-black">
        <div className="nav-start">
          <Link to="overview" spy={true} smooth={true} duration={500}>
            <img className="h-10" src={asambaSymbol} alt="asamba-symbol" />
          </Link>
        </div>
        <div>
          <HeroMenu isHeader={true} />
        </div>
        <div className={showMenu ? "mobileNavActive animate" : "mobileNav"}>
          <MobileNav />
        </div>
        <div className="flex flex-row justify-center nav-end">
          <button
            type="button"
            onClick={props.isPlaying ? pause : play}
            className="cursor-pointer"
          >
            {props.isPlaying ? (
              <img src={soundOn} alt="sound-on" />
            ) : (
              <img src={soundOff} alt="sound-on" />
            )}
          </button>
          <button onClick={toggleShowMenu}>
            <img
              src={showMenu ? cross : hamburger}
              className="ml-10 md:hidden"
              alt="hamburger"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
