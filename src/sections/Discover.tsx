import videoBg from "../assets/discover-video.mp4";

import "aos/dist/aos.css";

const Discover = () => {
  return (
    <div
      id="discover"
      className="relative flex flex-col items-center justify-center w-full h-screen max-w-5xl px-10 mx-auto mt-5 text-white align-middle"
    >
      {/* Hero */}
      <div className="z-10">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex justify-center mb-5 text-white uppercase header"
        >
          <h1 className="max-w-4xl font-serif text-7xl font-extralight">
            The greatest experience in the universe
          </h1>
        </div>
        <div
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="150"
          className="line-divider"
        >
          {/* <span className="h-[2px] w-20 bg-white flex justify-center mb-10"></span> */}
          <h4>ASAMBA will be the future of Health & Fitness</h4>
        </div>
      </div>
      {/* Video */}
      <div
        data-aos="fade"
        data-aos-duration="1000"
        className="absolute mt-40  right-0 w-[75%]"
      >
        <video
          className="object-cover w-full h-full rounded-full max-h-80"
          src={videoBg}
          autoPlay
          loop
          muted
        />
      </div>
      {/* <div className="grid grid-cols-2 gap-5 text-center content-section justify-top items-top">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="text-left bg-green-300 section-1"
        >
          <div>Hi section 1</div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="bg-purple-300 section-2"
        >
          <div>Hi section 2</div>
        </div>
      </div> */}
    </div>
  );
};

export default Discover;
