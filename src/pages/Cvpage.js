import React from "react";

export default function Cvpage() {
  return (
    <div className="flex text-new_bg capitalize items-center justify-center h-height  ">
      <div className="flex justify-center items-center  w-3/5 h-2/3  px-2 rounded-lg shadow-lg shadow-new_bg/50">
        <div>
          <p className="flex justify-start text-xl mb-5  italic">
            {" "}
            This Feature is{" "}
          </p>
          <p className="flex justify-center text-9xl italic "> Coming Soon</p>
          <div className="flex justify-end mt-5  text-white">
            <div className="bg-new_bg p-1 px-5 rounded-full shadow-lg shadow-new_bg/50 ">
              {" "}
              watch Out{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
