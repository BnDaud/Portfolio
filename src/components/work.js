import React from "react";
import Card from "./card";
import bva from "./../images/bva.png";
import cnc from "./../images/cncprinter.jpg";
import robot from "./../images/robot.avif";
export default function Work() {
  const works = [
    {
      name: "Safe Haven",
      githublink: "www.github.com",
      img: "",
      role: "Mobile App Developer",
      videoUrl: "",
    },
    {
      name: "Pio Tech",
      githublink: "www.github.com",
      img: "",
      role: "Mobile App Developer",
      videoUrl: "",
    },
    {
      name: "Bullion Van",
      githublink: "www.github.com",
      img: bva,
      role: "Mobile App Developer",
      videoUrl: "",
    },
    {
      name: "Robotic",
      githublink: "www.github.com",
      img: robot,
      role: "Mobile App Developer",
      videoUrl: "",
    },
    {
      name: "CNC",
      githublink: "www.github.com",
      img: cnc,
      role: "Mobile App Developer",
      videoUrl: "",
    },
    {
      name: "Crown Estate",
      githublink: "www.github.com",
      img: cnc,
      role: "Web App Developer",
      videoUrl: "https://youtu.be/WxCtR9l8apQ",
    },
    {
      name: "Plant Model",
      githublink: "www.github.com",
      img: cnc,
      role: "Mobile App Developer",
      videoUrl: "https://youtu.be/xgdvEPJq-L0",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 w-full md:mx-10 mx-4 h-[calc(100vh-16rem)] overflow-auto ">
        {works.map((info) => {
          return (
            <Card
              name={info.name}
              img={info.img}
              githublink={info.githublink}
              role={info.role}
              videoUrl={info.videoUrl}
            />
          );
        })}
      </div>
    </>
  );
}
