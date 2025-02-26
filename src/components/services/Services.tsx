"use client";

import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import AppButton from "../common/button/pages";
import ServiceCard from "../common/card/ServiceCard";
import serviceimg from "media/assets/about_img_2.webp";

const Services = () => {
  const [random_services, set_random_services] = useState([
    {
      id: 1,
      name: "Professional Cover Letter Writing",
      image: serviceimg,
      description:
        "<ul><li>Build modern websites</li><li>Responsive design</li><li>SEO friendly</li></ul>",
    },
    {
      id: 2,
      name: "Professional Cover Letter Review",
      image: serviceimg,
      description:
        "<ul><li>Logo design</li><li>Brand identity</li><li>Marketing materials</li></ul>",
    },
    {
      id: 3,
      name: "Professional Resume Review",
      image: serviceimg,
      description:
        "<ul><li>Social media marketing</li><li>Email campaigns</li><li>PPC advertising</li></ul>",
    },
    {
      id: 4,
      name: "Professional Resume Writing",
      image: serviceimg,
      description:
        "<ul><li>Cross-platform apps</li><li>Native iOS & Android</li><li>UI/UX optimized</li></ul>",
    },
  ]);

  //   const fetchData = async () => {
  //     try {
  //       const reviewsResponse = await axios.get(global.baseurl + "/our-reviews");

  //       set_our_reviews(reviewsResponse.data.data);

  //       const servicesResponse = await axios.get(
  //         global.baseurl + "/random-services"
  //       );
  //       set_random_services(servicesResponse.data.data.services);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  return (
    <>
      <section className={"relative"}>
        {/* Svg Wave */}
        <div className="absolute bottom-0 w-full hidden sm:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#01b2ac"
              fillOpacity={1}
              d="M0,0L40,32C80,64,160,128,240,165.3C320,203,400,213,480,181.3C560,149,640,75,720,48C800,21,880,43,960,74.7C1040,107,1120,149,1200,181.3C1280,213,1360,235,1400,245.3L1440,256L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            />
          </svg>
        </div>
        <div className="container m-auto overflow-hidden py-8 px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
            {random_services.map((service) => (
              <ScrollAnimation
                animateIn="bounceInUp"
                delay={0}
                animateOnce={true}
                className="bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.9)] cursor-pointer backdrop-blur-[10px] rounded-lg"
                key={service.id}
              >
                <ServiceCard
                  img={service.image}
                  alt={service.name}
                  title={service.name}
                  points={service.description}
                />
              </ScrollAnimation>
            ))}
          </div>
          <div className="flex justify-center items-center w-full pt-8">
            <AppButton
              className="group border-2 border-transparent bg-primaryBlue hover:bg-white hover:text-primaryBlue hover:border-primaryBlue inline-flex w-fit py-2 px-6 xl:py-3 xl:px-12 rounded-full justify-center items-center font-semibold sm:text-lg tracking-normal uppercase z-40"
              title="Let's Explore Services"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
