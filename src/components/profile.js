import React from "react";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
import { SiMaildotru } from "react-icons/si";
import Logo from "./../images/Logo.png";
import { FaHandPointLeft } from "react-icons/fa";

export default function Profile() {
  return (
    <>
      <div className="hidden lg:flex justify-between  mx-10 w-full h-[calc(100vh-23rem)]">
        {" "}
        <div className="w-40 h-72 border-2 border-new_bg rounded-ss-customR rounded-ee-customR font-serif">
          <div className="text-center mt-1  ">
            <img
              src={Logo}
              alt="VM logo"
              className="w-16 h-16 mx-auto rounded-full"
            />
            <p className="text-lg"> Sulaimon </p>
            <ul className="mt-1 ">
              <li className="mb-2 ml-2 rounded-lg w-32 hover:bg-navcolor">
                <a href="" className=" flex ml-2 ">
                  {" "}
                  <TiSocialFacebookCircular className="text-2xl" />{" "}
                  <div className="ml-2 "> Facebook</div>
                </a>{" "}
              </li>{" "}
              <li className="mb-2 ml-2 rounded-lg w-32 hover:bg-navcolor">
                <a href="" className=" flex ml-2 ">
                  {" "}
                  <TiSocialTwitterCircular className="text-2xl" />{" "}
                  <div className="ml-2  uppercase "> X</div>
                </a>{" "}
              </li>{" "}
              <li className="mb-2 ml-2 rounded-lg w-32 hover:bg-navcolor">
                <a href="" className=" flex ml-2 ">
                  {" "}
                  <TiSocialLinkedinCircular className="text-2xl" />{" "}
                  <div className="ml-2 "> LinkedIn</div>
                </a>{" "}
              </li>
              <li className="mb-2 ml-2 rounded-lg w-32 hover:bg-navcolor">
                <a href="" className=" flex ml-2 items-center">
                  {" "}
                  <SiMaildotru className="text-lg ml-1" />{" "}
                  <div className="ml-2 "> E-Mail</div>
                </a>{" "}
              </li>
            </ul>
            <div className="-ml-4">
              <a href="/VM_Resume.pdf" download={"VM_Resume.pdf"}>
                <button className=" capitalize mt-1 bg-new_bg p-1 px-2 rounded-full text-white">
                  {" "}
                  download CV
                </button>
              </a>
            </div>
          </div>
        </div>{" "}
        <div className="text-left   w-96 capitalize  font-serif">
          <p>{"<VM />"}</p>
          <p className="mt-1 pl-3 text-white text-lg">Assalam Aleikum</p>
          <p className="mt-1 pl-3 text-white text-lg">
            {" "}
            i'm <span className="text-new_bg">Sulaimon,</span>
          </p>
          <p className="mt-1 pl-3 text-white">Full-Stack developer</p>
          <p className="mt-2"> {"<VM />"}</p>
          <p className="mt-1 pl-3 text-white">
            Welcome to my corner of the digital world! I'm a passionate
            Full-Stack Developer, Robotics Engineer, and App Developer,
            dedicated to crafting innovative solutions and pushing the
            boundaries of technology.
          </p>
          <div className="flex ml-2 items-center mt-3 cursor-pointer">
            <FaHandPointLeft className="text-xl rotate-45" />{" "}
            <p className=" ml-3 "> Let's Talk {"<VM />"}</p>
          </div>
        </div>
        <div className="mt-20 mr-20 w-32 h-50 border-new_bg border-2  rounded-3xl text-new_bg pl-2">
          <p className="mt-2 text-xl capitalize text-center underline">
            {" "}
            Years
          </p>
          <p className="mt-3 text-xl capitalize">
            {" "}
            4<span className="text-white text-sm "> Python Dev</span>
          </p>
          <p className="mt-1 text-xl capitalize">
            {" "}
            4<span className="text-white text-sm "> Robotics</span>
          </p>{" "}
          <p className="mt-1 text-xl capitalize">
            {" "}
            3<span className="text-white text-sm "> Html5 & css3</span>
          </p>{" "}
          <p className="mt-1 text-xl capitalize">
            {" "}
            2<span className="text-white text-sm "> Ml & AI</span>
          </p>{" "}
          <p className="mt-1 text-xl capitalize">
            {" "}
            2<span className="text-white text-sm "> django Dev</span>
          </p>
        </div>
      </div>
    </>
  );
}
