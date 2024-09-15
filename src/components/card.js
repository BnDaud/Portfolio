import { TiInfoLarge, TiLink } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaG } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import Video from "./videoplayer";

export default function Card(arg) {
  const navigate = useNavigate();

  return (
    <div className=" py-2 px-4  md:h-72 md:w-96 mb-4 h-96 w-72  bg-black shadow-lg shadow-new_bg/50 rounded-xl space-y-2 ">
      <div className="flex gap-2 h-[10%]  items-center">
        <img src={arg.img} className="w-8 h-8 rounded-full" />
        <TiInfoLarge
          className="text-xl text-new_bg   rounded-full border border-new_bg hover:text-white hover:bg-new_bg hover:border-transparent focus:outline-none focus:ring-2 focus:ring-new_bg focus:ring-offset-2 cursor-pointer"
          onClick={() => {
            localStorage.setItem("project", true);
            return navigate("/about");
          }}
        />
        <FaGithub className="text-xl text-new_bg   rounded-full border border-new_bg hover:text-white hover:bg-new_bg hover:border-transparent focus:outline-none focus:ring-2 focus:ring-new_bg focus:ring-offset-2 cursor-pointer" />
        <TiLink className="text-xl text-new_bg   rounded-full border border-new_bg hover:text-white hover:bg-new_bg hover:border-transparent focus:outline-none focus:ring-2 focus:ring-new_bg focus:ring-offset-2 cursor-pointer" />
        <p className="text-new_bg"> {arg.name}</p>
      </div>{" "}
      <div className="w-full h-[80%]">
        {" "}
        <Video url={arg.videoUrl} />
      </div>
    </div>
  );
}
