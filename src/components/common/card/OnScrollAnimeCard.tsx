'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

type propsType = {
    img?: any;
    alt: string;
    title?: string;
    points?: string;
}

const OnScrollAnimeCard = (props: propsType) => {
    const { img, alt, title, points } = props
    const [isGroupHover, setIsGroupHover] = useState(false);

    if (typeof points !== 'string' || !points.trim()) {
        return null;
    }

    const pointsArray = points
        .replace(/<ul>|<\/ul>/g, '') // Remove <ul> tags
        .split(/<\/li>/) // Split by </li> tag
        .filter((item) => item.trim())
        .map((item) => item.replace(/<li>/, '').trim());

    return (
        <div
            className="sm:h-[550px] border-2 border-white relative shadow-[0_0_20px_0px_rgba(0,0,0,0.1)] rounded-xl py-4 px-6 group flex flex-col gap-4"
            onMouseEnter={() => setIsGroupHover(true)}
            onMouseLeave={() => setIsGroupHover(false)}
        >
            {/* Image */}
            <div className="px-6 w-full flex justify-center items-center">
                <div className="animate-pulse w-[150px] h-[180px] flex justify-center items-center">
                    <Image src={img} alt={alt} width={150} height={180} className="w-full" />
                </div>
            </div>
            {/* Title */}
            <div className="w-full text-center">
                <span className="drop-shadow-lg text-lg font-bold text-center font-Lexend">{title}</span>
            </div>
            {/* Points */}
            <div className="flex flex-col gap-4">
                {pointsArray.map((item, idx) => (
                    <div key={idx} className="flex gap-2">
                        <div className="w-[18px]">
                            <FaCheckCircle className="text-lg text-primary mt-1" />
                        </div>
                        <span className="flex-1 text-sm font-Lexend" dangerouslySetInnerHTML={{ __html: item }}></span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OnScrollAnimeCard;
