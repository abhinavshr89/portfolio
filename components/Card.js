import React from "react";

const Card = () => {
    return (
        <div className="h-[16em] w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px] backdrop-brightness-125 backdrop-contrast-150">
            <div>
                <h1 className="text-[2em] font-medium">Heading</h1>
                <p className="text-[0.85em]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum
                    blanditiis pariatur sequi magni.
                </p>
            </div>

            
        </div>
    );
};

export default Card;
