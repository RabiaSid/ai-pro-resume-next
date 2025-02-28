"use client";

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { BiLoaderAlt } from "react-icons/bi";
import AllborderInputGroup from "../../../components/common/inpufield/AllborderInputGroup";
import PhoneInput from "react-phone-number-input/input";
import ApplyNowBanner from "@/components/career/ApplyNowBanner";
import { ApplyNowBannerData } from "@/app/data";
import { MdOutlineSimCardDownload } from "react-icons/md";
import RenderDropdown from "@/components/common/inpufield/RenderDropdown";
import CustomPhoneNumber from "@/components/common/customSelect/CustomPhoneNumber";

const ApplyNow = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<any>(false);
  const [isProcessing, setIsProcessing] = useState<any>(false);

  const [firstName, setFirstName] = useState<any>();
  const [lastName, setLastName] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const [resume, setResume] = useState<any>();
  const [experience, setExperience] = useState<any>();
  const [degree, setDegree] = useState<any>();
  const [message, setMessage] = useState<any>();
  const [anyLink, setAnyLink] = useState<any>();
  const [major, setMajor] = useState<any>();
  const [fileErrorMessage, setFileErrorMessage] = useState<any>();
  const [showAlert, setShowAlert] = useState<any>(false);
  const [showErrorMessage, setshowErrorMessage] = useState<any>([]);
  const [captchaError, setCaptchaError] = useState<any>("");
  const [verified, setVerified] = useState<any>(false);

  // Set Datas
  const [experienceData, setexperienceData] = useState<any>([]);
  const [degreeData, setdegreeData] = useState<any>([]);

  const SubmitApplyForm = (data: any) => {
    console.log("Form Submitted:", data);
  };

  const handlePhoneNumberChange = (value: any) => {
    setPhoneNumber(value);
  };

  const handleCheckCaptcha = (val: string | null) => {
    setVerified(true);
    setCaptchaError("");
  };

  // Reset the reCAPTCHA value after a certain time
  const resetRecaptchaValue = () => {
    setVerified(false);
  };

  // Set a timeout to reset the reCAPTCHA value after 5 minutes (adjust as needed)
  const TIMEOUT_DURATION = 1 * 60 * 1000; // 5 minutes in milliseconds
  let timeoutId: any;

  const handleRecaptchaTimeout = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(resetRecaptchaValue, TIMEOUT_DURATION);
  };

  return (
    <>
      <div className="w-full h-[20%]">
        <ApplyNowBanner {...ApplyNowBannerData} />
      </div>

      <section className="w-full bg-[#fff] py-20 px-4 2xl:px-40 flex flex-wrap flex-col justify-between gap-16 align-middle">
        <form onSubmit={SubmitApplyForm} action="">
          <div className="bg-[#fff] shadow-[0_0_20px_0px_rgba(0,0,0,0.3)] rounded-lg px-4 py-10 h-auto relative sm:w-full lg:w-[70%] m-auto">
            <h1 className="text-[#00caa5] font_1 text-xl sm:text-3xl mb-10">
              Tell us about yourself.
            </h1>
            {/* Row 1 */}
            <div className="flex sm:gap-4 flex-col sm:flex-row items-center w-full">
              {/* First Name */}
              <AllborderInputGroup
                label={"FIRST NAME *"}
                isRequired={true}
                htmlFor={"first_name"}
                value={firstName}
                onChange={(val) => setFirstName(val)}
              />
              {/* last Name */}
              <AllborderInputGroup
                label={"LAST NAME *"}
                isRequired={true}
                htmlFor={"last_name"}
                value={lastName}
                onChange={(val) => setLastName(val)}
              />
            </div>
            {/* Row 2 */}
            <div className="flex sm:gap-4 flex-col sm:flex-row items-center w-full">
              {/* First Name */}
              <AllborderInputGroup
                label={"E-MAIL *"}
                isRequired={true}
                htmlFor={"email"}
                onChange={(val) => setEmail(val)}
                value={email}
                type={"email"}
              />
              {/* last Name */}
              <div className="py-4 w-full">
                <label htmlFor={"phone_number"} className="border-[#9b9b9b]">
                  PHONE
                </label>
                <PhoneInput
                  type={"tel"}
                  id="phone_number"
                  onChange={handlePhoneNumberChange}
                  value={phoneNumber}
                  className="w-full font_3 transition-all duration-300 ease-linear text-[#00caa5] text-lg p-2 border border-[#9b9b9b]  focus:border-[#00caa5] outline-none"
                />
              </div>
            </div>
            {/* Upload Resume Text */}
            <h1 className="text-[#0072b1] font_1 text-base sm:text-2xl sm:mb-10">
              Upload Resume
            </h1>
            {/* Row 2 */}
            <div className="flex sm:gap-4 flex-col sm:flex-row items-center w-full">
              {/* Resume */}
              <div className="py-4 w-full flex flex-col">
                <label htmlFor={"resume"} className="border-[#9b9b9b]">
                  FILE CHOSEN
                </label>
                <label
                  htmlFor={"resume"}
                  className="w-full font_3 transition-all duration-300 ease-linear text-[#00caa5] text-lg p-2 border border-[#9b9b9b]  focus:border-[#00caa5] outline-none flex items-center"
                >
                  <MdOutlineSimCardDownload className="font_3 text-3xl" />
                  <div className="flex-1 flex justify-center items-center">
                    {resume ? resume.name : "doc,  docx,  pdf"}
                  </div>
                </label>
                <input
                  type="file"
                  id="resume"
                  className="hidden"
                  // onChange={(e) => {
                  //   const file = e.target.files[0];
                  //   if (file && file.size <= 5 * 1024 * 1024) {
                  //     setFileErrorMessage("");
                  //     setResume(file);
                  //   } else {
                  //     setFileErrorMessage(
                  //       "The file you selected exceeds the 5 MB size limit. Please choose a smaller file."
                  //     );
                  //   }
                  // }}
                  accept=".doc,.docx,.pdf"
                />
                <div>
                  <span className="text-sm text-red-500">
                    {fileErrorMessage}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex sm:gap-4 flex-col sm:flex-row items-center w-full">
              <RenderDropdown
                options={experienceData}
                change={(e) => setExperience(e.target.value)}
                htmlFor={"experience"}
                label={"EXPERIENCE"}
                placeholder={"1-5 years"}
                value={experience}
              />

              <RenderDropdown
                options={degreeData}
                change={(e) => setDegree(e.target.value)}
                htmlFor={"degree"}
                label={"DEGREE"}
                placeholder={"Bs"}
                value={degree}
              />
            </div>

            <div className="flex sm:gap-4 flex-col sm:flex-row items-center w-full">
              <AllborderInputGroup
                label={"MAJOR"}
                isRequired={true}
                htmlFor={"major"}
                onChange={(val) => setMajor(val)}
                value={major}
              />
            </div>

            <div className="flex sm:gap-4 flex-col sm:flex-row items-center w-full">
              <div className="py-4 w-full">
                <label htmlFor={"message"} className="border-[#9b9b9b]">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full resize-none font_3 transition-all duration-300 ease-linear text-[#00caa5] text-lg p-2 border border-[#9b9b9b] focus:border-[#00caa5] outline-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            <div className="py-4">
              <input
                type="text"
                className="w-full font_3 transition-all duration-300 ease-linear text-[#00caa5] text-base border-b-[1px] border-[#9b9b9b] focus:border-[#00caa5] outline-none placeholder:text-[#0072b1]"
                placeholder="Websites / Portfolio / LinkedIn"
                value={anyLink}
                onChange={(link) => setAnyLink(link.target.value)}
              />
            </div>

            {showAlert && (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-yellow-700 p-4 rounded relative"
                role="alert"
              >
                <ul className="list-disc ml-4">
                  {showErrorMessage.map((msg: any, idx: any) => (
                    <li>
                      <strong key={idx} className="block font-bold sm:inline">
                        {msg}
                      </strong>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="absolute top-0 right-0 mt-4 mr-4"
                  onClick={() => setShowAlert(false)}
                >
                  <span className="text-yellow-700">&times;</span>
                </button>
              </div>
            )}

            <div className="py-8 flex flex-row-reverse">
              <div className="w-full flex flex-col sm:flex sm:flex-row items-center justify-center gap-10">
                <div className="flex flex-col items-start mt-4">
                  <span className="text-red-500 text-sm">{captchaError}</span>
                  <ReCAPTCHA
                    sitekey={"6LdRjxslAAAAAIP7BsNtsYgCvPM5RfNXjHGIzveJ"}
                    onChange={(val) => {
                      handleCheckCaptcha(val);
                      handleRecaptchaTimeout();
                    }}
                  />
                </div>
                <button
                  style={{ display: isProcessing ? "none" : "flex" }}
                  id="contact_button"
                  type="submit"
                  className="text-white bg-[#0072b1] hover:bg-[#00caa5] transition-all duration-150 ease-in font_1 text-lg px-8 py-2 rounded-full"
                  disabled={isButtonDisabled}
                >
                  SUBMIT
                </button>
                <button
                  style={{ display: isProcessing ? "flex" : "none" }}
                  className="bg-[#0072b1] text-white hover:bg-[#00caa5] transition-all duration-150 ease-in font_1 text-lg px-8 py-2 rounded-full flex"
                  type="button"
                  disabled
                >
                  <BiLoaderAlt size={28} className="mr-2 animate-spin" />{" "}
                  Processing...
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ApplyNow;
