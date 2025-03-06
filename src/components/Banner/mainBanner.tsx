"use client";

import React from "react";
import Image from "next/image";
import { useTypedText } from "../useTypedText";
import AppButton from "../common/button/pages";
import ZoomImageSlider from "../zoomImageSlider";
import shadeImage01 from "media/assets/pattrens/01.webp";
import shadeImage02 from "media/assets/pattrens/02.webp";
import shadeImage03 from "media/assets/pattrens/03.webp";
import { H1, Lead } from "@/components/typography";
// import NinaButton from "@/components/NinaButton";

interface ButtonProps {
  title?: string;
  mainColor?: string;
  sliderColor?: string;
  mainTextColor?: string;
  hoverTextColor?: string;
  authLink?: string;
  guestLink?: string;
}

type BannerProps = {
  user?: { token?: any };
  title?: string | React.ReactNode;
  subtitle?: any;
  description?: string | React.ReactNode;
  font2?: any;
  button1?: ButtonProps;
  button2?: ButtonProps;
  images?: any;
  image?: any;
};

export default function Banner(props: BannerProps) {
  const {
    user,
    title,
    subtitle,
    description,
    font2,
    button1,
    button2,
    images = [],
    image,
  } = props;
  const typedText = useTypedText(subtitle);

  return (
    <section className="container md:px-4 mx-auto relative">
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
      <div className="w-full py-5 my-10 bg-white ">


        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-6">
            {
              !font2 ? <H1 className={"text-primaryBlack"}>
                <span className="block mb-2">{title}</span>
                <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                  {typedText}
                </span>
              </H1> :
                <H1 innerClass="font-poppins scroll-m-20 font-bold text-xl md:text-3xl tracking-tight lg:text-4xl text-primaryBlue">
                  <span className="block mb-2">{title}</span>
                </H1>
            }

            {
              description && <Lead className="text-gray-700 ">{description}</Lead>
            }

            <div className="flex gap-4">
              {button1?.title &&
                <div>
                  <AppButton title={button1?.title} />
                </div>
              }
              {button2?.title &&
                <div>
                  <AppButton title={button2?.title} />
                </div>
              }
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
            {image ? <Image
              src={image}
              alt="services_img"
              className="zoom-in-out-box2 md:w-[500px] w-[300px] animate-fadeInUp"
            /> :
              <ZoomImageSlider images={images} />
            }
          </div>
        </div>
      </div>
    </section>
  );
}
