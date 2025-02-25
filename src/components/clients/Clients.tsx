"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useState } from "react";
import client1 from "media/assets/about_icon_1.webp";

const Clients = () => {
  const [our_clients, set_our_clients] = useState<any>([]);

  //   useEffect(() => {
  //     axios
  //       .get(global.baseurl + "/our-clients")
  //       .then((response) => {
  //         set_our_clients(response.data.data.clients);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
      <section className="w-full bg-white py-6 px-4 sm:px-20 rounded-tr-[150px]">
        <div className="text-md sm:text-lg text-center font-bold text-primary flex sm:gap-2 justify-center items-center">
          <h3 className="text-[#0072b1] drop-shadow-lg font-lexend font-bold text-xl md:text-3xl leading-[1.5] text-center sm:text-left">
            OUR <span className="text-[#00caa5]">CLIENTS</span>
          </h3>
        </div>

        <Slider {...settings}>
          {dummyClients.map((client) => (
            <div key={client.id} className="p-10">
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
      </section>
    </>
  );
};

export default Clients;
