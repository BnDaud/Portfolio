import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdWorkOutline, MdOutlineCameraAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaCode } from "react-icons/fa6";
import Profile from "../components/profile";
import Work from "../components/work";
import Skills from "../components/skills";
import Image from "../components/images";
import { Link } from "react-router-dom";

export default function Porfolio() {
  const [profile, setProfile] = useState(true);
  const [work, setWork] = useState(false);
  const [skills, setSkills] = useState(false);
  const [img, setImg] = useState(false);

  const changedisplay = () => {
    if (profile === true) {
      return <Profile />;
    }
    if (work === true) {
      return <Work />;
    }
    if (skills === true) {
      return <Skills />;
    }
    if (img === true) {
      return <Image />;
    }
  };
  return (
    <>
      <div className="hidden md:block text-new_bg  px-5">
        <p className="text-new_bg text-2xl text-center w-full pt-5 font-serif font-semibold capitalize ">
          {" "}
          Full Stack developer
        </p>
        <div className="flex justify-between mt-20 mx-10 ">
          {" "}
          <div className="h-44 w-10 border-2 border-new_bg rounded-full  -mt-16 mr-16">
            <CgProfile
              className={`mx-auto mt-3 text-xl cursor-pointer rounded-full hover:bg-new_bg hover:text-white ${
                profile ? "bg-new_bg text-white" : ""
              }`}
              onClick={() => {
                setProfile(true);
                setImg(false);
                setWork(false);
                setSkills(false);
              }}
            />
            <MdWorkOutline
              className={`mx-auto mt-3 text-xl cursor-pointer rounded-full hover:bg-new_bg hover:text-white ${
                work ? "bg-new_bg text-white" : ""
              }`}
              onClick={() => {
                setProfile(false);
                setImg(false);
                setWork(true);
                setSkills(false);
              }}
            />
            <FaCode
              className={`mx-auto mt-3 text-xl cursor-pointer rounded-full hover:bg-new_bg hover:text-white ${
                skills ? "bg-new_bg text-white" : ""
              }`}
              onClick={() => {
                setProfile(false);
                setImg(false);
                setWork(false);
                setSkills(true);
              }}
            />
            <Link to="http://www.github.com/BnDaud" target="_blank">
              {" "}
              <FaGithub className="mx-auto mt-3 text-xl cursor-pointer rounded-full hover:bg-new_bg hover:text-white" />
            </Link>
            <MdOutlineCameraAlt
              className={`mx-auto mt-3 text-xl cursor-pointer rounded-full hover:bg-new_bg hover:text-white ${
                img ? "bg-new_bg text-white" : ""
              }`}
              onClick={() => {
                setProfile(false);
                setImg(true);
                setWork(false);
                setSkills(false);
              }}
            />
          </div>
          {changedisplay()}
        </div>
      </div>

      <div className="h-height md:hidden">
        <p className="text-new_bg text-2xl text-center w-full pt-5 mb-5 font-serif font-semibold capitalize ">
          {" "}
          Full Stack developer
        </p>
        <div className="mx-auto ">
          {" "}
          <div className="flex items-center border-2 w-2/3  h-8 pb-3 rounded-2xl mx-auto  border-new_bg text-new_bg ">
            <div className="flex gap-2 justify-evenly w-full">
              <CgProfile
                className={`mx-auto mt-3 text-lg cursor-pointer rounded-full hover:bg-new_bg hover:text-white ${
                  profile ? "bg-new_bg text-white" : ""
                }`}
                onClick={() => {
                  setProfile(true);
                  setImg(false);
                  setWork(false);
                  setSkills(false);
                }}
              />
              <MdWorkOutline
                className={`mx-auto mt-3 text-lg cursor-pointer rounded-full hover:bg-new_bg hover:text-white ${
                  work ? "bg-new_bg text-white" : ""
                }`}
                onClick={() => {
                  setProfile(false);
                  setImg(false);
                  setWork(true);
                  setSkills(false);
                }}
              />
              <FaCode
                className={`mx-auto mt-3 text-lg cursor-pointer rounded-full hover:bg-new_bg hover:text-white ${
                  skills ? "bg-new_bg text-white" : ""
                }`}
                onClick={() => {
                  setProfile(false);
                  setImg(false);
                  setWork(false);
                  setSkills(true);
                }}
              />
              <Link
                to="http://www.github.com/BnDaud"
                target="_blank"
                className="mx-auto mt-3 text-lg cursor-pointer rounded-full hover:bg-new_bg hover:text-white"
              >
                {" "}
                <FaGithub />
              </Link>
              <MdOutlineCameraAlt
                className={`mx-auto mt-3 text-lg cursor-pointer rounded-full hover:bg-new_bg hover:text-white ${
                  img ? "bg-new_bg text-white" : ""
                }`}
                onClick={() => {
                  setProfile(false);
                  setImg(true);
                  setWork(false);
                  setSkills(false);
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-5"> {changedisplay()}</div>
      </div>
    </>
  );
}
