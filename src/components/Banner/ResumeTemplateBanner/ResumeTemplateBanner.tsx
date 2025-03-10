"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./ResumeTemplateBanner.module.css";

// Image imports
import shadeImage01 from "media/assets/pattrens/01.webp";
import shadeImage02 from "media/assets/pattrens/02.webp";
import shadeImage03 from "media/assets/pattrens/03.webp";
import bannerArrow from "media/assets/Banner_arrow_icon.webp";
import template_design1 from "media/assets/template_design_1.webp";
import template_design2 from "media/assets/template_design_2.webp";
import template_design3 from "media/assets/template_design_3.webp";
import template_design4 from "media/assets/template_design_4.webp";
import bannerIcon from "media/assets/banner-icons.webp";

// Companies
import saudi from "media/assets/company/saudi.webp";
import aerotek from "media/assets/company/aerotek.webp";
import geti from "media/assets/company/geti.webp";
import ladders from "media/assets/company/ladders.webp";
import snagajob from "media/assets/company/snagajob.webp";
import alison from "media/assets/company/alison.webp";
import AppButton from "../../common/button/pages";

type BannerProps = {
  highlightText: string;
  descriptionText: any;
  startText: string;
  endText: string;
  clickHere: string;
  link: string;
};

const images = [
  template_design1,
  template_design2,
  template_design3,
  template_design4,
];

const ZoomCarousel: React.FC = () => {
  const [cImage, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`w-full lg:w-[500px] h-[400px] lg:h-[600px] relative top-[20px] ${styles.slickbannerholder}`}
    >
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          className={`${
            idx === cImage ? styles.active : styles.inActive
          } w-full h-[350px]`}
          alt={`image${idx + 1}`}
        />
      ))}
    </div>
  );
};

const ResumeTemplateBanner = (props: BannerProps) => {
  const {
    highlightText,
    descriptionText,
    startText,
    endText,
    clickHere,
    link,
  } = props;
  return (
    <section className="w-full h-auto overflow-hidden">
      <div className="relative flex justify-between bg-white flex-col">
        {/* Shape Patterns */}
        <div className="absolute w-full h-[800px] flex justify-center items-center overflow-hidden">
          <Image
            src={shadeImage01}
            alt="shade image"
            className="hidden 2xl:block w-[100px] lg:w-[500px] absolute top-[-100px] lg:top-[0px] right-0 lg:left-[500px]"
          />
          <Image
            src={shadeImage03}
            alt="shade image"
            className="hidden 2xl:block w-[100px] lg:w-[500px] absolute top-[-100px] lg:top-[20px] right-0 lg:left-[650px]"
          />
          <Image
            src={shadeImage02}
            alt="shade image"
            className="hidden 2xl:block w-[500px] lg:w-[600px] absolute top-[-100px] lg:top-[-150px] right-0 lg:right-[-100px]"
          />
        </div>

        {/* Banner Section */}
        <section className="w-full">
          <div className="max-w-[1500px] flex lg:grid lg:grid-cols-2 gap-4 sm:py-4 m-auto px-4 sm:px-8 2xl:px-0 flex-col-reverse lg:flex-row">
            {/* Banner Text */}
            <div className="text-left">
              <h1 className="hidden lg:block text-[#0072b1] font-bold text-lg lg:text-4xl sm:text-2xl text-center lg:text-left pt-8">
                {startText}{" "}
                <span className="text-[#00caa5]">{highlightText}</span>{" "}
                {endText}
              </h1>

              <p className="m-auto text-base text-left sm:text-lg mt-20 sm:mt-8 lg:mt-4 text-primary-black">
                {descriptionText}
              </p>

              <div className="flex flex-wrap items-center justify-start mt-6">
                <h3 className="text-lg flex items-center">
                  Click here to check our
                  <span className="text-[#00caa5] lg:px-2 px-1">
                    <Link href={link}>{clickHere}</Link>
                  </span>
                  <Image src={bannerArrow} className="ml-1" alt="arrow" />
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
                <div>
                  <AppButton title={"IMPORT RESUME"} />
                </div>
              </div>

              <p className="font-semibold mt-6">Our customers were hired by:</p>
              <div className="flex flex-wrap justify-start items-center pt-4 gap-8">
                <Image src={saudi} alt="company logo" className="w-[150px]" />
                <Image src={aerotek} alt="company logo" className="w-[100px]" />
                <Image src={geti} alt="company logo" className="w-[70px]" />
                <Image src={ladders} alt="company logo" className="w-[80px]" />
                <Image src={snagajob} alt="company logo" className="w-[80px]" />
                <Image src={alison} alt="company logo" className="w-[80px]" />
              </div>
            </div>

            {/* Image Slider */}
            <div className="text-left">
              <h1 className="lg:hidden text-[#0072b1] py-8 font-bold text-lg lg:text-4xl sm:text-2xl text-center lg:text-left">
                {startText}{" "}
                <span className="text-[#00caa5]">{highlightText}</span>{" "}
                {endText}
              </h1>

              <div className="flex justify-center xl:justify-end relative items-center top-[30px]">
                <div className="bg-[#01B2AC33] backdrop-blur-xl relative rounded-2xl h-[350px] sm:h-[410px] w-full lg:w-auto">
                  <ZoomCarousel />
                  <Image
                    src={bannerIcon}
                    alt="icon"
                    className={`absolute md:left-[120px] lg:left-[20px] top-[45px] ${styles.animatedimage}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ResumeTemplateBanner;
