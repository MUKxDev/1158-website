import "aos/dist/aos.css";
import "../index.css";
import Hero from "../components/Hero";

const Main = (props: {
  toggleIsPlaying: (play: boolean) => void;
  setShowLightBox: (show: boolean) => void;
}) => {
  return (
    <div>
      <Hero
        toggleIsPlaying={props.toggleIsPlaying}
        setShowLightBox={props.setShowLightBox}
      />
    </div>
  );
};
export default Main;
