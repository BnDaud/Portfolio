import React from "react";

export default function Cvpage() {
  return (
    <div className="flex text-new_bg capitalize items-center justify-center h-height  ">
      <div className=" hidden md:flex justify-between gap-8 items-center  py-10 lg:px-6 md:px-4 md:w-10/12 md:h-7/12 lg:w-3/5 xl:w-3/5 xl:h-2/3  bg-black rounded-lg text-new_bg font-sans shadow-lg shadow-new_bg/50">
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

      <div className="md:hidden flex justify-center items-center pt-10 pl-4 mx-auto  space-y-4 capitalize w-2/3 h-96 rounded-2xl shadow-lg shadow-new_bg/50  ">
        <div>
          <p className="flex justify-start text-xl mb-5  italic">
            {" "}
            This Feature is{" "}
          </p>
          <p className="flex justify-center text-4xl italic "> Coming Soon</p>
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
