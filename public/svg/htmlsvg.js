import React, { useEffect } from "react";
import gsap from "gsap";

const HTMLsvg = () => {
    useEffect(() => {
        gsap.fromTo(
            "#html-icon path",
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
        );
    }, []);

    return (
        <div>
            <svg
                id="html-icon"
                width="128"
                height="128"
                viewBox="0 0 128 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M19.0372 113.876L9.03223 1.66113H118.968L108.952 113.859L63.9332 126.339L19.0372 113.876Z"
                    fill="#E44D26"
                />
                <path
                    d="M64 116.8L100.378 106.714L108.937 10.8359H64V116.8Z"
                    fill="#F16529"
                />
                <path
                    d="M63.9998 52.4551H45.7878L44.5298 38.3611H63.9998V24.5991H29.4888L29.8188 28.2911L33.2008 66.2181H63.9998V52.4551ZM63.9998 88.1981L63.9388 88.2151L48.6118 84.0751L47.6328 73.1001H33.8158L35.7438 94.7091L63.9368 102.535L63.9998 102.518V88.1981Z"
                    fill="#EBEBEB"
                />
                <path
                    d="M63.9521 52.4551V66.2181H80.8992L79.3022 84.0671L63.9521 88.2101V102.529L92.1671 94.7091L92.3741 92.3841L95.6082 56.1511L95.9431 52.4551H92.2351H63.9521ZM63.9521 24.5991V38.3611H97.1961L97.4721 35.2691L98.1001 28.2911L98.4291 24.5991H63.9521Z"
                    fill="white"
                />
            </svg>
        </div>
    );
};

export default HTMLsvg;
