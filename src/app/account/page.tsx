"use client";
import React, { useEffect, useRef, useState } from 'react'
import { PiPencilBold } from 'react-icons/pi'
import profile from 'media/assets/reusme_placeholder_image.webp'
import Image from 'next/image'
import { FaPencil } from 'react-icons/fa6';
import Link from 'next/link';
import { HiClipboardCheck, HiOutlineMail } from 'react-icons/hi';
import UserReferral from '@/components/userReferral/UserReferral';
import { FiPhone } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import SunEditor from 'suneditor-react';
import AppButton from '@/components/common/button/pages';
import { BiDownArrow } from 'react-icons/bi';
import { IoIosArrowDown, IoMdMove } from 'react-icons/io';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';


export default function Account() {
  const [modelbox, setModelbox] = useState<boolean>(false);
  const modalRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<any>(null);

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
    { label: "Experience", limit: "3", items: [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }] },
    { label: "Education", limit: "4", items: [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }] },
    { label: "Certificate", limit: "1", items: [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }] },
    { label: "Awards", limit: "7", items: [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }] },
    { label: "Language", limit: "3", items: [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }] },
    { label: "Reference", limit: "4", items: [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }] },
  ];

  useEffect(() => {
    const handleClickOutside = (event: any | never) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setModelbox(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeModal = () => setModelbox(false);

  return (
    <>
      <section className="relative container md:px-4 mx-auto">
        <div className='lg:grid lg:grid-cols-[25%,48%,25%] xl:grid-cols-[25%,55%,20%] my-4'>
          <div className=''>
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
              <div className="font-Lexend text-sm text-center text-secondaryGray  ">
                Customer ID :{" "}
                <span><b className="text-primaryBlue">112233</b></span>

              </div>

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
                      <FaPencil className="text-[#A7A7A7] hover:text-[#1877F2] cursor-pointer" onClick={() => setModelbox(true)} />
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
              <div key={index} className="py-4 font-Lexend ">
                <div
                  className="flex justify-between items-center text-primarySlate font-bold cursor-pointer"
                  onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                >
                  <div className="flex gap-2 items-center">
                    <span className="min-w-[90px]">{category.label}</span>
                    <span className="bg-primaryBlue/25 w-8 h-8 flex justify-center items-center rounded-full text-sm">{category.limit}</span>
                  </div>
                  <IoIosArrowDown className={selectedIndex === index ? "rotate-180" : ""} />
                </div>
                {selectedIndex === index && (
                  <div className="w-full  divide-y-[0.5px] ">
                    {category.items.map((item) => (
                      <div key={item.id} className="grid grid-cols-2 gap-4 w-full hover:bg-[#e9f5ff] py-3">
                        <div className="flex items-center justify-start gap-2 font-bold text-[#343434]">
                          <p className="flex items-center justify-center w-10 h-10 rounded-full border border-[#343434] text-md">{item.id}</p>
                          <div className="flex flex-col">
                            <p className="text-primary-blue text-sm">{item.name}</p>
                            <p className="text-[#A7A7A7] text-sm">Description</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-end gap-4">
                          <FaPencil size={15} className="text-[#343434] hover:text-[#1877f2] cursor-pointer" />
                          <FaRegTrashAlt size={17} className="text-[#343434] hover:text-red-600 cursor-pointer" />
                          <IoMdMove size={19} className="text-[#343434] hover:text-[#1877f2]" />
                          <MdOutlineKeyboardArrowUp size={22} className="text-[#343434] hover:text-[#1877f2] cursor-pointer" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 ">
            <>
              <p className="font-Lexend text-4xl font-bold text-[#1877F2]">
                {70}%
              </p>
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


                    <button
                      className="mr_heading btn_copy"
                    >
                      <HiClipboardCheck className="shareiconmy" size={20} />
                    </button>
                  </div>
                  <div className="flex justify-center items-center w-full gap-4 mt-4">
                    {/* facebook gogle whatsapp */}
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
              </div >
            </div >
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
                    <FiPhone className="mr-4" />{" "}
                    +1 (438) 883-8289
                  </span>
                  <Link
                    href=""
                    className="font-Lexend text-sm font-bold text-[#343434] hover:text-[#1877F2] flex items-center"
                  >
                    <HiOutlineMail className="mr-4" />{" "}
                    marketing.cognitiveit@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div >
        </div >
      </section>
      {modelbox && (
        <div
          className="bg-[rgba(0,0,0,0.1)] flex justify-center items-center fixed top-0 left-0 w-full h-full z-[9999]"
        >
          <div className="bg-white w-[95%] lg:w-[70%] 2xl:w-[50%] font-Lexend flex flex-col rounded-2xl border shadow-lg" ref={modalRef}>
            <div className="flex w-full px-8 py-5 justify-between border border-b">
              Summary <CgClose onClick={() => setModelbox(false)} />
            </div>
            <div className="flex w-full px-8 py-5 justify-between border border-b ">
              <div className="w-full">
                <div className="relative">
                  {/* <SunEditor setOptions={{
                    height: "500px",
                    placeholder: "Enter the job description here...",
                    buttonList: [
                      ["bold", "underline", "italic", "strike"],
                      ["list"],
                    ],
                    maxCharCount: 1000,
                    resizeEnable: false,
                  }}
                    defaultValue={sections[0].content}
                  /> */}
                  <div
                    className="absolute top-2 right-2 z-20 flex items-center gap-2 bg-primaryGreen px-2 py-1.5 rounded-md !m-0 cursor-pointer"
                  // onClick={() => setAiModal(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M27.95 5.9C27.6715 5.9 27.4044 5.78938 27.2075 5.59246C27.0106 5.39555 26.9 5.12848 26.9 4.85C26.9 4.57152 27.0106 4.30445 27.2075 4.10754C27.4044 3.91062 27.6715 3.8 27.95 3.8C28.2285 3.8 28.4955 3.91062 28.6925 4.10754C28.8894 4.30445 29 4.57152 29 4.85C29 5.12848 28.8894 5.39555 28.6925 5.59246C28.4955 5.78938 28.2285 5.9 27.95 5.9ZM27.95 5.9V11.15C27.95 12.1272 27.95 12.6158 27.8296 13.012C27.6961 13.4528 27.456 13.8538 27.1304 14.1796C26.8049 14.5053 26.4041 14.7458 25.9634 14.8796C25.5658 15 25.0772 15 24.1 15M2.05 24.1C2.32848 24.1 2.59555 24.2106 2.79246 24.4075C2.98938 24.6044 3.1 24.8715 3.1 25.15C3.1 25.4285 2.98938 25.6955 2.79246 25.8925C2.59555 26.0894 2.32848 26.2 2.05 26.2C1.77152 26.2 1.50445 26.0894 1.30754 25.8925C1.11062 25.6955 1 25.4285 1 25.15C1 24.8715 1.11062 24.6044 1.30754 24.4075C1.50445 24.2106 1.77152 24.1 2.05 24.1ZM2.05 24.1V18.85C2.05 17.8728 2.05 17.3842 2.1704 16.988C2.30389 16.5472 2.54403 16.1462 2.86956 15.8204C3.19508 15.4947 3.59594 15.2542 4.0366 15.1204C4.4342 15 4.9228 15 5.9 15M5.9 2.05C5.9 2.32848 5.78938 2.59555 5.59246 2.79246C5.39555 2.98938 5.12848 3.1 4.85 3.1C4.57152 3.1 4.30445 2.98938 4.10754 2.79246C3.91062 2.59555 3.8 2.32848 3.8 2.05C3.8 1.77152 3.91062 1.50445 4.10754 1.30754C4.30445 1.11062 4.57152 1 4.85 1C5.12848 1 5.39555 1.11062 5.59246 1.30754C5.78938 1.50445 5.9 1.77152 5.9 2.05ZM5.9 2.05H11.15C12.1272 2.05 12.6158 2.05 13.012 2.1704C13.4528 2.30389 13.8538 2.54403 14.1796 2.86956C14.5053 3.19508 14.7458 3.59594 14.8796 4.0366C15 4.4342 15 4.9228 15 5.9M24.1 27.95C24.1 27.6715 24.2106 27.4044 24.4075 27.2075C24.6044 27.0106 24.8715 26.9 25.15 26.9C25.4285 26.9 25.6955 27.0106 25.8925 27.2075C26.0894 27.4044 26.2 27.6715 26.2 27.95C26.2 28.2285 26.0894 28.4955 25.8925 28.6925C25.6955 28.8894 25.4285 29 25.15 29C24.8715 29 24.6044 28.8894 24.4075 28.6925C24.2106 28.4955 24.1 28.2285 24.1 27.95ZM24.1 27.95H18.85C17.8728 27.95 17.3842 27.95 16.988 27.8296C16.5472 27.6961 16.1462 27.456 15.8204 27.1304C15.4947 26.8049 15.2542 26.4041 15.1204 25.9634C15 25.5658 15 25.0772 15 24.1"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.96777 14.9316C5.96777 10.642 5.96777 8.4972 7.30057 7.1644C8.63337 5.8316 10.7782 5.8316 15.0678 5.8316C19.3574 5.8316 21.5022 5.8316 22.835 7.1644C24.1678 8.4972 24.1678 10.642 24.1678 14.9316C24.1678 19.2212 24.1678 21.366 22.835 22.6988C21.5022 24.0316 19.3574 24.0316 15.0678 24.0316C10.7782 24.0316 8.63337 24.0316 7.30057 22.6988C5.96777 21.366 5.96777 19.2212 5.96777 14.9316Z"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.6978 18.5002L13.6538 12.1708C13.5829 11.9711 13.4508 11.7988 13.2764 11.6784C13.102 11.558 12.8941 11.4957 12.6822 11.5002C12.4705 11.496 12.2629 11.5585 12.0888 11.6788C11.9146 11.7992 11.7828 11.9713 11.712 12.1708L9.66797 18.5002M19.1978 11.5002V18.5002M10.4198 16.4002H14.9446"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className='w-full flex justify-end my-2'>
                  <AppButton title='Save' width='w-[150px]' border='rounded-sm' padding='py-1 px-6' />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}