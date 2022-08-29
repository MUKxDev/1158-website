import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

const MobileNav = (props: { toggleShowMenu: () => void; isShow: boolean }) => {
  return (
    <Transition
      show={props.isShow}
      className="flex flex-col justify-center w-full h-0 opacity-0"
      enter="transition-all ease-in-out duration-300"
      enterFrom="opacity-0 h-0"
      enterTo="opacity-100 bg-black h-24"
      leave="duration-300 transition-all ease-in-out"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Transition
        show={props.isShow}
        className=""
        enter=""
        enterFrom=""
        enterTo=""
        leave=""
        leaveFrom=""
        leaveTo=""
      >
        <ul className="flex-wrap text-center text-white list-none">
          <Link
            onClick={props.toggleShowMenu}
            activeClass="active"
            to="discover"
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
          >
            <li className="text-sm px-16 py-1 font-medium tracking-[0.15em]">
              DISCOVER
            </li>
          </Link>
          <Link
            onClick={props.toggleShowMenu}
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
          >
            <li className="text-sm px-16 py-1 font-medium tracking-[0.15em]">
              FEATURES
            </li>
          </Link>
          <Link
            onClick={props.toggleShowMenu}
            activeClass="active"
            to="investment"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="text-sm px-16 py-1 font-medium tracking-[0.15em]">
              INVESTMENT
            </li>
          </Link>
        </ul>
      </Transition>
    </Transition>
  );
};

export default MobileNav;
