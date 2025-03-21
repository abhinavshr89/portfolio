import React, { useEffect } from "react";
import gsap from "gsap";

const CplusplusSVG = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#upper_box",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        "#lower_box",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        "#c_letter",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.3)" }
      )
      .fromTo(
        "#plusplus",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.3)" },
        "-=0.5"
      );
  }, []);

  return (
    <div>
      <svg
        id="cplusplus-svg"
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="upper_box"
          d="M115.4 30.7002L67.1 2.9002C66.3 2.4002 65.2 2.2002 64 2.2002C62.8 2.2002 61.7 2.5002 60.9 2.9002L12.9 30.8002C11.2 31.8002 10 34.3002 10 36.2002V91.9002C10 93.0002 10.2 94.3002 11 95.4002L117.8 33.4002C117.2 32.2002 116.3 31.3002 115.4 30.7002Z"
          fill="#D26383"
        />
        <path
          id="lower_box"
          d="M10.7002 95.2998C11.2002 96.0998 11.9002 96.7998 12.6002 97.1998L60.8002 125.1C61.6002 125.6 62.7002 125.8 63.9002 125.8C65.1002 125.8 66.2002 125.5 67.0002 125.1L115 97.1998C116.7 96.1998 117.9 93.6998 117.9 91.7998V36.0998C117.9 35.1998 117.8 34.1998 117.3 33.2998L10.7002 95.2998Z"
          fill="#9C033A"
        />
        <path
          id="c_letter"
          d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5C50.5 88.5 39.5 77.5 39.5 64C39.5 50.5 50.5 39.5 64 39.5C73.1 39.5 81.1 44.5 85.3 52L98.3 44.5C91.5 32.6 78.7 24.5 64 24.5C42.2 24.5 24.5 42.2 24.5 64C24.5 85.8 42.2 103.5 64 103.5C78.6 103.5 91.4 95.5 98.2 83.7L85.3 76.1Z"
          fill="white"
        />
        <path
          id="plusplus"
          d="M82.1001 61.8H87.3001V56.5H91.7001V61.8H97.0001V66.2H91.7001V71.4H87.3001V66.2H82.1001V61.8ZM100.6 61.8H105.8V56.5H110.2V61.8H115.5V66.2H110.2V71.4H105.8V66.2H100.6V61.8Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default CplusplusSVG;
