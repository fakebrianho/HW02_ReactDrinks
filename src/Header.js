import React, { useRef, useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "./lottie/drink";
import gsap from "gsap";

function Header(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const headerRef = useRef();
  const footerRef = useRef();
  useEffect(() => {
    gsap.to(headerRef.current, { opacity: 1, delay: 1.0, duration: 1.5 });
    gsap.to(footerRef.current, { opacity: 1, delay: 2.0, duration: 1.5 });
  });
  return (
    <header ref={headerRef}>
      <h1>{props.name}</h1>
      <div ref={footerRef} className="footerSecret">
        <div className="header--div--lottie">
          <div className="lottie">
            <Lottie options={defaultOptions} height={100} width={100} />
          </div>
          <h2>
            A curated list of alcoholic summer <br /> beverages.
          </h2>
        </div>
      </div>
      {/* <div className="header--div--recipe">
        <p>{descriptions[0].Recipe}</p>
      </div> */}
    </header>
  );
}

export default Header;
