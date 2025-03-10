import MainBanner from "@/components/Banner/mainBanner";
import React from "react";
import ResumeTemplateBanner from "@/components/Banner/ResumeTemplateBanner/ResumeTemplateBanner";
import Search from "@/components/resume-templates/Search";

const ResumeTemplates = () => {
  return (
    <>
      <ResumeTemplateBanner
        descriptionText={
          <>
            Curriculum templates are the key that makes your resume stand out.
            AI Pro Resumes offers the best professional resume templates that
            are ATS-friendly and customizable. To create a professional resume,
            select from your preferred best resume templates, insert all the
            details, and download in PDF format.
            <br />
            <br />
            We have templates for all. Whether you are looking for a basic
            resume template, a simple modern resume template, a resume portfolio
            template, or an outdoor professional guiding resume template, we
            have got you covered. Let’s now catch the recruiter's attention with
            a clean simple resume template!
          </>
        }
        startText={"Ready to Stand Out?"}
        highlightText={"Pick the Perfect"}
        endText={"Resume Template "}
        clickHere={"Cover letter Templates"}
        link={"/cover_letter_templates"}
      />
      <Search />
    </>
  );
};

export default ResumeTemplates;
