"use client";
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown, IoMdMove } from 'react-icons/io';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { FaPencil } from 'react-icons/fa6';

export default function ProfileSection() {

    const [selectedIndex, setSelectedIndex] = useState<any>(null);


    const profileCategories = [
        {
            label: "Experience", limit: "3", items: [{
                id: 1,
                name: "Item 1",
                uuid: "304386",
                user_id: 654,
                job_position: "Aerospace Engineer",
                company_name: "abc ltd",
                country_id: 14,
                state: "abc",
                city: "abc",
                type: null,
                start_date: "2004-01-01",
                end_date: null,
                currently_working: 1,
                company_description: null,
                job_description: "hjkh hjkh hjkh hjkh hjkh hjkh hjkh",
                sort: 1,
                status: 1,
            }, {
                id: 1,
                name: "Item 2",
                uuid: "304386",
                user_id: 654,
                job_position: "Aerospace Engineer",
                company_name: "abc ltd",
                country_id: 14,
                state: "abc",
                city: "abc",
                type: null,
                start_date: "2004-01-01",
                end_date: null,
                currently_working: 1,
                company_description: null,
                job_description: "hjkh hjkh hjkh hjkh hjkh hjkh hjkh",
                sort: 1,
                status: 1,
            }]
        },
        {
            label: "Education", limit: "4", items: [{
                id: 1,
                name: "Item 1",
                uuid: "304386",
                user_id: 654,
                job_position: "Aerospace Engineer",
                company_name: "abc ltd",
                country_id: 14,
                state: "abc",
                city: "abc",
                type: null,
                start_date: "2004-01-01",
                end_date: null,
                currently_working: 1,
                company_description: null,
                job_description: "hjkh hjkh hjkh hjkh hjkh hjkh hjkh",
                sort: 1,
                status: 1,
            }, {
                id: 1,
                name: "Item 2",
                uuid: "304386",
                user_id: 654,
                job_position: "Aerospace Engineer",
                company_name: "abc ltd",
                country_id: 14,
                state: "abc",
                city: "abc",
                type: null,
                start_date: "2004-01-01",
                end_date: null,
                currently_working: 1,
                company_description: null,
                job_description: "hjkh hjkh hjkh hjkh hjkh hjkh hjkh",
                sort: 1,
                status: 1,
            }]
        },
        { label: "Certificate", limit: "1", },
        { label: "Awards", limit: "7", },
        { label: "Language", limit: "3", },
        { label: "Reference", limit: "4", },
    ];

    return (
        <>
            {profileCategories.map((profileSection: any, index: any) => (
                <div key={index} className="py-2 font-Lexend ">
                    <div
                        className="flex justify-between items-center text-primarySlate font-bold cursor-pointer py-2"
                        onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                    >
                        <div className="flex gap-2 items-center">
                            <span className="min-w-[90px]">{profileSection.label}</span>
                            <span className="bg-primaryBlue/25 w-8 h-8 flex justify-center items-center rounded-full text-sm">{profileSection.limit}</span>
                        </div>
                        <IoIosArrowDown className={selectedIndex === index ? "rotate-180" : ""} />
                    </div>
                    {selectedIndex === index && (
                        <div className="w-full  divide-y-[0.5px]">
                            {profileSection?.items?.length > 0 ? (
                                profileSection.items.map((category: any, index: any) => (
                                    <>
                                        <div key={index} className=" w-full hover:bg-[#e9f5ff] py-3">
                                            <div className='grid grid-cols-2 gap-4'>
                                                <div className="flex items-center justify-start gap-2 font-bold text-[#343434]">
                                                    <p className="flex items-center justify-center w-10 h-10 rounded-full border border-[#343434] text-md">
                                                        {category.id}
                                                    </p>
                                                    <div className="flex flex-col">
                                                        <p className="text-primary-blue text-sm">{category.name}</p>
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
                                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4 ">
                                                <div className="flex flex-col gap-2 pb-2 ">
                                                    <p className="text-sm text-[#777]">
                                                        Job Position

                                                    </p>
                                                    <p className="text-xs text-[#A7A7A7]">
                                                        {category?.job_position}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col gap-2 pb-2 ">
                                                    <p className="text-sm text-[#777]">
                                                        Company Name

                                                    </p>
                                                    <p className="text-xs text-[#A7A7A7]">
                                                        {category?.company_name}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                ))
                            ) : (
                                <p className="text-gray-500">No items available</p>
                            )}

                        </div>
                    )}
                </div>
            ))}
        </>
    )
}
