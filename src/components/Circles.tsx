import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect } from "react";
import animation from "./Animation";

export default function Circles() {
  useEffect(() => {
    //
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <Player
        id="discoverAnimation"
        autoplay
        keepLastFrame
        src={animation}
        className="h-screen"
      ></Player>
    </div>
  );
}
