"use client";
import React, { useState } from 'react'
import { PiPencilBold } from 'react-icons/pi'
import profile from 'media/assets/reusme_placeholder_image.webp'
import Image from 'next/image'
import { FaPencil } from 'react-icons/fa6';
import Link from 'next/link';
import { HiClipboardCheck, HiOutlineMail } from 'react-icons/hi';
import UserReferral from '@/components/userReferral/UserReferral';
import { FiPhone } from 'react-icons/fi';


export default function Account() {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const sections = [
    {
      title: "Summary",
      content:
        "I am a passionate frontend developer who enjoys building user-friendly and responsive web applications. With a keen eye for detail and a strong understanding of UI/UX principles, I create seamless digital experiences.",
    },
    {
      title: "Technical Skills",
      items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Node.js"],
    },
    {
      title: "Soft Skills",
      items: ["Communication", "Problem Solving", "Teamwork", "Adaptability"],
    },
    { title: "Email", content: "siraajhassni@gmail.com" },
    { title: "Password", content: "*******" },
  ];

  const profileCategories = [
    { label: "Experience", limit: "3" },
    { label: "Education", limit: "4" },
    { label: "Certificate", limit: "1" },
    { label: "Awards", limit: "7" },
    { label: "Language", limit: "3" },
    { label: "Reference", limit: "4" },
  ];

  return (
    <section className="relative container md:px-4 mx-auto">
      <div className='lg:grid lg:grid-cols-[25%,48%,25%] xl:grid-cols-[25%,55%,20%] my-4'>
        <div className=' '>
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
            <div className='divide-y-[0.5px]'>
              {sections.map((section: any, index: any) => (
                <div
                  key={index}
                  className="py-4 mx-4 font-Lexend"
                >
                  <div className="flex justify-between items-center text-[#A7A7A7] mb-2">
                    {section.title}:
                    <FaPencil className="text-[#A7A7A7] hover:text-[#1877F2] cursor-pointer" />
                  </div>
                  <div
                  >
                    {section.items ? (
                      <div className="text-[#343434] flex justify-start gap-2 flex-wrap text-sm">
                        {section.items.map((item: any, idx: any) => (
                          <div key={idx} className="relative group">
                            <p className="bg-[#F5F6FB] border-[#DFE0E2] px-4 py-1 border rounded-full max-w-[180px] truncate">
                              {item}
                            </p>
                            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap shadow-md">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[#343434] text-sm break-all">
                        {section.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-2 xl:px-16  divide-y-[0.5px]">
          {/* <div className="flex flex-col gap-4 sm:gap-4"> */}
          <div className="py-4 ">
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
          {profileCategories.map((category, index) => (
            <div key={index} className="py-4 font-Lexend">
              <div className="flex justify-between items-center text-primarySlate font-bold">
                <div className='flex gap-2 items-center'>
                  <span className='min-w-[90px]'>{category.label}</span>  <span className='bg-primaryBlue/25 w-8 h-8 flex justify-center items-center rounded-full text-sm'>{category.limit}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="font-Lexend text-primaryBlue hover:text-black text-sm cursor-pointer font-normal">
                    Add New
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 ">
          {/* {userDetails ? ( */}
          <>
            <p className="font-Lexend text-4xl font-bold text-[#1877F2]">
              {70}%
            </p>
            <p className="font-Lexend text-md  text-[#343434]  mt-4">
              Complete Your Profile
            </p>
            <p className="w-full bg-[#DFE0E2] mt-2 rounded-full">
              <p
                style={{ width: 70 + "%" }}
                className=" bg-[#1877F2] h-1 rounded-full"
              ></p>
            </p>

            <p className="font-Lexend text-md text-center text-[#A7A7A7]  mt-10">
              <div className="mb-2">Download Your Resume</div>

              <button
                // onClick={downloadCV}
                className="bg-[#1877F2] hover:bg-[#343434] font-Lexend text-sm text-center text-white rounded-full px-4 py-1"
              >
                Download CV
              </button>
            </p>

            <p className="font-Lexend text-md text-center text-[#A7A7A7]  mt-10">
              <div className="mb-2">Parse Your Resume</div>
              <Link
                href={"/import-resume"}
                className="bg-[#1877F2] hover:bg-[#343434] font-Lexend text-sm text-center text-white rounded-full px-4 py-1"
              >
                Import CV
              </Link>
            </p>
          </>
          {/* ) : (
                <Skeleton width={"300px"} height={"20px"} />
              )} */}

          <p className="font-Lexend text-md  text-[#A7A7A7]  mt-8">
            Referral Link
          </p>
          <div className="text-[#343434] text-sm font-Lexend  mt-2">
            <div>
              <span className="text-muted flex flex-wrap justify-between items-center">
                <div
                  className=" font-Lexend text-md  text-[#343434] flex items-center "
                  // ref={divRef}
                  style={{ overflowWrap: "anywhere" }}
                >
                  <span className='max-w-[270px] truncate'>
                    https://aiproresume.com/register/cjhzxgcjccgjgcjhcjh
                  </span>

                  {/* {userDetails?.referral_link ? (
                    `https://aiproresume.com/register/${userDetails?.referral_link}`
                  ) : (
                    <Skeleton width={"300px"} height={"20px"} />
                  )} */}
                  <button
                    className="mr_heading btn_copy"
                  // onClick={handleCopyClick}
                  >
                    <HiClipboardCheck className="shareiconmy" size={20} />
                  </button>
                </div>
                <div className="flex justify-center items-center w-full gap-4 mt-4">
                  {/* {userDetails?.referral_link ? ( */}
                  <>
                    {/* <FacebookShareButton
                        url={
                          "https://aiproresume.com/register/" +
                          userDetails?.referral_link
                        }
                        quote={"Dummy text!"}
                        title={shareTitle}
                        hashtag="#AIProResume"
                        className="shareiconmy"
                      >
                        <FacebookIcon size={50} round />
                      </FacebookShareButton>
                      <WhatsappShareButton
                        url={
                          "https://aiproresume.com/register/" +
                          userDetails?.referral_link
                        }
                        title={shareTitle}
                        image={shareImageUrl}
                        quote={"Dummy text!"}
                        hashtag="#AIProResume"
                        className="shareiconmy"
                      >
                        <WhatsappIcon size={50} round />
                      </WhatsappShareButton>
                      <LinkedinShareButton
                        url={
                          "https://aiproresume.com/register/" +
                          userDetails?.referral_link
                        }
                        title={shareTitle}
                        quote={"Dummy text!"}
                        hashtag="#AIProResume"
                        className="shareiconmy"
                      >
                        <LinkedinIcon size={50} round />
                      </LinkedinShareButton> */}
                  </>
                  {/* ) : ( */}
                  <>
                    {/* <Skeleton width={30} height={30} />{" "}
                       <Skeleton circle width={32} height={32} />{" "}
                       <Skeleton circle width={32} height={32} />
                       <Skeleton circle width={32} height={32} /> */}
                  </>
                  {/* )} */}
                </div>
              </span>
            </div >
          </div >

          <UserReferral />

          <div className="mt-10 flex flex-col gap-2">
            <div>
              <h1 className="font-Lexend text-md  text-[#A7A7A7]">
                Subscription
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className="sm:grid sm:grid-cols-[30%,70%] items-center   w-full">
                <div>
                  <h1 className="font-Lexend text-sm  text-[#343434]">
                    Package
                  </h1>
                </div>
                <div className="pl-4">
                  <span className="font-Lexend text-sm font-bold text-[#343434]">
                    {/* {userDetails?.package.name || (
                      <Skeleton width={"150px"} height={"20px"} />
                    )} */}
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
                    {/* {userDetails?.start_date
                      ? formatDate(userDetails?.start_date)
                      : formatDate(userDetails?.created_at) || (
                        <Skeleton width={"150px"} height={"20px"} />
                      )} */}
                  </span>
                </div>
              </div>
            </div >
          </div >
          <div className="flex justify-start items-start w-full mt-4">
            <input
              type="checkbox"
              // checked={isAllowShare === 1}
              className="text-sm mr-2 mt-[6px]  border-solid border-[#0072b1] text-[#0072b1]"
            // onChange={() => {
            //   setIsAllowShare(isAllowShare === 0 ? 1 : 0);
            //   setIsUpdating(false);
            //   handleUserShareChange(isAllowShare === 0 ? 1 : 0);
            // }}
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
                  <FiPhone className="mr-4" />{" "}
                  +1 (438) 883-8289
                  {/* {UserSettings?.contact_number} */}
                </span>
                <Link
                  href=""
                  // href={`mailto:${UserSettings?.website_email}`}
                  className="font-Lexend text-sm font-bold text-[#343434] hover:text-[#1877F2] flex items-center"
                >
                  <HiOutlineMail className="mr-4" />{" "}
                  marketing.cognitiveit@gmail.com
                  {/* {UserSettings?.website_email} */}
                </Link>
              </div>
            </div>
          </div>
        </div >
      </div >
    </section >
  )
}