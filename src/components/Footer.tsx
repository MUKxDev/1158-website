import React from "react";


const Footer = () => {
  return (
    <div className="fixed align-middle bottom-5 px-10 z-30 w-full">
      <div
        id="box"
        className="absolute bg-white text-white w-24"
      >s</div>
      <div
        id="copyright"
        className="horLine -translate-y-3"
      >
        <p className="text-right right-0 -translate-y-2 text-white absolute fade">Copyright © Asamba Inc. 2022 </p>
        <br/>
        <hr className="border-white" />
      </div>
    </div>
  );
};

export default Footer;
