import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Discover = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div
      id="discover"
      className="h-screen w-full flex flex-col align-middle items-center text-white mt-5 px-10"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="header lg:text-6xl text-white flex justify-center mb-5"
      >
        <h1>Discover the future</h1>
      </div>
      <div
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="150"
        className="line-divider"
      >
        <span className="h-[2px] w-20 bg-white flex justify-center mb-10"></span>
      </div>
      <div className="content-section grid grid-cols-2 gap-5 justify-top items-top text-center">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="section-1 text-left bg-green-300"
        >
          <div>Hi section 1</div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="section-2 bg-purple-300"
        >
          <div>Hi section 2</div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
