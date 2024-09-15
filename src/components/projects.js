import React from "react";

export default function Projects() {
  return (
    <div>
      <p className="font-bold capitalize text-xl mb-5 font-serif text-new_bg">
        {" "}
        Projects
      </p>
      <div className="flex h-[calc(100vh-12rem)] overflow-auto">
        <ul className="list-inside list-disc capitalize font-serif">
          <li className="mb-5 text-xl font-bold">
            Safe haven app
            <div className="text-white text-lg mt-3 font-normal">
              Developed using React Native for both Android and iOS platforms,
              the Safe Haven App focuses on providing a secure environment for
              users. This app is dedicated to fighting against sexual abuse,
              rape, and related atrocities. It offers resources, support, and a
              community for survivors and advocates, ensuring a safe and
              confidential space for everyone involved.
            </div>
          </li>{" "}
          <li className="mb-5 text-xl font-bold">
            Bullion Vision Academy
            <div className="text-white text-lg mt-3 font-normal">
              As part of the Bullion Van Academy, I am working on creating
              educational materials and resources to help individuals learn
              about cryptocurrencies, forex trading, and engaging in airdrop
              opportunities. This project involves developing an official logo,
              marketing materials, forming a committee, and creating a
              user-friendly website to support the academy's mission.
            </div>
          </li>
          <li className="mb-5 text-xl font-bold">
            Piotech Frontend Web Development
            <div className="text-white text-lg mt-3 font-normal">
              Leading the frontend development of Piotech's website, enhancing
              user experience and functionality. Piotech is an innovative
              eLearning platform that not only provides educational resources
              but also operates as a freelance marketplace. It connects
              professionals with clients for contract work, facilitating project
              delivery just like other freelancing platforms. By improving the
              user interface and experience, the Piotech website is designed to
              be intuitive and efficient for both learners and freelancers.
            </div>
          </li>
          <li className="mb-5 text-xl font-bold">
            Scorpion Robot
            <div className="text-white text-lg mt-3 font-normal">
              Working on a revolutionary robot named Scorpion, designed
              specifically for poultry farms. This robot detects good eggs from
              bad ones and picks them up from the cages, minimizing the need for
              farmer intervention. Powered by a battery and recharged by solar
              energy, the Scorpion robot autonomously manages its charging
              cycle, ensuring seamless operation and efficiency.
            </div>
          </li>
          <li className="mb-5 text-xl font-bold">
            Hoverboard Development
            <div className="text-white text-lg mt-3 font-normal">
              Developing a hoverboard that is compact and powered by a battery
              instead of fuel. This project aims to create an eco-friendly and
              efficient mode of personal transportation.
            </div>
          </li>{" "}
          <li className="mb-5 text-xl font-bold">
            CNC 2D and 3D Printer
            <div className="text-white text-lg my-3 font-normal">
              Building a CNC machine capable of both 2D and 3D printing. This
              versatile project aims to enhance precision manufacturing and
              rapid prototyping capabilities.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
