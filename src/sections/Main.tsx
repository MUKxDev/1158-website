import "aos/dist/aos.css";
import "../index.css";
import Hero from "../components/Hero";

const Main = (props: { toggleIsPlaying: (play: boolean) => void }) => {
  return (
    <div>
      <Hero toggleIsPlaying={props.toggleIsPlaying} />
    </div>
  );
};
export default Main;
