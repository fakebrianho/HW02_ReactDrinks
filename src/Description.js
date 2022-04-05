import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function Description(props) {
  const descriptionRef = useRef();
  useEffect(() => {
    gsap.to(descriptionRef.current, { opacity: 1, delay: 1.5, duration: 1.5 });
  });
  return (
    <div
      ref={descriptionRef}
      style={{ whiteSpace: "pre-line" }}
      className="div--description--container"
    >
      <p>{props.recipes}</p>
    </div>
  );
}

export default Description;
