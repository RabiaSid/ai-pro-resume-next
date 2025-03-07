"use client";

import React, { useEffect, useState } from "react";
import { ServiceBannerData } from "./data";
import Ads from "@/components/ads/Ads";
import OurFaqs from "@/components/Faq/faq";
import PosterBanner from "@/components/services/PosterBanner";
import arrow_design_7 from "media/assets/arrow_design_7.webp";
import about_img_1 from "media/assets/about_img_1.webp";
import MainBanner from "@/components/Banner/mainBanner";

export default function Page() {
  const [services, setServices] = useState<any[]>([]);

  const dummyServices = [
    {
      id: 1,
      image: about_img_1,
      name: "Professional Resume Writing",
      description: "<p>Get a professional resume that stands out.</p>",
      other_heading: "Additional Details",
      other_description:
        "<p>Includes cover letter and LinkedIn profile optimization.</p>",
      discount: 10,
      price: 100,
      discounted_price: 90,
      status: true,
    },
    {
      id: 2,
      image: about_img_1,
      name: "LinkedIn Profile Optimization",
      description:
        "<p>Enhance your LinkedIn profile for better job opportunities.</p>",
      other_heading: "More Information",
      other_description:
        "<p>We will rewrite and optimize your profile summary and experiences.</p>",
      discount: 15,
      price: 80,
      discounted_price: 68,
      status: true,
    },
    {
      id: 3,
      image: about_img_1,
      name: "Cover Letter Writing",
      description:
        "<p>Get a customized cover letter that highlights your strengths.</p>",
      other_heading: "Service Details",
      other_description:
        "<p>Includes multiple revisions and industry-specific tailoring.</p>",
      discount: 5,
      price: 50,
      discounted_price: 47.5,
      status: true,
    },
  ];

  useEffect(() => {
    setServices(dummyServices);
  }, []);

  return (
    <>
      <MainBanner {...ServiceBannerData} />
      <Ads />

      <section className="w-full py-5 px-0 sm:px-10 2xl:px-10 flex flex-wrap flex-col justify-between align-middle">
        {/* Image Row 1 */}
        {services.map((service, idx) => {
          if (!service.status) return;
          return (
            <PosterBanner
              id={service.id}
              arrowImage={arrow_design_7}
              posterImage={service.image}
              cardHeading={service.name}
              cardDescription={service.description}
              otherHeading={service.other_heading}
              otherDescription={service.other_description}
              discount={service.discount}
              buttonText={"CONTACT A RESUME WRITING"}
              buttonLink={"#"}
              price={service.price}
              discounted_price={service.discounted_price}
              dir={idx % 2 === 0 ? "ltr" : "rtl"}
              cart={{
                services: [],
              }}
              addToCart={function (type: string, item: any): void {
                throw new Error("Function not implemented.");
              }}
              removeFromCart={function (type: string, id: number): void {
                throw new Error("Function not implemented.");
              }}
              userIntrestedInService={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          );
        })}
      </section>

      <div className="px-4 container lg:px-10 my-10">
        <h3 className="text-[#0072b1] font-Lexend font-bold text-xl md:text-2xl px-0 mb-3">
          Steps To Get Our Professional Resume and Cover Letter Writing Service
        </h3>
        <p className="font-Lexend text-base mb-2">
          If you want to use our professional resume writing services and
          professional cover letter writing services, then follow the steps
          below:
        </p>
        <ul className="font-Lexend text-base">
          <li className="mb-1 list-disc list-inside">
            Go to the home page of AI Pro Resume and log in to your account.
          </li>
          <li className="mb-1 list-disc list-inside">
            Now, head to the service page present in the header of the website.
          </li>
          <li className="mb-1 list-disc list-inside">
            You will notice the Resume and Cover Letter Writing Service on that
            page.
          </li>
          <li className="mb-1 list-disc list-inside">
            Choose the service you want and click on add to cart.
          </li>
          <li className="mb-1 list-disc list-inside">
            The checkout button appears next to it. Click on it.
          </li>
          <li className="mb-1 list-disc list-inside">
            On the checkout page, you must upload your resume or cover letter.
          </li>
          <li className="mb-1 list-disc list-inside">
            You will find the upload option beside the delete option.
          </li>
          <li className="mb-1 list-disc list-inside">
            Once you are done with the file upload.
          </li>
          <li className="mb-1 list-disc list-inside">
            Mark the checkbox and proceed to checkout.
          </li>
          <li className="mb-1 list-disc list-inside">
            Once your resume or cover letter is ready, you will receive it via
            email within 2 days.
          </li>
          <li className="mb-1 list-disc list-inside">
            You can also download your completed resume or cover letter directly
            from the dashboard.
          </li>
          <li className="mb-1 list-disc list-inside">
            Go to the dashboard and click on My Services to access your file.
          </li>
        </ul>
        <h3 className="text-[#0072b1] font-Lexend font-bold text-xl md:text-2xl px-0 mb-3">
          Revision Process:
        </h3>
        <p className="font-Lexend text-base mb-2">
          We offer two free revisions for each premium service. If you need
          updates to your document after delivery, follow these steps:
        </p>
        <ul className="font-Lexend text-base">
          <li className="mb-1 list-disc list-inside">
            Log in to your account and navigate to the dashboard.
          </li>
          <li className="mb-1 list-disc list-inside">
            You will see four headings: All Services, In Progress, Delivered,
            and Revisions.
          </li>
          <li className="mb-1 list-disc list-inside">
            Click on Delivered and locate the Revision icon (a round arrow) next
            to your completed document.
          </li>
          <li className="mb-1 list-disc list-inside">
            Click the icon to open a small text box.
          </li>
          <li className="mb-1 list-disc list-inside">
            Enter the changes or updates you want to make and click Okay.
          </li>
          <li className="mb-1 list-disc list-inside">
            Once the revised document is ready, it will appear under the
            Revisions section. You can download it directly from there.
          </li>
        </ul>
        <p className="font-Lexend text-base mb-2">
          <strong>Tip: </strong> Each service includes two revision tokens. Once
          you have used both, you must repurchase the service or package for
          additional changes.
        </p>
        <h3 className="text-[#0072b1] font-Lexend font-bold text-xl md:text-2xl px-0 mb-3">
          Steps to Get a Professional Resume or Cover Letter Review Services
        </h3>
        <ul className="font-Lexend text-base">
          <li className="mb-1 list-disc list-inside">
            Log in to your account and navigate to My Services from the header.
          </li>
          <li className="mb-1 list-disc list-inside">
            Select the professional resume review or cover letter review service
            you want.
          </li>
          <li className="mb-1 list-disc list-inside">
            Click on add to cart, and the checkout option will appear.
          </li>
          <li className="mb-1 list-disc list-inside">
            Select the checkout button, and you will head to the checkout page.
          </li>
          <li className="mb-1 list-disc list-inside">
            Upload the resume or cover letter you want our experts to review.
          </li>
          <li className="mb-1 list-disc list-inside">
            Complete the payment process to confirm your order. You can purchase
            through coins and by buying the most popular or premium package.
          </li>
          <li className="mb-1 list-disc list-inside">
            Within 2 days, you will receive an email with detailed suggestions
            and improvements for your resume or cover letter.
          </li>
          <li className="mb-1 list-disc list-inside">
            You can also access the reviewed document from the dashboard under
            my services, where you will find a download option.
          </li>
        </ul>
      </div>
      <OurFaqs />
    </>
  );
}
