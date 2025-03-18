import Link from "next/link";
import React from "react";

const ProfilePercentage = () => {
  return (
    <>
      <p className="font-Lexend text-4xl font-bold text-[#1877F2]">{70}%</p>
      <p className="font-Lexend text-md  text-[#343434]  mt-4">
        Complete Your Profile
      </p>
      <div className="w-full bg-[#DFE0E2] mt-2 rounded-full">
        <p
          style={{ width: 70 + "%" }}
          className=" bg-[#1877F2] h-1 rounded-full"
        ></p>
      </div>

      <div className="font-Lexend text-md text-center text-[#A7A7A7]  mt-10">
        <div className="mb-2">Download Your Resume</div>

        <button
          // onClick={downloadCV}
          className="bg-[#1877F2] hover:bg-[#343434] font-Lexend text-sm text-center text-white rounded-full px-4 py-1"
        >
          Download CV
        </button>
      </div>

      <div className="font-Lexend text-md text-center text-[#A7A7A7]  mt-10">
        <div className="mb-2">Parse Your Resume</div>
        <Link
          href={"/import-resume"}
          className="bg-[#1877F2] hover:bg-[#343434] font-Lexend text-sm text-center text-white rounded-full px-4 py-1"
        >
          Import CV
        </Link>
      </div>
    </>
  );
};

export default ProfilePercentage;
