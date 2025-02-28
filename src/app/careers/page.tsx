import React from "react";
import { BannerData, CareersBannerData } from "../data";
import Banner from "@/components/career/CareerBanner";
import CareerBanner from "@/components/career/CareerBanner";
import Ads from "@/components/ads/Ads";
import JobsSection from "@/components/career/JobsSection";

const Career = () => {
  return (
    <>
      <CareerBanner {...CareersBannerData} />
      <Ads />
      <JobsSection />
    </>
  );
};

export default Career;
