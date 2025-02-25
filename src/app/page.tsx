import React from "react";
import MainBanner from "@/components/Banner/mainBanner";
import {
  BannerData,
  ClientData,
  FeaturesData,
  ResumeTemplateData,
  ReviewData,
} from "./data";
import OurFaqs from "@/components/Faq/faq";
import ResumeTemplateSlider from "@/components/TemplateSlider";
import Clients from "@/components/clients/Clients";
import Reviews from "@/components/reviews/Reviews";
import Features from "@/components/features/Features";

export default function Page() {
  return (
    <>
      <div className="container md:px-4 mx-auto">
        <MainBanner {...BannerData} />
        <ResumeTemplateSlider {...ResumeTemplateData} />
        <Features {...FeaturesData} />
        <OurFaqs />
        <Clients {...ClientData} />
        <Reviews {...ReviewData} />
      </div>
    </>
  );
}
