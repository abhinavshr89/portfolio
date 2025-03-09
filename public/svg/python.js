import React from "react";
import gsap from "gsap";
import { useEffect } from "react";

const PythonSvg = () => {
    useEffect(() => {
        gsap.fromTo(
            "#svgElement path:nth-child(1)",
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1 }
        );
        gsap.fromTo(
            "#svgElement path:nth-child(2)",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1 }
        );
    }, []);

    return (
        <svg
            id="svgElement"
            width="128"
            height="128"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M63.3912 12.2481C59.1692 12.2681 55.1392 12.6271 51.5912 13.2551C41.1412 15.1011 39.2452 18.9651 39.2452 26.0921V35.5031H63.9382V38.6401H29.9772C22.8012 38.6401 16.5172 42.9531 14.5512 51.1611C12.2832 60.5661 12.1832 66.4361 14.5512 76.2571C16.3062 83.5681 20.4982 88.7761 27.6752 88.7761H36.1662V77.4941C36.1662 69.3431 43.2172 62.1541 51.5922 62.1541H76.2572C83.1232 62.1541 88.6032 56.5001 88.6032 49.6061V26.0931C88.6032 19.4001 82.9572 14.3731 76.2572 13.2561C72.0132 12.5501 67.6122 12.2291 63.3912 12.2481ZM50.0372 19.8171C52.5872 19.8171 54.6712 21.9341 54.6712 24.5381C54.6712 27.1311 52.5882 29.2281 50.0372 29.2281C47.4772 29.2281 45.4042 27.1311 45.4042 24.5381C45.4032 21.9341 47.4772 19.8171 50.0372 19.8171Z"
                fill="url(#paint0_linear_3_7301)"
            />
            <path
                d="M91.6821 38.6399V49.6059C91.6821 58.1059 84.4741 65.2609 76.2561 65.2609H51.5911C44.8351 65.2609 39.2451 71.0439 39.2451 77.8099V101.325C39.2451 108.016 45.0631 111.953 51.5911 113.872C59.4071 116.169 66.9031 116.585 76.2561 113.872C82.4721 112.071 88.6021 108.449 88.6021 101.325V91.9129H63.9381V88.7749H100.95C108.126 88.7749 110.802 83.7699 113.298 76.2559C115.876 68.5209 115.765 61.0819 113.298 51.1599C111.524 44.0149 108.137 38.6389 100.95 38.6389H91.6821V38.6399ZM77.8091 98.1869C80.3701 98.1869 82.4431 100.284 82.4431 102.879C82.4431 105.481 80.3691 107.598 77.8091 107.598C75.2591 107.598 73.1761 105.481 73.1761 102.879C73.1761 100.284 75.2591 98.1869 77.8091 98.1869Z"
                fill="url(#paint1_linear_3_7301)"
            />
            <path
                opacity="0.444"
                d="M97.309 119.597C97.309 123.14 82.493 126.013 64.218 126.013C45.942 126.013 31.126 123.14 31.126 119.597C31.126 116.053 45.941 113.18 64.218 113.18C82.493 113.18 97.309 116.052 97.309 119.597Z"
                fill="url(#paint2_radial_3_7301)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_3_7301"
                    x1="10.3371"
                    y1="15.1907"
                    x2="67.2909"
                    y2="63.7606"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#5A9FD4" />
                    <stop offset="1" stopColor="#306998" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_3_7301"
                    x1="88.719"
                    y1="93.9523"
                    x2="68.2944"
                    y2="65.3101"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFD43B" />
                    <stop offset="1" stopColor="#FFE873" />
                </linearGradient>
                <radialGradient
                    id="paint2_radial_3_7301"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(64.0842 119.413) rotate(-90) scale(6.41832 28.2139)"
                >
                    <stop stopColor="#B8B8B8" stop-opacity="0.498" />
                    <stop offset="1" stopColor="#7F7F7F" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>
    );
};

export default PythonSvg;
