import React from "react";
import qlogo from "../images/qlogo.png";

const LogoSpinner = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[100]">
    <div className="relative">
      <div className="w-24 h-24"></div>

      <img
        src={qlogo}
        alt="Loading"
        className="absolute inset-0 m-auto w-12 h-12 object-contain animate-pulse"
      />
    </div>
    <p className="mt-4 text-blue-500 font-bold tracking-widest animate-pulse uppercase text-md">
      Loading project....
    </p>
  </div>
);

export default LogoSpinner;
