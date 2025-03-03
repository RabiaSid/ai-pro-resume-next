import Image from "next/image";
import React from "react";
import shadeImage01 from "media/assets/pattrens/01.webp";
import shadeImage02 from "media/assets/pattrens/02.webp";
import shadeImage03 from "media/assets/pattrens/03.webp";
import { H1, H2, Lead } from "../typography";
import services_banner_img from "media/assets/services_banner_img.webp";

type BannerProps = {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
};

const ServiceBanner = (props: BannerProps) => {
  const { title, description } = props;
  return (
    <>
      <section className="relative container md:px-4 mx-auto my-3">
        <div className="absolute w-full h-[600px] flex  justify-center items-center z-0 overflow-hidden">
          <Image
            src={shadeImage01}
            alt="full shade image"
            className="w-[800px] relative left-[900px] top-[50px] "
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
            <H2 className=" text-primaryBlue">
              <span className="block mb-2">{title}</span>
            </H2>
            <Lead className="text-gray-700 ">{description}</Lead>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={services_banner_img}
              alt="services_img"
              className="zoom-in-out-box2 md:w-[500px] w-[300px] animate-fadeInUp"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBanner;
