import { NavLink } from "react-router-dom";
import Logo from "./../images/resizedLogo.png";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { useState } from "react";

export default function Navbar(arg) {
  const [rotate, setRotate] = useState(false);
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },

    { name: "Create Cv", href: "/createcv" },
  ];

  return (
    <>
      <nav className="border-text_color ">
        <div className="flex fixed w-full z-50 justify-between items-center px-10 py-3 bg-navcolor text-white">
          <div className={`capitalise ${rotate ? "hidden" : "block"}`}>
            <a href="/" className="flex justify-between items-center ">
              <img src={Logo} alt="VM" className="w-10 h-10 rounded-full " />
              <div className="ml-3 text-new_bg  italic font-serif font-bold">
                {" "}
                Vectored Matrix
              </div>
            </a>
          </div>
          <div className="hidden md:flex justify-center gap-6 list-none text-new_bg font-serif mr-20">
            {navigation.map((item) => {
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? " text-white  bg-new_bg rounded-lg px-2 "
                      : "hover:italic hover:text-white"
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
          <div className="md:hidden  flex justify-between items-center gap-10 ">
            <MdOutlineArrowDropDownCircle
              className={`text-3xl text-new_bg   duration-500 ${
                rotate ? "rotate-180" : "rotate-0"
              } ${rotate ? "hidden" : "block"}`}
              onClick={() => {
                setRotate(!rotate);
              }}
            />

            <div
              className={`flex  gap-4 py-2 mr-4 text-new_bg font-serif  duration-500 ${
                rotate ? "block" : "hidden"
              }`}
            >
              {navigation.map((item) => {
                return (
                  <NavLink
                    onClick={() => setRotate(false)}
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => {
                      return isActive
                        ? " text-white  bg-new_bg rounded-lg px-2 "
                        : "hover:italic hover:text-white";
                    }}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>

            <MdOutlineArrowDropDownCircle
              className={`text-3xl text-new_bg  duration-500  ${
                rotate ? "rotate-180" : "rotate-0"
              } ${!rotate ? "hidden" : "block"}`}
              onClick={() => setRotate(!rotate)}
            />
          </div>
        </div>

        <div className="overflow-y-auto pt-16" onClick={() => setRotate(false)}>
          {arg.children}
        </div>
      </nav>
    </>
  );
}
