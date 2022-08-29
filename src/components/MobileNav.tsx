import React from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

const MobileNav = (props: { toggleShowMenu: () => void }) => {
  return (
    <div className="flex flex-col justify-center w-full">
      <Transition
        show={true}
        enter="transition-all ease-in-out duration-1000"
        enterFrom="opacity-0 scale-50"
        enterTo="opacity-100 scale-100"
        leave="duration-200 transition-all ease-in-out"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <ul className="list-none flex-wrap text-white text-center">
          <Link
            onClick={props.toggleShowMenu}
            activeClass="active"
            to="discover"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
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
    </div>
  );
};

export default MobileNav;
