import React from "react";
import official from "./../images/iug.jpg";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";

export default function Display_card() {
  return (
    <div className="flex h-screen justify-center items-center bg-navcolor ">
      <div className="flex justify-between gap-8 items-center  py-10 px-20 w-3/5 h-3/5 bg-navcolor rounded-lg text-white font-sans shadow-xl shadow-new_bg/50">
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
          </div>
          <div>
            <a href="/VM_Resume.pdf" download={"VM_Resume.pdf"}>
              <button className="shadow-lg shadow-new_bg/50 capitalize mt-5 bg-new_bg px-3 rounded-full">
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
  );
}
