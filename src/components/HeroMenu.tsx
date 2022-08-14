import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import "./Header.css";

const HeroMenu = (props: { isHeader?: boolean }) => {
  const [scrollShow, setScrollPosition] = useState(0);
  const handleScroll = (event: any) => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={
        props.isHeader
          ? scrollShow > 550
            ? "nav-middle"
            : "nav-hidden"
          : scrollShow > 550
          ? "nav-hidden"
          : "nav-middle"
      }
    >
      <div className="flex justify-center">
        <ul className="list-none lg:block hidden">
          <Link
            activeClass="active"
            to="discover"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="text-sm float-left px-16 py-1 font-medium tracking-[0.15em]">
              DISCOVER
            </li>
          </Link>
          <Link
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="text-sm float-left px-16 py-1 font-medium tracking-[0.15em]">
              FEATURES
            </li>
          </Link>
          <Link
            activeClass="active"
            to="investment"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="text-sm float-left px-16 py-1 font-medium tracking-[0.15em]">
              INVESTMENT
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HeroMenu;
