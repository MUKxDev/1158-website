import { Link } from "react-scroll";

const HeroMenu = () => {
  return (
    <div className="flex justify-center">
      <ul className="list-none lg:block hidden">
        <Link
          activeClass="active"
          to="overview"
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
          to="discover"
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
          to="connect"
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
  );
};

export default HeroMenu;
