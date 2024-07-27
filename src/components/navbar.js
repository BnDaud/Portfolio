import Logo from "./../images/resizedLogo.png";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center px-10 py-3 bg-navcolor text-white">
          <div className="capitalise">
            <a href="" className="flex justify-between items-center ">
              <img src={Logo} alt="VM" className="w-10 h-10 rounded-full " />
              <div className="ml-3 text-text_color italic font-serif font-bold">
                {" "}
                Vectored Matrix
              </div>
            </a>
          </div>
          <div className="mr-20">
            <ul className="flex justify-center gap-6 list-none text-text_color font-serif ">
              <li className="hover:text-white hover:italic hover:bg-text_color rounded-lg px-2 ">
                <a href="#"> Home </a>
              </li>

              <li className="hover:text-white hover:italic hover:bg-text_color rounded-lg px-2 ">
                {" "}
                <a href="#"> About </a>
              </li>

              <li className="hover:text-white hover:italic hover:bg-text_color rounded-lg px-2 ">
                {" "}
                <a href="#"> Skills </a>
              </li>

              <li className="hover:text-white hover:italic hover:bg-text_color rounded-lg px-2 ">
                {" "}
                <a href="#">Portfolio </a>
              </li>

              <li className="hover:text-white hover:italic hover:bg-text_color rounded-lg px-2 ">
                <a href="#"> Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
