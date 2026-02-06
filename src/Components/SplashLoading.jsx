import React from "react";
import qlogo from "../images/qlogo.png";

const SplashLoading = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
    <div className="relative">
      <div className="w-32 h-32 animate-spin duraion-1000"></div>

      <img
        src={qlogo}
        alt="Welcome to My Portfolio"
        className="absolute inset-0 m-auto w-16 h-16 object-contain animate-pulse"
      />
    </div>
    <div className="mt-4 overflow-hidden">
      <p className="text-[3rem] font-bold tracking-[0.3em] text-blue-500 uppercase animate-bounce">
        Welcome to My Portfolio
      </p>
    </div>
  </div>
);

export default SplashLoading;
