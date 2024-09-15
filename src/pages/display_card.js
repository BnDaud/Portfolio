import React from "react";
import official from "./../images/iug.jpg";
import { SiMaildotru } from "react-icons/si";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";

export default function Display_card() {
  return (
    <div>
      <div className=" hidden md:flex h-height justify-center items-center  ">
        <div className="flex justify-between gap-8 items-center  py-10 lg:px-6 md:px-4 md:w-10/12 md:h-7/12 lg:w-3/5 xl:w-3/5 xl:h-2/3  bg-black rounded-lg text-white font-sans shadow-lg shadow-new_bg/50">
          <div className="capitalize  w-full p-2">
            {" "}
            <p>Assalam Aleikum, it's Me</p>
            <p className="font-serif font-bold text-2xl">Lawal Sulaimon</p>
            <p>
              {" "}
              And I'm a{" "}
              <span className="text-new_bg font-serif font-semibold ">
                full stack developer
              </span>
            </p>
            <p>with a passion for robotics, Ml, ai and engineering.</p>
            <div className="flex mt-3 gap-4">
              <a href="">
                {" "}
                <TiSocialFacebookCircular className="text-3xl text-new_bg" />
              </a>
              <a href="">
                {" "}
                <TiSocialLinkedinCircular className="text-3xl text-new_bg" />
              </a>
              <a href="">
                <TiSocialTwitterCircular className="text-3xl text-new_bg" />
              </a>
              <a href="">
                <SiMaildotru className="text-xl mt-1 text-new_bg" />
              </a>
            </div>
            <div>
              <a href="/VM_Resume.pdf" download={"VM_Resume.pdf"}>
                <button className="shadow-lg shadow-new_bg/50 capitalize mt-5 bg-new_bg p-1 px-5 rounded-full">
                  {" "}
                  download CV
                </button>
              </a>
            </div>
          </div>
          <div className="w-full h-full ">
            {" "}
            <img
              src={official}
              alt="Lawal Sulaimon"
              className="w-[300px] h-[300px] rounded-full shadow-lg shadow-new_bg/50"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center h-height2">
        <div className=" pt-10 pl-4 mx-auto text-white space-y-4 capitalize w-2/3 h-96 rounded-2xl shadow-lg shadow-new_bg/50  ">
          <p>Assalam Aleikum, it's Me</p>
          <p className="font-serif font-bold text-2xl">Lawal Sulaimon</p>
          <p>
            {" "}
            And I'm a{" "}
            <span className="text-new_bg font-serif font-semibold ">
              full stack developer
            </span>
          </p>
          <p>with a passion for robotics, Ml, ai and engineering.</p>
          <div className="flex mt-3 gap-4">
            <a href="">
              {" "}
              <TiSocialFacebookCircular className="text-3xl text-new_bg" />
            </a>
            <a href="">
              {" "}
              <TiSocialLinkedinCircular className="text-3xl text-new_bg" />
            </a>
            <a href="">
              <TiSocialTwitterCircular className="text-3xl text-new_bg" />
            </a>
            <a href="">
              <SiMaildotru className="text-xl mt-1 text-new_bg" />
            </a>
          </div>
          <div>
            <a href="/VM_Resume.pdf" download={"VM_Resume.pdf"}>
              <button className="shadow-lg shadow-new_bg/50 capitalize mt-5 bg-new_bg p-1 px-5 rounded-full">
                {" "}
                download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
