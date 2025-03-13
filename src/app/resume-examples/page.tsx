import MainBanner from "@/components/Banner/mainBanner";
import React from "react";
import ResumeTemplateBanner from "@/components/Banner/ResumeTemplateBanner/ResumeTemplateBanner";
import Search from "@/components/common/search/Search";
import OurFaqs from "@/components/Faq/faq";
import Ads from "@/components/ads/Ads";
import Categories from "@/components/ExampleCategories/Categories";

const ResumeExamples = () => {
  return (
    <>
      <ResumeTemplateBanner
        descriptionText={
          <>
            AI Pro Resume is your ultimate destination for creating professional
            resumes and cover letters. To save you time and effort, we have
            introduced creative resume examples. These great resume examples are
            pre-written. You just have to click on them and add minor details to
            make your resume more personalized. We offer professional resume
            templates that assist you in landing the interview. Whether you are
            starting your career or a seasoned professional, AI Pro Resume
            ensures your resume shines in the crowd.
          </>
        }
        startText={"Find the Perfect"}
        highlightText={"Resume Example"}
        endText={"for Your Field"}
        clickHere={"Cover letter Example"}
        link={"/cover_letter_examples"}
      />
      <Ads />
      <Search />
      <Categories />
      <OurFaqs />
    </>
  );
};

export default ResumeExamples;
