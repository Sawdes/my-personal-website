import { useEffect, useRef } from "react";
import { CiMenuKebab } from "react-icons/ci";
import NavbarItem from "./NavbarItem";
import NavbarItemDivider from "./NavbarItemDivider";

export const navbarItems = [
  {
    link: "/",
    name: "Home",
    scrollTag: ".homepage-home",
  },
  {
    link: "/",
    name: "My way",
    scrollTag: ".homepage-myWay",
  },
];

export default function Navbar(props: {
  setHeightNavbar: any;
  setScrollTag: any;
}) {
  const refNavbar = useRef(null);
  useEffect(() => {
    props.setHeightNavbar((refNavbar.current as any).clientHeight);
  }, [props]);
  return (
    <div ref={refNavbar} className="bg-base-300 fixed z-50 w-full">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Urusov Daniil</a>
        </div>
        <div className="navbar-center hidden md:flex md:navbar-end">
          <ul className="menu menu-horizontal px-1">
            {navbarItems.map((item) => {
              return (
                <NavbarItem
                  key={item.scrollTag}
                  link={item.link}
                  name={item.name}
                  setScrollTag={props.setScrollTag}
                  scrollTag={item.scrollTag}
                ></NavbarItem>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end md:hidden">
          <div className="drawer drawer-end w-max">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-primary"
              >
                <CiMenuKebab />
              </label>
            </div>
            <div className="drawer-side z-50">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4 z-50">
                {/* Sidebar content here */}
                <p>Content menu:</p>
                {navbarItems.map((item) => {
                  return (
                    <NavbarItemDivider
                      key={item.scrollTag}
                      link={item.link}
                      name={item.name}
                      setScrollTag={props.setScrollTag}
                      scrollTag={item.scrollTag}
                    ></NavbarItemDivider>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
