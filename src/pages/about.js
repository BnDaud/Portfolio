import React, { useState } from "react";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
import official from "./../images/iug.jpg";
import Intro from "../components/intro";
import Expertise from "../components/expertise";
import Projects from "../components/projects";
import Currentproject from "../components/currentproject";
import Philosophy from "../components/philosophy";

export default function () {
  const [intro, setIntro] = useState(true);
  const [expertise, setExpertise] = useState(false);
  const [projects, setProjects] = useState(false);
  const [currentP, setCurrentP] = useState(false);
  const [philosophy, setPhilosophy] = useState(false);
  const display_content = () => {
    if (intro === true) {
      return <Intro />;
    }
    if (expertise === true) {
      return <Expertise />;
    }
    if (projects === true) {
      return <Projects />;
    }
    if (currentP === true) {
      return <Currentproject />;
    }
    if (philosophy === true) {
      return <Philosophy />;
    }
  };
  return (
    <div className="flex  gap-5 text-new_bg  h-height ">
      <div className="flex items-center  w-10">
        {" "}
        <ul className="list-none">
          <li className="mb-2 ml-2">
            <a href="">
              <TiSocialFacebookCircular className="text-3xl" />
            </a>
          </li>{" "}
          <li className="mb-2 ml-2">
            <a href="">
              <TiSocialTwitterCircular className="text-3xl" />
            </a>
          </li>{" "}
          <li className="mb-2 ml-2">
            <a href="">
              <TiSocialLinkedinCircular className="text-3xl" />
            </a>
          </li>
        </ul>
      </div>
      <div className="  mt-32 w-3/5 -ml-8 ">
        <p className="text-center uppercase mb-5"> contents </p>
        <div className="flex justify-center">
          <ul className="  list-disc list-inside capitalize">
            <li
              className={`mb-5  w-full hover:bg-gray-700 hover:cursor-pointer px-3 rounded-lg ${
                intro ? "bg-gray-700" : ""
              }`}
              onClick={() => {
                setIntro(true);
                setPhilosophy(false);
                setCurrentP(false);
                setExpertise(false);

                setProjects(false);
              }}
              /*onMouseLeave={() => {
                setIntro(false);
              }}*/
            >
              {" "}
              Introduction{" "}
            </li>
            <li
              className={`mb-5  w-full hover:bg-gray-700 hover:cursor-pointer px-3 rounded-lg ${
                expertise ? "bg-gray-700" : ""
              }`}
              onClick={() => {
                setExpertise(true);
                setPhilosophy(false);
                setCurrentP(false);

                setIntro(false);
                setProjects(false);
              }}
            >
              {" "}
              Expertise{" "}
            </li>
            <li
              className={`mb-5  w-full hover:bg-gray-700 hover:cursor-pointer px-3 rounded-lg ${
                projects ? "bg-gray-700" : ""
              }`}
              onClick={() => {
                setProjects(true);
                setPhilosophy(false);
                setCurrentP(false);
                setExpertise(false);
                setIntro(false);
              }}
            >
              {" "}
              projects{" "}
            </li>
            <li
              className={`mb-5  w-full hover:bg-gray-700 hover:cursor-pointer px-3 rounded-lg ${
                currentP ? "bg-gray-700" : ""
              }`}
              onClick={() => {
                setCurrentP(true);
                setPhilosophy(false);

                setExpertise(false);
                setIntro(false);
                setProjects(false);
              }}
            >
              {" "}
              current projects{" "}
            </li>
            <li
              className={`mb-5  w-full hover:bg-gray-700 hover:cursor-pointer px-3 rounded-lg ${
                philosophy ? "bg-gray-700" : ""
              }`}
              onClick={() => {
                setPhilosophy(true);
                setCurrentP(false);
                setExpertise(false);
                setIntro(false);
                setProjects(false);
              }}
            >
              {" "}
              personal philosophy{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="mr-20 text-left  w-11/12  py-10 pl-10">
        {" "}
        {display_content()}
      </div>
    </div>
  );
}
