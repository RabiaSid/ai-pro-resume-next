"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosEye } from "react-icons/io";
import template_1 from "media/assets/resume_template_images/template_1.webp";
import template_2 from "media/assets/resume_template_images/template_2.webp";
import template_3 from "media/assets/resume_template_images/template_3.webp";
import template_4 from "media/assets/resume_template_images/template_4.webp";
import template_5 from "media/assets/resume_template_images/template_5.webp";
import template_6 from "media/assets/resume_template_images/template_6.webp";
import template_7 from "media/assets/resume_template_images/template_7.webp";
import template_8 from "media/assets/resume_template_images/template_8.webp";
import template_9 from "media/assets/resume_template_images/template_9.webp";
import template_10 from "media/assets/resume_template_images/template_10.webp";
import template_11 from "media/assets/resume_template_images/template_11.webp";
import template_12 from "media/assets/resume_template_images/template_12.webp";

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState<any>("");
  const [templates, setTemplates] = useState<any[]>([
    {
      id: 1,
      name: "Sleek Simplicity",
      image: template_1,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 2,
      name: "Sleek Simplicity",
      image: template_2,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 3,
      name: "Sleek Simplicity",
      image: template_3,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 4,
      name: "Sleek Simplicity",
      image: template_4,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 5,
      name: "Sleek Simplicity",
      image: template_5,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 6,
      name: "Sleek Simplicity",
      image: template_6,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 7,
      name: "Sleek Simplicity",
      image: template_7,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 8,
      name: "Sleek Simplicity",
      image: template_8,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 9,
      name: "Sleek Simplicity",
      image: template_9,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 10,
      name: "Sleek Simplicity",
      image: template_10,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 11,
      name: "Sleek Simplicity",
      image: template_11,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 12,
      name: "Sleek Simplicity",
      image: template_12,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
  ]);

  return (
    <>
      <div
        className={
          templates.length === 0
            ? ""
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        }
      >
        {templates?.length > 0 ? (
          templates.map((template, index) => {
            return (
              <div className="" key={index}>
                <div className="dd_btn4 flex justify-center items-center px-4 text-slate-600 cursor-pointer flex-wrap mt-10">
                  <div className="cl_hover2 w-max lg:m-4">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-[#01B2AC]/80 to-[#00caa5]/80 px-2 h-6 right-4 top-4 rounded-sm gap-2 flex items-center justify-center absolute z-50">
                        <IoIosEye color="#fff" size={22} />
                        <span className="text-sm text-white font-medium">
                          100
                        </span>
                      </div>
                      {template.is_paid === 1 && (
                        <div
                          className="flex bg-gradient-to-r from-[#01B2AC] to-[#0072B1] w-[150px] h-8 absolute left-[-35px] top-[24px] text-white -rotate-45 justify-center items-center z-50"
                          style={{
                            clipPath:
                              "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                          }}
                        >
                          <span>Premium</span>
                        </div>
                      )}
                      <div className="relative border_box">
                        <div className="absolute border border-solid border-[#01B2AC] rounded-xl w-full h-full z-10"></div>
                        <Image
                          src={template.image}
                          alt="Template Image"
                          width={300}
                          height={300}
                          className="shadow-[0px_0px_3px_3px_rgba(0,0,0,0.3)] rounded-xl w-full z-20 relative"
                        />
                      </div>
                      <p className="cl_inner2 duration-300 transition-all Montserrat text-md text-black text-center mt-4">
                        {template.name}
                      </p>
                      {template.is_paid === 1 ? (
                        <p className="cl_inner2 duration-300 transition-all Montserrat text-md text-primary-blue font-bold text-center mt-2">
                          $ {template.price}
                        </p>
                      ) : (
                        <p className="cl_inner2 duration-300 transition-all Montserrat text-md text-primary-blue font-bold text-center mt-2">
                          FREE
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="my-2 text-xl font-bold px-6">Loading....</h1>
        )}
      </div>
    </>
  );
};

export default Templates;
