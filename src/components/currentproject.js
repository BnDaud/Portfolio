import React from "react";

export default function Currentproject() {
  return (
    <div className="capitalize font-serif text-left">
      <p className="font-bold text-xl font-serif text-new_bg">
        Current Project
      </p>

      <div className="text-left">
        {" "}
        <ul className="list-inside list-disc mt-5 text-white">
          <li className="mb-3">Safe haven</li>
          <li className="mb-3">Bullion Vision Academy</li>
          <li className="mb-3">Piotech</li>
          <li className="mb-3">Scorpion Robot</li>
        </ul>
      </div>
    </div>
  );
}
