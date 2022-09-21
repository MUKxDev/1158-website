const Footer = () => {
  return (
    <div className="fixed z-30 w-full px-10 align-middle bottom-5">
      <div id="box" className="absolute w-24 text-white bg-white">
        s
      </div>
      <div id="copyright" className="-translate-y-3 horLine">
        <p className="absolute right-0 text-xs text-right text-white -translate-y-2 md:text-base fade">
          Copyright © Asamba 2022{" "}
        </p>
        <br />
        <hr className="border-white" />
      </div>
    </div>
  );
};

export default Footer;
