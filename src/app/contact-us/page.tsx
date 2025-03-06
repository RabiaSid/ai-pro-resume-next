"use client";

import ContactPageBanner from "@/components/contactus/ContactPageBanner";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  BiLoaderAlt,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoPinterest,
  BiMailSend,
  BiSolidMap,
  BiSolidPhone,
} from "react-icons/bi";
import { ContactUsBannerData } from "../data";
import Ads from "@/components/ads/Ads";
import { useForm } from "react-hook-form";
import ContactUsFormInputField from "@/components/common/inpufield/ContactUsFormInputField";
import MainBanner from "@/components/Banner/mainBanner";

const ContactUs = () => {
  const [captchaError, setCaptchaError] = useState<any>();
  const [verified, setVerified] = useState<any>(false);

  const handleCheckCaptcha = (val: string | null) => {
    setVerified(true);
    setCaptchaError("");
  };

  // Reset the reCAPTCHA value after a certain time
  const resetRecaptchaValue = () => {
    setVerified(null);
  };

  // Set a timeout to reset the reCAPTCHA value after 5 minutes (adjust as needed)
  const TIMEOUT_DURATION = 1 * 60 * 1000; // 5 minutes in milliseconds
  let timeoutId: any;

  const handleRecaptchaTimeout = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(resetRecaptchaValue, TIMEOUT_DURATION);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const contact_submit = (data: any) => {
    console.log("data", data);
    // if (!verified) {
    //   setCaptchaError("Please verify that you are a human!");
    //   return;
    // }
  };

  return (
    <div>
      <div className="w-full h-[20%]">
        <MainBanner {...ContactUsBannerData} />
      </div>

      <Ads />

      <section className="w-full px-2 md:px-4 lg:px-20 2xl:px-40 pb-20 lg:pb-10">
        <div className="w-full  xl:h-[900px] relative bottom-0 rounded-2xl md:mt-[-50px] lg:mt-0 sm:px-4 lg:px-10 flex flex-wrap justify-between items-center align-middle ">
          <div className="w-full xl:w-[60%]">
            <div className="md:bg-gradient-to-t from-[#0072b1] to-[#00caa5] rounded-t-2xl rounded-b-2xl lg:rounded-2xl sm:px-4 h-[600px] relative bottom-[-20px] xl:bottom-0">
              <form onSubmit={handleSubmit(contact_submit)}>
                <div className="bg-white shadow-2xl md:shadow-xl rounded-2xl md:px-4 lg:px-16 py-10 lg:py-20 relative lg:bottom-[100px] border">
                  <h1 className="text-gray-700 font-bold font-Lexend text-xl md:text-2xl lg:text-3xl mb-6 lg:mb-10 px-2 md:px-0">
                    Send us a message
                  </h1>

                  {/* Full Name */}
                  <ContactUsFormInputField
                    control={control}
                    name="fullName"
                    placeholder="Full Name"
                    type="text"
                    rules={{ required: "Full Name is required" }}
                  />

                  {/* Phone Number */}
                  <ContactUsFormInputField
                    control={control}
                    name="phone"
                    placeholder="Enter your phone number"
                    type="phone"
                    rules={{ required: "Phone number is required" }}
                  />

                  {/* Email */}
                  <ContactUsFormInputField
                    control={control}
                    name="email"
                    placeholder="Email"
                    type="email"
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email format",
                      },
                    }}
                  />

                  {/* Message (Textarea) */}
                  <ContactUsFormInputField
                    control={control}
                    name="message"
                    placeholder="How can we help you?"
                    type="textarea"
                    rules={{ required: "Message is required" }}
                  />

                  {/* ReCAPTCHA & Submit */}
                  <div className="py-8 flex flex-row-reverse">
                    <div className="w-full flex flex-col sm:flex sm:flex-row items-center justify-center gap-10">
                      {/* Captcha */}
                      <div className="flex flex-col items-start mt-4">
                        <span className="text-red-500 text-sm font-Lexend">
                          {captchaError}
                        </span>
                        <ReCAPTCHA
                          sitekey={"6LdRjxslAAAAAIP7BsNtsYgCvPM5RfNXjHGIzveJ"}
                          onChange={(val) => {
                            handleCheckCaptcha(val);
                            handleRecaptchaTimeout();
                          }}
                        />
                      </div>
                      <button className="bg-[#0072b1] text-white hover:bg-[#00caa5] transition-all duration-150 ease-in font-Lexend text-lg px-8 py-2 rounded-full mt-5">
                        SUBMIT
                      </button>
                      <button
                        id="processing_loader"
                        style={{ display: "none" }}
                        className=" bg-[#0072b1] text-white hover:bg-[#00caa5] transition-all duration-150 ease-in font-Lexend text-lg px-8 py-2 rounded-full flex font-Lexend"
                        type="button"
                      >
                        <BiLoaderAlt size={28} className="mr-2 animate-spin" />{" "}
                        Processing...
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full xl:w-[40%] lg:w-[50%] pt-20  py-2">
            <div className="flex justify-center items-center flex-wrap">
              <div className="px-2 sm:px-10 md:pt-30 pt-32 sm:pt-16 lg:py-10">
                <h1 className="text-teal-500 font-bold text-xl ml-0 lg:text-3xl mb-5 lg:mb-10 font-Lexend p-2">
                  Contact Information
                </h1>
                <div className="py-2 px-2 flex items-center font-Lexend flex-wrap">
                  <BiSolidPhone className="text-teal-500 text-3xl mr-2 lg:text-4xl" />
                  <a
                    // href={`tel:${our_settings.contact_number}`}
                    className="text-gray-900 font-medium ml-3 lg:ml-2 text-md lg:text-xl flex items-center"
                  >
                    {/* {our_settings.contact_number} */}
                    +1 (438) 883-8289
                  </a>
                </div>
                <div className="py-2 px-2 flex items-center font-Lexend">
                  <BiMailSend className="text-teal-500 text-3xl mr-2 lg:text-4xl" />
                  <a
                    // href={`mailto:${our_settings.website_email}`}
                    className="text-gray-900 font-medium ml-3 lg:ml-2 text-md lg:text-xl flex items-center"
                  >
                    {/* {our_settings.website_email} */}
                    marketing.cognitiveit@gmail.com
                  </a>
                </div>
                <div className="py-2 px-2 flex items-center font-Lexend">
                  <BiSolidMap className="text-teal-500 text-4xl mr-2 lg:text-5xl" />
                  <span className="text-gray-900 font-medium ml-3 lg:ml-2 text-md lg:text-xl flex items-center">
                    {/* {our_settings.location_address} */}
                    989 Derry Rd E # 403, Mississauga, ON L5T 2J8, Canada
                  </span>
                </div>
                <h1 className="text-gray-700 font-medium font-Lexend ml-0 lg:ml-0 text-xl my-10">
                  Follow Us
                </h1>
                <div className="flex item-center justify-start text-5xl lg:text-6xl my-8">
                  <a
                    target="_blank"
                    // href={our_settings.facebook_account_link}
                    className="text-[#0072b1] hover:text-[#00caa5]"
                  >
                    <BiLogoFacebook className="rounded-full border-2 p-2 mr-4 hover:bg-[#0072b1] border-[#0072b1]" />
                  </a>
                  <a
                    target="_blank"
                    // href={our_settings.instagram_account_link}
                    className="text-[#0072b1] hover:text-[#00caa5]"
                  >
                    <BiLogoInstagram className="rounded-full border-2 p-2 mr-4 hover:bg-[#0072b1] border-[#0072b1]" />
                  </a>
                  <a
                    target="_blank"
                    // href={our_settings.linkedin_account_link}
                    className="text-[#0072b1] hover:text-[#00caa5]"
                  >
                    <BiLogoLinkedin className="rounded-full border-2 p-2 mr-4 hover:bg-[#0072b1] border-[#0072b1]" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.pinterest.ca/aiproresume/"
                    className="text-[#0072b1] hover:text-[#00caa5]"
                  >
                    <BiLogoPinterest className="rounded-full border-2 p-2 mr-4 hover:bg-[#0072b1] border-[#0072b1]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
