"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
// import axios from "axios";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";

const Reviews = () => {
  const [our_reviews, set_our_reviews] = useState<any[]>([
    {
      id: 1,
      userName: "Hamza",
      postedDate: "11-12-13",
      review: "This is an amazing product! Highly recommended.",
      stars: 4,
    },
    {
      id: 2,
      userName: "Ali",
      postedDate: "12-01-14",
      review: "Great experience, will definitely buy again!",
      stars: 5,
    },
    {
      id: 3,
      userName: "Sara",
      postedDate: "15-03-15",
      review: "Good quality but delivery was slow.",
      stars: 3,
    },
    {
      id: 2,
      userName: "Ali",
      postedDate: "12-01-14",
      review: "Great experience, will definitely buy again!",
      stars: 5,
    },
    {
      id: 3,
      userName: "Sara",
      postedDate: "15-03-15",
      review: "Good quality but delivery was slow.",
      stars: 3,
    },
  ]);

  const reviewsSliderRef: any = useRef(null);

  const maxStars = 5;

  //   const formatDate = (dateString: any) => {
  //     const date = new Date(dateString);
  //     const options = { day: "numeric", month: "short", year: "numeric" };
  //     return date.toLocaleDateString("en-GB", options);
  //   };

  //   const fetchData = async () => {
  //     try {
  //       const reviewsResponse = await axios.get(global.baseurl + "/our-reviews");
  //       set_our_reviews(reviewsResponse.data.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  return (
    <>
      <section className="bg-[#eeeef1] pt-6 my-5 py-10">
        <div className="container m-auto flex flex-col relative">
          <div className="flex flex-col gap-4 lg:grid justify-center text-center">
            <div className="items-center">
              <div className="px-4  py-2 relative">
                <h3 className="text-[#0072b1] drop-shadow-lg font-lexend font-bold text-2xl lg:text-4xl w-[100%] lg:w-[80%] 2xl:w-[100%]">
                  Recommended by Experts &{" "}
                  <span className="text-[#00caa5]">Community</span>
                </h3>
                <p className=" text-[black] font-lexend font-semibold text-lg pt-4">
                  Community-reviewed, professional-trusted resume builder for
                  career success and confidence{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-opacity-25 flex flex-col w-full h-fit  items-center px-4 mb-10 mt-4 relative">
            <div className="w-full our__reviews">
              {our_reviews && (
                <Slider
                  ref={reviewsSliderRef}
                  {...{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    arrows: false,
                  }}
                  responsive={[
                    {
                      breakpoint: 1300,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                      },
                    },
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      },
                    },
                  ]}
                >
                  {our_reviews.map((review) => (
                    <div key={review.id} className="p-10">
                      <div className="bg-white shadow-[0px_0px_20px_rgba(220,220,230,1)] border-2 rounded-md p-4 m-auto w-full flex flex-col justify-between gap-4 h-[250px] sm:h-[200px]">
                        {/* Stars and Date */}
                        <div className="flex justify-between items-center">
                          <div className="flex text-sm">
                            {[...Array(maxStars)].map((_, idx) => (
                              <div key={idx}>
                                {idx < review.stars ? (
                                  <MdOutlineStar
                                    size={20}
                                    className="text-[#f99e00]"
                                  />
                                ) : (
                                  <IoIosStarOutline
                                    size={20}
                                    className="text-[#f99e00]"
                                  />
                                )}
                              </div>
                            ))}
                          </div>
                          <span className="text-sm text-slate-700 font-semibold">
                            {review.postedDate}
                          </span>
                        </div>

                        {/* User Name */}
                        <div className="font-Lexend flex items-center gap-2">
                          <span className="font-semibold text-sm drop-shadow-lg">
                            {review.userName}
                          </span>
                        </div>

                        {/* Review Text */}
                        <div className="flex-1">
                          <p className="text-sm text-slate-700">
                            {review.review.length > 299
                              ? review.review.substring(0, 300) + "..."
                              : review.review}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              )}
            </div>
            <div className="absolute -bottom-8 flex justify-between h-8 px-4 gap-12 w-full items-center">
              <div
                className="z-10 hidden sm:block"
                onClick={() => reviewsSliderRef.current.slickPrev()}
              >
                <FaLongArrowAltLeft className="text-primary-green text-2xl cursor-pointer transition-all hover:text-3xl" />
              </div>

              <div
                className="z-10 hidden sm:block"
                onClick={() => reviewsSliderRef.current.slickNext()}
              >
                <FaLongArrowAltRight className="text-primary-green text-2xl cursor-pointer transition-all hover:text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
