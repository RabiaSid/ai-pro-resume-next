"use client";

import React, { useEffect, useState } from "react";
import { useTypedText } from "../useTypedText";
import AppButton from "../common/button/pages";
// import NinaButton from "@/components/NinaButton";

interface ButtonProps {
    title: string;
    mainColor: string;
    sliderColor: string;
    mainTextColor: string;
    hoverTextColor: string;
    authLink: string;
    guestLink: string;
}

interface BannerProps {
    user?: { token?: string };
    title: string;
    subtitle: string[];
    description: string;
    button1: ButtonProps;
    button2: ButtonProps;
    images?: any;
}



const ZoomCarousel: React.FC<{ images?: string[] }> = ({ images = [] }) => {
    const [cImage, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length === 0) return;

        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [images.length]);

    if (images.length === 0) {
        return <div>No images available</div>;
    }

    return (
        <>
            <link rel="preload" as="image" href={images[0]} />
            <div className="w-full lg:w-[700px] slick__main__holder">
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        className={`${idx === cImage ? "active" : "inActive"} skew-y-12`}
                        alt={`image${idx + 1}`}
                    />
                ))}
            </div>
        </>
    );
};

const Banner: React.FC<BannerProps> = ({ user, title, subtitle, description, button1, button2, images = [] }) => {
    const typedText = useTypedText(subtitle);

    return (
        <section className="w-full py-10 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-left space-y-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        <span className="block mb-2">{title}</span>
                        <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                            {typedText}
                        </span>
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
                    <div className="flex gap-4">
                        <div>
                            <AppButton title={button1.title} />
                        </div>
                        <div>
                            <AppButton title={button2.title} />
                        </div>
                        {/* <NinaButton
                            title={button1.title}
                            mainColor={button1.mainColor}
                            sliderColor={button1.sliderColor}
                            mainTextColor={button1.mainTextColor}
                            hoverTextColor={button1.hoverTextColor}
                            link={user?.token ? button1.authLink : button1.guestLink}
                        />
                        <NinaButton
                            title={button2.title}
                            mainColor={button2.mainColor}
                            sliderColor={button2.sliderColor}
                            mainTextColor={button2.mainTextColor}
                            hoverTextColor={button2.hoverTextColor}
                            link={user?.token ? button2.authLink : button2.guestLink}
                        /> */}
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    {/* <ZoomCarousel images={images} /> */}
                </div>
            </div>
        </section>
    );
};

export default Banner;
