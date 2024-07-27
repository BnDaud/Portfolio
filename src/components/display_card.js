import React from "react";
import official from "./../images/official.jpg";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";

export default function Display_card() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex justify-between gap-8 items-center  py-10 px-20 w-3/5 h-3/5 bg-navcolor rounded-lg text-white font-sans">
        <div className="capitalize  w-full p-2">
          {" "}
          <p>Assalam Aleikum, it's Me</p>
          <p className="font-serif font-bold text-2xl">Lawal Sulaimon</p>
          <p>
            {" "}
            And I'm a{" "}
            <span className="text-text_color font-serif font-semibold ">
              fullstack developer
            </span>
          </p>
          <p>with a passion for robotics and engineering.</p>
          <div className="flex mt-3 justify-center gap-4">
            <a href="">
              {" "}
              <TiSocialFacebookCircular className="text-3xl text-text_color" />
            </a>
            <a href="">
              {" "}
              <TiSocialLinkedinCircular className="text-3xl text-text_color" />
            </a>
            <a href="">
              <TiSocialTwitterCircular className="text-3xl text-text_color" />
            </a>
          </div>
          <div>
            <button className="capitalize mt-5 bg-text_color px-3 rounded-full">
              {" "}
              download CV
            </button>
          </div>
        </div>
        <div className="w-full h-full ">
          {" "}
          <img
            src={official}
            alt="Lawal Sulaimon"
            className="w-[300px] h-[300px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
