import { useRef } from "react";
import Lottie from "react-lottie-player";
import { useIsInViewport } from "../helpers/useIsInViewport";
import animation from "./Animation";

export default function Circles() {
  const animationRef = useRef(null);

  const isInViewport = useIsInViewport(animationRef);

  function onLearnMoreClick() {
    // TODO: do functionality for the learn more button
    alert("You clicked learn more.");
  }

  return (
    <div
      ref={animationRef}
      className="relative flex items-center justify-center max-w-6xl mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Lottie
        className="w-full"
        animationData={animation}
        play={isInViewport}
        loop={!isInViewport}
      />

      <div
        onClick={onLearnMoreClick}
        className="absolute z-20 tracking-wide text-white uppercase duration-150 border border-white hover:border-white cursor-pointer bg-white/0 hover:bg-white/10  font-normal   bottom-[28%] btn btn-xs md:btn-sm lg:btn-md rounded-full"
      >
        Learn more
      </div>
    </div>
  );
}
