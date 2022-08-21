import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../components/Animation";
export default function Circles() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <Player
        autoplay
        src={animation}
        keepLastFrame={true}
        className="h-screen"
      ></Player>
    </div>
  );
}
