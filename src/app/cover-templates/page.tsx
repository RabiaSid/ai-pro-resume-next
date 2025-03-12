import MainBanner from "@/components/Banner/mainBanner";
import React from "react";
import ResumeTemplateBanner from "@/components/Banner/ResumeTemplateBanner/ResumeTemplateBanner";
import Search from "@/components/common/search/Search";
import Templates from "@/components/Templates/Templates";
import Content from "@/components/templates-content/Content";
import { CoverTemplateData } from "./data";
import OurFaqs from "@/components/Faq/faq";
import Ads from "@/components/ads/Ads";

const CoverTemplates = () => {
  return (
    <>
      <ResumeTemplateBanner
        descriptionText={
          <>
            AI Pro Resume offers the best cover letter templates to assist you
            in getting your dream job. Try our sample cover letter templates to
            save time and effort. We have pre-written resumes and professional
            cover letter template examples that give your cover letter a
            polished and proficient look.
            <br />
            <br />
            Our AI-powered suggestions and customizable cover letter templates
            assist you in effortlessly displaying your skills and personality.
            Whether you are looking for a short cover letter template, academic
            cover letter template, or AI cover letter generator, your search
            ends at AI Pro Resume. Get the best cover letter templates and shine
            in the job market.
          </>
        }
        startText={"Mark your First "}
        highlightText={"Impression impactful with our unique "}
        endText={"Cover Letter templates."}
        clickHere={"Resume Templates"}
        link={"/resume-templates"}
      />
      <Search />
      <Templates />
      <Content section={CoverTemplateData} />
      <OurFaqs />
      <Ads />
    </>
  );
};

export default CoverTemplates;
