import React, { useEffect, useState } from "react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";

import Intro from "../components/intro";
import Expertise from "../components/expertise";
import Projects from "../components/projects";

import Philosophy from "../components/philosophy";
import { useLocation } from "react-router-dom";

export default function () {
  const [intro, setIntro] = useState(true);
  const [expertise, setExpertise] = useState(false);
  const [projects, setProjects] = useState(false);
  const [currentP, setCurrentP] = useState(false);
  const [philosophy, setPhilosophy] = useState(false);
  const [showlist, setShowlist] = useState(false);
  useEffect(() => {
    if (localStorage.project === "true") {
      setProjects(true);
      setPhilosophy(false);

      setExpertise(false);
      setIntro(false);
    }
    localStorage.clear();
  }, []);

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

    if (philosophy === true) {
      return <Philosophy />;
    } else {
      setIntro(true);
    }
  };
  return (
    <>
      {" "}
      <div className="hidden sm:flex  gap-5 text-new_bg  h-height ">
        <div className="  mt-32 w-3/5 -ml-8 sm:ml-2">
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

                  setExpertise(false);
                  setIntro(false);
                }}
              >
                {" "}
                projects{" "}
              </li>

              <li
                className={`mb-5  w-full hover:bg-gray-700 hover:cursor-pointer px-3 rounded-lg ${
                  philosophy ? "bg-gray-700" : ""
                }`}
                onClick={() => {
                  setPhilosophy(true);

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
      <div className="sm:hidden flex justify-between gap-4 h-height pr-6 sm:mt-0 mt-4">
        <div className="flex items-center h-height2 w-6">
          <BsReverseLayoutTextSidebarReverse
            className="text-new_bg text-3xl -ml-2"
            onClick={() => setShowlist(!showlist)}
          />
        </div>

        {showlist ? (
          <div className="flex justify-center items-center h-height w-full text-new_bg">
            <ul className="  list-disc list-inside capitalize">
              <li
                className={`mb-5  w-full hover:bg-gray-700 hover:cursor-pointer px-3 rounded-lg ${
                  intro ? "bg-gray-700" : ""
                }`}
                onClick={() => {
                  setShowlist(!showlist);
                  setIntro(true);
                  setPhilosophy(false);

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
                  setShowlist(!showlist);
                  setExpertise(true);
                  setPhilosophy(false);

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
                  setShowlist(!showlist);
                  setProjects(true);
                  setPhilosophy(false);

                  setExpertise(false);
                  setIntro(false);
                }}
              >
                {" "}
                projects{" "}
              </li>

              <li
                className={`mb-5  w-full hover:bg-gray-700 hover:cursor-pointer px-3 rounded-lg ${
                  philosophy ? "bg-gray-700" : ""
                }`}
                onClick={() => {
                  setShowlist(!showlist);
                  setPhilosophy(true);

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
        ) : (
          display_content()
        )}
      </div>
    </>
  );
}
