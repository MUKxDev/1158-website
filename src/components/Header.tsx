import "./Header.css";
import asambaSymbol from "../assets/asamba-symbol.svg";
import soundOn from "../assets/sound-on.svg";
import soundOff from "../assets/sound-off.svg";
import HeroMenu from "./HeroMenu";
// import music from "../assets/music.mp3";
import { Link } from "react-scroll";

const Header = (props: {
  isPlaying: boolean;
  toggleIsPlaying: (play: boolean) => void;
}) => {
  // const [playing, setPlaying] = useState(false);

  // const audioRef = ref;
  // const audioRef = useRef(new Audio(music));
  const play = () => {
    // setPlaying(true);
    // audioRef.current.play();
    props.toggleIsPlaying(true);
  };
  const pause = () => {
    // setPlaying(false);
    // audioRef.current.pause();
    props.toggleIsPlaying(false);
  };

  // useEffect(() => {
  //   audioRef.current.pause();
  // }, [audioRef]);

  return (
    <div className="fixed inset-x-0 top-0 z-30 flex flex-row justify-between p-10 text-white bg-black">
      <div className="nav-start">
        <Link to="overview" spy={true} smooth={true} duration={500}>
          <img className="h-10" src={asambaSymbol} alt="asamba-symbol" />
        </Link>
      </div>
      <div>
        <HeroMenu isHeader={true} />
      </div>
      <div className="nav-end">
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
      </div>
    </div>
  );
};

export default Header;
