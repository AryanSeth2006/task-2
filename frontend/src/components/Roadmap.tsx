import React, { useEffect, useRef } from "react";
import Vivus from "vivus";

import "./Roadmap.css"; // Ensure Tailwind CSS is imported
const Roadmap = () => {
  return (
    <div className="h-screen  w-full bg-black ">
      <div className="wrapper flex justify-center align-middle flex-col">
        <h1 className="text-yellow-400">
          coming soon<span className="dot">.</span>
        </h1>
        <p>It will be soon available here.</p>
        <div className="icons">
          <a href="https://portfolio-app-r2m4.vercel.app/">
            <i className="ri-pages-line"></i>
          </a>
          <a
            href="https://x.com/Aryanseth41
"
          >
            <i className="ri-twitter-x-line"></i>
          </a>
          <a href="https://linkedin.com/in/aryan-seth-">
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/aryanseth_02/
"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            href="
https://www.facebook.com/aryan.seth.3720/"
          >
            <i className="ri-facebook-circle-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
