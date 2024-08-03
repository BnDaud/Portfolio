import React from "react";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
import official from "./../images/iug.jpg";

export default function () {
  return (
    <div className="flex  gap-5 text-new_bg  h-screen items-center">
      <div className="flex items-center  w-10">
        {" "}
        <ul>
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
      <div className="flex justify-center">
        <div className="text-left overflow-y-auto w-1/2">
          {" "}
          <div className="p-5">
            <p>
              hello About Mes Line 15:13: The href attribute requires a valid
              value to be accessible. Provide a valid, navigable address as the
              href value. If you cannot provide a valid href, but still need the
              element to resemble a link, use a button and change it with
              appropriate styles. Learn more:
            </p>{" "}
            <p>
              About Mes Line 15:13: The href attribute requires a valid value to
              be accessible. Provide a valid, navigable address as the href
              value. If you cannot provide a valid href, but still need the
              element to resemble a link, use a button and change it with
              appropriate styles. Learn more:
            </p>{" "}
            <p>
              About Mes Line 15:13: The href attribute requires a valid value to
              be accessible. Provide a valid, navigable address as the href
              value. If you cannot provide a valid href, but still need the
              element to resemble a link, use a button and change it with
              appropriate styles. Learn more:
            </p>
          </div>
        </div>
        <div className="flex items-center ">
          {" "}
          <img
            src={official}
            alt="Lawal Sulaimon"
            className=" -ml-32 w-[350px] rounded-full  border-navcolor border-8"
          />
        </div>
      </div>
    </div>
  );
}
