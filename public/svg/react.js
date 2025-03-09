import React, { useEffect } from "react";
import gsap from "gsap";

const ReactSVG = () => {
    useEffect(() => {
        gsap.fromTo(
            "#react-logo path",
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 1, stagger: 0.2 }
        );
    }, []);

    return (
        <svg
            id="react-logo"
            width="128"
            height="128"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M64.0001 75.4C70.2961 75.4 75.4001 70.296 75.4001 64C75.4001 57.7039 70.2961 52.6 64.0001 52.6C57.7041 52.6 52.6001 57.7039 52.6001 64C52.6001 70.296 57.7041 75.4 64.0001 75.4Z"
                fill="#61DAFB"
            />
            <path
                d="M107.3 45.2C105.1 44.4 102.8 43.6 100.4 42.9C101 40.5 101.5 38.1 101.9 35.8C104 22.6 101.7 13.3 95.2999 9.69998C93.3999 8.59997 91.2999 8.09998 88.8999 8.09998C81.8999 8.09998 72.9999 13.3 63.9999 22C54.9999 13.3 46.0999 8.09998 39.0999 8.09998C36.6999 8.09998 34.5999 8.59997 32.6999 9.69998C26.2999 13.4 23.9999 22.7 26.0999 35.8C26.4999 38.1 26.9999 40.5 27.5999 42.9C25.1999 43.6 22.8999 44.3 20.6999 45.2C8.1999 50 1.3999 56.6 1.3999 64C1.3999 71.4 8.2999 78 20.6999 82.8C22.8999 83.6 25.1999 84.4 27.5999 85.1C26.9999 87.5 26.4999 89.9 26.0999 92.2C23.9999 105.4 26.2999 114.7 32.6999 118.3C34.5999 119.4 36.6999 119.9 39.0999 119.9C46.1999 119.9 55.0999 114.7 63.9999 106C72.9999 114.7 81.8999 119.9 88.8999 119.9C91.2999 119.9 93.3999 119.4 95.2999 118.3C101.7 114.6 104 105.3 101.9 92.2C101.5 89.9 101 87.5 100.4 85.1C102.8 84.4 105.1 83.7 107.3 82.8C119.8 78 126.6 71.4 126.6 64C126.6 56.6 119.8 50 107.3 45.2ZM92.4999 14.7C96.5999 17.1 97.9999 24.5 96.2999 35C95.9999 37.1 95.4999 39.3 94.8999 41.6C89.6999 40.4 84.1999 39.6 78.3999 39.1C74.9999 34.3 71.4999 30 67.9999 26.1C75.3999 18.8 82.8999 13.8 88.9999 13.8C90.2999 13.8 91.4999 14.1 92.4999 14.7ZM81.2999 74C79.4999 77.2 77.3999 80.4 75.1999 83.6C71.4999 83.9 67.7999 84 63.9999 84C60.0999 84 56.3999 83.9 52.7999 83.6C50.5999 80.4 48.5999 77.2 46.7999 74C44.8999 70.7 43.0999 67.3 41.4999 64C43.0999 60.7 44.8999 57.3 46.7999 54C48.5999 50.8 50.6999 47.6 52.8999 44.4C56.5999 44.1 60.2999 44 64.0999 44C67.9999 44 71.6999 44.1 75.2999 44.4C77.4999 47.6 79.4999 50.8 81.2999 54C83.1999 57.3 84.9999 60.7 86.5999 64C84.8999 67.3 83.1999 70.6 81.2999 74ZM89.5999 70.7C91.0999 74.2 92.2999 77.6 93.3999 81C89.9999 81.8 86.3999 82.4 82.5999 82.9C83.7999 81 85.0999 79 86.1999 76.9C87.3999 74.8 88.4999 72.7 89.5999 70.7ZM63.9999 97.8C61.5999 95.2 59.2999 92.4 57.0999 89.5C59.3999 89.6 61.6999 89.7 63.9999 89.7C66.2999 89.7 68.5999 89.6 70.8999 89.5C68.6999 92.4 66.3999 95.2 63.9999 97.8ZM45.3999 82.8C41.5999 82.3 37.9999 81.7 34.5999 80.9C35.6999 77.6 36.8999 74.1 38.3999 70.6C39.4999 72.6 40.5999 74.7 41.7999 76.7C42.9999 78.9 44.1999 80.8 45.3999 82.8ZM38.3999 57.3C36.8999 53.8 35.6999 50.4 34.5999 47C37.9999 46.2 41.5999 45.6 45.3999 45.1C44.1999 47 42.8999 49 41.7999 51.1C40.5999 53.2 39.4999 55.3 38.3999 57.3ZM63.9999 30.2C66.3999 32.8 68.6999 35.6 70.8999 38.5C68.5999 38.4 66.2999 38.3 63.9999 38.3C61.6999 38.3 59.3999 38.4 57.0999 38.5C59.2999 35.6 61.5999 32.8 63.9999 30.2ZM86.1999 51.2L82.5999 45.2C86.3999 45.7 89.9999 46.3 93.3999 47.1C92.2999 50.4 91.0999 53.9 89.5999 57.4C88.4999 55.3 87.3999 53.2 86.1999 51.2ZM31.6999 35C29.9999 24.5 31.3999 17.1 35.4999 14.7C36.4999 14.1 37.6999 13.8 38.9999 13.8C44.9999 13.8 52.4999 18.7 59.9999 26.1C56.4999 29.9 52.9999 34.3 49.5999 39.1C43.7999 39.6 38.2999 40.5 33.0999 41.6C32.4999 39.3 32.0999 37.1 31.6999 35ZM6.9999 64C6.9999 59.3 12.6999 54.3 22.6999 50.6C24.6999 49.8 26.8999 49.1 29.0999 48.5C30.6999 53.5 32.6999 58.8 35.0999 64.1C32.6999 69.4 30.5999 74.6 29.0999 79.6C15.2999 75.6 6.9999 69.6 6.9999 64ZM35.4999 113.3C31.3999 110.9 29.9999 103.5 31.6999 93C31.9999 90.9 32.4999 88.7 33.0999 86.4C38.2999 87.6 43.7999 88.4 49.5999 88.9C52.9999 93.7 56.4999 98 59.9999 101.9C52.5999 109.2 45.0999 114.2 38.9999 114.2C37.6999 114.2 36.4999 113.9 35.4999 113.3ZM96.2999 93C97.9999 103.5 96.5999 110.9 92.4999 113.3C91.4999 113.9 90.2999 114.2 88.9999 114.2C82.9999 114.2 75.4999 109.3 67.9999 101.9C71.4999 98.1 74.9999 93.7 78.3999 88.9C84.1999 88.4 89.6999 87.5 94.8999 86.4C95.4999 88.7 95.8999 90.9 96.2999 93ZM105.3 77.4C103.3 78.2 101.1 78.9 98.8999 79.5C97.2999 74.5 95.2999 69.2 92.8999 63.9C95.2999 58.6 97.3999 53.4 98.8999 48.4C112.7 52.4 121 58.4 121 64C121 68.7 115.2 73.7 105.3 77.4Z"
                fill="#61DAFB"
            />
        </svg>
    );
};

export default ReactSVG;
