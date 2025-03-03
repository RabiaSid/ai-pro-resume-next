"use client";
import React from 'react'
import { PiPencilBold } from 'react-icons/pi'
import profile from 'media/assets/reusme_placeholder_image.webp'
import Image from 'next/image'
import { FaPencil } from 'react-icons/fa6';
import { Controller } from 'react-hook-form';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

const skills = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "TypeScript",
  "Tailwind CSS",
  "GraphQL",
  "Docker",
  "AWS",
  "Jest & Testing Library"
];

export default function Account() {

  const handleUserImageChange = (e: any) => {
    // const file = e.target.files[0];

    // if (file) {
    //   setImageToCrop(URL.createObjectURL(file)); // Show image in the crop modal
    //   setCropModalVisible(true);
    // }
  };

  const userDetails = [
    { label: "Name", value: "Siri Hassni" },
    { label: "Job Position", value: "Your Job Title" },
    { label: "Years of Experience", value: "5 Years" },
    { label: "Mobile Number", value: "+03152300393" },
    { label: "Contact Number", value: "+03152300393" },
    { label: "Website / Linkedin URL", value: "https://siraj.hassni.me" },
    { label: "Country", value: "Pakistan" },
    { label: "State", value: "Sindh" },
    { label: "City", value: "Karachi" },
    { label: "Street Address", value: "DHA Phase 7 ext" },
    { label: "Postal Code", value: "92100" }
  ];
  return (
    <section className="relative container md:px-4 mx-auto">
      <div className='lg:grid lg:grid-cols-[25%,48%,25%] xl:grid-cols-[25%,50%,25%] my-4'>
        <div className=' border'>
          <div>
            {/* if userimageUpdated */}
            <div className="relative w-36 h-36 m-auto rounded-full">
              <Image
                src={profile}
                alt="Profile"
                className="w-36 h-36 rounded-full m-auto"
              />
              <div
                className="absolute bottom-0.5 right-1.5 cursor-pointer"
              // onClick={() =>
              //   document.getElementById("user_profile_image").click()
              // }
              >
                <PiPencilBold className="bg-white rounded-full text-3xl p-1 hover:bg-primaryBlue hover:text-white" />
              </div>
            </div>
            {/* else */}
            {/* <div className="relative w-40 h-40 m-auto rounded-full">
                    <img
                      src={updatedUserImage}
                      alt="Profile"
                      className="w-40 h-40 rounded-full m-auto"
                    />
                    <div
                      className="absolute bottom-0.5 right-1.5 cursor-pointer"
                      onClick={() =>
                        document.getElementById("user_profile_image").click()
                      }
                    >
                      <PiPencilBold className="bg-white rounded-full text-3xl p-1 hover:bg-primaryBlue hover:text-white" />
                    </div>
                  </div> */}
            <input
              type="file"
              onChange={handleUserImageChange}
              className="hidden"
              accept=".png,.jpg,.jpeg"
              id="user_profile_image"
            />

            <h2 className="text-primaryBlue text-2xl font-bold font-Lexend text-center mt-8">
              Hamza
            </h2>
            <p className="font-Lexend text-sm text-center text-secondaryGray  ">
              Customer ID :{" "}
              <span><b className="text-primaryBlue">112233</b></span>

            </p>

            {/* {cropModalVisible && (
                  <CropImageModal
                    image={imageToCrop}
                    onCrop={handleCrop}
                    onClose={() => setCropModalVisible(false)}
                  />
                )} */}

            <p
              className="text-[#343434] text-lg font-Lexend font-bold text-center mt-4"
            >
              Your Job Title

            </p>
            {/* summary */}
            <div className="m-4 font-Lexend ">
              <div
                className=''
              // onSubmit={handleSubmit(submitSummary)}
              >
                <div className="flex justify-between items-center text-[#A7A7A7] mb-2">
                  Summary:
                  {/* {edit_mode ? (
                    <RxCrossCircled
                      size={24}
                      className="text-[red] hover:text-[#1877F2] cursor-pointer"
                      onClick={() => set_edit_mode(!edit_mode)}
                    />
                  ) : ( */}
                  <FaPencil
                    className="text-[#A7A7A7] hover:text-[#1877F2] cursor-pointer"
                  // onClick={() => set_edit_mode(!edit_mode)}
                  />

                  {/* )} */}
                </div>
                <p
                  className="text-[#343434] text-sm break-all"
                // dangerouslySetInnerHTML={{
                //   __html: data?.description || "No Record Found",
                // }}
                >
                  I am a passionate frontend developer who enjoys building user-friendly and responsive web applications. With a keen eye for detail and a strong understanding of UI/UX principles, I create seamless digital experiences. I am always eager to learn new technologies and collaborate with teams to deliver high-quality projects.
                </p>
              </div>
            </div>
            {/* technical */}
            <div className="m-4 font-Lexend ">
              <div
                className=''
              >
                <div className="flex justify-between items-center text-[#A7A7A7] mb-2">
                  Technical Skills:

                  <FaPencil
                    className="text-[#A7A7A7] hover:text-[#1877F2] cursor-pointer"
                  />

                </div>
                <div className="text-[#343434] flex justify-start gap-2 flex-wrap text-sm">
                  {skills.map((skill, index) => (
                    <div key={index} className="relative group">
                      <p className="bg-[#F5F6FB] border-[#DFE0E2] px-4 py-1 border rounded-full max-w-[180px] truncate">
                        {skill}
                      </p>
                      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap shadow-md">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* soft skill */}
            <div className="m-4 font-Lexend ">
              <div
                className=''
              >
                <div className="flex justify-between items-center text-[#A7A7A7] mb-2">
                  Soft Skills:

                  <FaPencil
                    className="text-[#A7A7A7] hover:text-[#1877F2] cursor-pointer"
                  />

                </div>
                <div className="text-[#343434] flex justify-start gap-2 flex-wrap text-sm">
                  {skills.map((skill, index) => (
                    <div key={index} className="relative group">
                      <p className="bg-[#F5F6FB] border-[#DFE0E2] px-4 py-1 border rounded-full max-w-[180px] truncate">
                        {skill}
                      </p>
                      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap shadow-md">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* email */}
            <div className="m-4 font-Lexend ">
              <div
                className=''
              >
                <div className=" text-[#A7A7A7] mb-2">
                  Email:

                </div>
                <div className="text-[#343434] gap-2 flex-wrap text-sm flex justify-between items-center">
                  siraajhassni@gmail.com
                  <FaPencil
                    className="text-[#A7A7A7] hover:text-[#1877F2] cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* email */}
            <div className="m-4 font-Lexend ">
              <div
                className=''
              >
                <div className=" text-[#A7A7A7] mb-2">
                  Password:

                </div>
                <div className="text-[#343434] gap-2 flex-wrap text-sm flex justify-between items-center">
                  *******
                  <FaPencil
                    className="text-[#A7A7A7] hover:text-[#1877F2] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 xl:px-16 border">
          {/* <div className="flex flex-col gap-4 sm:gap-4"> */}
          <div className="mt-4 ">
            <div className='font-Lexend text-[#0072b1] text-lg font-bold mb-2'>
              Basic Details:
            </div>
            <div className="flex flex-wrap items-center justify-between">
              {userDetails.map((detail, index) => (
                <div key={index} className="mb-4 w-[30%]">
                  <label className="font-Lexend text-[#A7A7A7]">
                    {detail.label}
                  </label>
                  <p className="text-[#343434] text-sm">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 font-Lexend">
            <div className="flex justify-between items-center text-[#343434] font-bold mb-2">
              Experience
              <div className="flex items-center gap-2">
                <div
                  // onClick={() => {
                  //   set_add_mode(true);
                  //   set_edit_mode(true);
                  //   handleDataFormNew();
                  // }}
                  className="font-Lexend text-[#A7A7A7] hover:text-[#1877F2] text-sm cursor-pointer font-normal"
                >
                  Add New
                </div>
                <MdOutlineKeyboardArrowUp
                  size={24}
                  className="text-[#A7A7A7] hover:text-[#1877F2] cursor-pointer"
                // onClick={() => set_edit_mode(!edit_mode)}
                />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className=' border'></div>
      </div>
    </section>
  )
}