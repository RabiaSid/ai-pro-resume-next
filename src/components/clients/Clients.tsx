"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useState } from "react";
import client1 from "media/assets/about_icon_1.webp";
import { H2 } from "@/components/typography";

type propsType = {
  title: string | React.ReactNode;
};

const Clients = (props: propsType) => {
  const { title } = props;
  const [our_clients, set_our_clients] = useState<any>([]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const dummyClients = [
    { id: 1, image: client1 },
    { id: 2, image: client1 },
    { id: 3, image: client1 },
    { id: 4, image: client1 },
    { id: 5, image: client1 },
  ];

  return (
    <>
      <section className="relative container mx-auto py-4 md:8 ">
        <div className="w-full bg-white ">
          <div className="text-md sm:text-lg text-center font-bold text-primary flex sm:gap-2 justify-center items-center">
            <H2 className="text-primaryBlue">{title}</H2>
          </div>

          <Slider {...settings}>
            {dummyClients.map((client) => (
              <div key={client.id} className="p-2 md:p-6 lg:p-10">
                <div className="bg-white shadow-[0px_0px_50px_rgba(100,100,100,0.2)] border-2 rounded-md p-4 m-auto w-[150px] md:w-[220px] lg:w-[240px] flex justify-center items-center">
                  <Image
                    src={client.image}
                    alt="Client Logo"
                    width={160}
                    height={160}
                    className="w-[120px] md:w-[140px] lg:w-[160px]"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Clients;
