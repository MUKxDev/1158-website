import { useRef } from "react";
import Lottie from "react-lottie-player";
import { useIsInViewport } from "../helpers/useIsInViewport";
import animation from "./Animation";

export default function Circles() {
  const animationRef = useRef(null);

  const isInViewport = useIsInViewport(animationRef);

  return (
    <div
      ref={animationRef}
      className="max-w-6xl mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Lottie
        className="w-full"
        animationData={animation}
        play={isInViewport}
        loop={false}
      />
    </div>
  );
}
