import { Transition } from "@headlessui/react";
import { useRef } from "react";
import { scroller } from "react-scroll";
import Lottie from "react-lottie-player";
import { useIsInViewport } from "../helpers/useIsInViewport";
import animation from "./Animation-new";
// import animation from "./Animation";

export default function Circles() {
  const animationRef = useRef(null);
  const learnMoreRef = useRef(null);

  const isInViewport = useIsInViewport(animationRef);
  const isLearnMoreRefInViewport = useIsInViewport(learnMoreRef);

  function onLearnMoreClick() {
    scroller.scrollTo("investment", {
      spy: true,
      smooth: true,
      duration: 500,
    });
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
        ref={learnMoreRef}
        className="absolute z-20 bottom-[28%] w-full flex justify-center"
      >
        <Transition
          onClick={onLearnMoreClick}
          show={isLearnMoreRefInViewport}
          enter="transition-all ease-in-out duration-1000"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="duration-200 transition-all ease-in-out"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="font-normal tracking-wide text-white uppercase duration-150 border rounded-full cursor-pointer border-white/80 hover:border-white bg-white/0 hover:bg-white/10 btn btn-xs md:btn-sm lg:btn-md"
        >
          Learn more
        </Transition>
      </div>
    </div>
  );
}
