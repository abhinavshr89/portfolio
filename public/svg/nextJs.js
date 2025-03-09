import React, { useEffect } from "react";
import gsap from "gsap";

const NextjsSVG = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#path1",
      { y: 128 },
      { y: 0, duration: 2, ease: "power2.out" }
    )
      .fromTo(
        "#path2",
        { y: -128 },
        { y: 0, duration: 2, ease: "power2.out" },
        "-=1.5"
      )
      .to("#circle", {
        rotation: 360,
        transformOrigin: "center",
        duration: 2,
        ease: "power2.out",
      });
  }, []);

  return (
    <div>
      <svg
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="circle"
          d="M64 0C28.7 0 0 28.7 0 64C0 99.3 28.7 128 64 128C99.3 128 128 99.3 128 64C128 28.7 99.3 0 64 0ZM96.7 114.4L48.4 41.8H41.6V91.9H48.4V55.3L92.6 116.8C84.1 121.4 74.4 124 64 124C30.8 124.1 3.9 97.2 3.9 64C3.9 30.8 30.8 3.9 64 3.9C97.2 3.9 124.1 30.8 124.1 64C124.1 85.1 113.2 103.7 96.7 114.4Z"
          fill="black"
        />
        {/* <path
          id="path1"
          d="M78.6001 73.2998L86.1001 84.5998V41.7998H78.6001V73.2998Z"
          fill="black"
        /> */}
        <path
          id="path2"
          d="M78.6001 73.2998L86.1001 84.5998V41.7998H78.6001V73.2998Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default NextjsSVG;
