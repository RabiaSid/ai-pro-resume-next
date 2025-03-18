import Link from "next/link";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const ProfileSubscription = () => {
  return (
    <>
      <div className="mt-10 flex flex-col gap-2">
        <div>
          <h1 className="font-Lexend text-md  text-[#A7A7A7]">Subscription</h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="sm:grid sm:grid-cols-[30%,70%] items-center   w-full">
            <div>
              <h1 className="font-Lexend text-sm  text-[#343434]">Package</h1>
            </div>
            <div className="pl-4">
              <span className="font-Lexend text-sm font-bold text-[#343434]">
                Premium
              </span>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-[30%,70%] items-center   w-full">
            <div>
              <h1 className="font-Lexend text-sm  text-[#343434]">
                Registration
              </h1>
            </div>
            <div className="pl-4">
              <span className="font-Lexend text-sm font-bold  text-[#343434]">
                January 23, 2025
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-start w-full mt-4">
        <input
          type="checkbox"
          className="text-sm mr-2 mt-[6px]  border-solid border-[#0072b1] text-[#0072b1]"
        />
        <p className="ml-1 font-Lexend text-sm text-[#343434]">
          Do you want to share your resume with companies for global job
          opportunities?
        </p>
      </div>
      <div className="mt-10">
        <div className="pb-6">
          <div className="flex flex-col gap-2">
            <h1 className="font-Lexend text-md  text-[#A7A7A7]">
              NEED HELP OR WANT TO CHANGE YOUR SUBSCRIPTION ?
            </h1>
            <span className="font-Lexend text-sm font-bold text-[#343434] flex items-center">
              <FiPhone className="mr-4" /> +1 (438) 883-8289
            </span>
            <Link
              href=""
              className="font-Lexend text-sm font-bold text-[#343434] hover:text-[#1877F2] flex items-center"
            >
              <HiOutlineMail className="mr-4" /> marketing.cognitiveit@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSubscription;
