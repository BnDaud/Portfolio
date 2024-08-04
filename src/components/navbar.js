import { NavLink } from "react-router-dom";
import Logo from "./../images/resizedLogo.png";

export default function Navbar(arg) {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },

    { name: "Create Cv", href: "/createcv" },
  ];

  const navheight = "4rem";
  return (
    <>
      <nav className="border-text_color ">
        <div className="flex fixed w-full z-50 justify-between items-center px-10 py-3 bg-navcolor text-white">
          <div className="capitalise">
            <a href="/" className="flex justify-between items-center ">
              <img src={Logo} alt="VM" className="w-10 h-10 rounded-full " />
              <div className="ml-3 text-new_bg italic font-serif font-bold">
                {" "}
                Vectored Matrix
              </div>
            </a>
          </div>
          <div className="flex justify-center gap-6 list-none text-new_bg font-serif mr-20">
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
        </div>
        <div className="overflow-y-auto pt-16">{arg.children}</div>
      </nav>
    </>
  );
}
