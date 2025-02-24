"use client";

import React from "react";
import Image from "next/image";
import { useTypedText } from "../useTypedText";
import AppButton from "../common/button/pages";
import ZoomImageSlider from "../zoomImageSlider";
import shadeImage01 from "media/assets/pattrens/01.webp";
import shadeImage02 from "media/assets/pattrens/02.webp";
import shadeImage03 from "media/assets/pattrens/03.webp";
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

type BannerProps = {
    user?: { token?: any };
    title: string;
    subtitle: string[];
    description: string | React.ReactNode;
    button1: ButtonProps;
    button2: ButtonProps;
    images?: any;
}


export default function Banner(props: BannerProps) {
    const { user, title, subtitle, description, button1, button2, images = [] } = props
    const typedText = useTypedText(subtitle);

    return (
        <section className="w-full py-5 my-10 bg-white relative">
            <div className="absolute w-full h-[600px] flex  justify-center items-center z-0 overflow-hidden">
                <Image
                    src={shadeImage01}
                    alt="full shade image"
                    className="w-[800px] relative left-[900px]  top-[50px] "
                />
                <Image
                    src={shadeImage03}
                    alt="full shade image"
                    className="w-[1200px] relative left-[300px] top-[-150px] "
                />
                <Image
                    src={shadeImage02}
                    alt="full shade image"
                    className="w-[1200px] relative top-[50px]"
                />
            </div>


            <div className="grid lg:grid-cols-2 gap-8 items-center">
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
                    <ZoomImageSlider images={images} />
                </div>
            </div>
        </section>
    );
}
