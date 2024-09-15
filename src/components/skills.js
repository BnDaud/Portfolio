import React from "react";
import DoughnutChart from "./pie";
import { useNavigate } from "react-router-dom";

export default function Skills() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hidden lg:flex  justify-between w-full mx-10 ">
        {" "}
        <table className="capitalize table-fixed font-serif w-1/2">
          <caption className="caption-bottom mt-5">
            {" "}
            Years of work and strength
          </caption>
          <thead className="bg-navcolor">
            <tr className="h-12 ">
              <th className="w-1/3 "> Skills</th>
              <th className="w-1/3">Rating {"( % )"}</th>
              <th className="w-1/3">Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-12 border-new_bg border-y-2 ">
              <td className="pl-4"> Python</td>{" "}
              <td className="text-center">90</td>{" "}
              <td className="text-center">4</td>
            </tr>{" "}
            <tr className="h-12 border-new_bg border-b-2 bg-navcolor">
              <td className="pl-4"> React and (Native)</td>{" "}
              <td className="text-center">85</td>{" "}
              <td className="text-center">1</td>
            </tr>
            <tr className="h-12 border-new_bg border-b-2">
              <td className="pl-4"> Django Developer </td>{" "}
              <td className="text-center">80</td>{" "}
              <td className="text-center">3</td>
            </tr>
            <tr className="h-12 border-new_bg border-b-2 bg-navcolor">
              <td className="pl-4"> Html5 & Css3</td>{" "}
              <td className="text-center">70</td>{" "}
              <td className="text-center">3</td>
            </tr>{" "}
            <tr className="h-12 border-new_bg border-b-2">
              <td className="pl-4"> Robotics{"(Embedded)"}</td>{" "}
              <td className="text-center">70</td>{" "}
              <td className="text-center">4</td>
            </tr>{" "}
            <tr className="h-12 border-new_bg border-b-2 bg-navcolor">
              <td className="pl-4"> JavaScript</td>{" "}
              <td className="text-center">65</td>{" "}
              <td className="text-center"> 1</td>
            </tr>{" "}
            <tr className="h-12 border-new_bg border-b-2">
              <td className="pl-4"> Ml and Ai</td>{" "}
              <td className="text-center">60</td>{" "}
              <td className="text-center">1</td>
            </tr>
            <tr className="h-12 border-new_bg border-b-2 bg-navcolor">
              <td className="pl-4"> CAD</td> <td className="text-center">45</td>{" "}
              <td className="text-center">2</td>
            </tr>
          </tbody>
        </table>
        <div className="w-1/2 ml-2">
          <div className="flex  flex-wrap justify-center ">
            <div className="w-1/3">
              <DoughnutChart name={"Python"} grade={90} />
            </div>
            <div className="w-1/3">
              <DoughnutChart name={"React & (Native)"} grade={85} />
            </div>
            <div className="w-1/3">
              <DoughnutChart name={"Django"} grade={80} />
            </div>{" "}
            <div className="w-1/3">
              <DoughnutChart name={"Html5 & Css3"} grade={70} />
            </div>{" "}
            <div className="w-1/3">
              <DoughnutChart name={"Robotics"} grade={70} />
            </div>{" "}
            <div className="w-1/3">
              <DoughnutChart name={"Java Script"} grade={65} />
            </div>{" "}
            <div className="w-1/3">
              <DoughnutChart name={"Ml & Ai"} grade={60} />
            </div>{" "}
            <div className="w-1/3">
              <DoughnutChart name={"CAD"} grade={45} />
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
