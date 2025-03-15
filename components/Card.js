import React, { useState } from "react";
import { CircleCheck } from "lucide-react";

const Card = ({ icon: Icon, title, details }) => {
    const [iconKey, setIconKey] = useState(0);

    const handleClick = () => {
        setIconKey(prevKey => prevKey + 1);
    };

    return (
        <div 
            className="h-[16em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px] hover:border-[rgba(75,30,133,1)] hover:from-[rgba(75,30,133,0.8)] hover:to-[rgba(75,30,133,0.2)] transition-all duration-300 hover:shadow-2xl"
            onClick={handleClick}
        >
            <div className="flex flex-col justify-center items-center">
                <Icon key={iconKey} />
                <h1 className="text-[2em] font-bold text-center">{title}</h1>
                <div className="text-[0.85em] flex flex-col gap-2">
                    {details.map((detail, index) => (
                        <p key={index} className="text-[10px] font-light flex items-center justify-left gap-2 skill_detail">
                            <CircleCheck size={15} /> <span>{detail}</span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
