"use client";
import React, { useState } from 'react';
import { IoIosArrowDown, IoMdMove } from 'react-icons/io';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { FaPencil } from 'react-icons/fa6';

type propsType = {
    profileCategory?: any
}

export default function ProfileSection(props: propsType) {
    const { profileCategory } = props
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);



    return (
        <div className="py-4 font-Lexend">
            <div
                className="flex justify-between items-center text-primarySlate font-bold cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex gap-2 items-center">
                    <span className="min-w-[90px]">{profileCategory.name}</span>
                    <span className="bg-primaryBlue/25 w-8 h-8 flex justify-center items-center rounded-full text-sm">
                        2
                    </span>

                </div>
                <IoIosArrowDown className={isExpanded ? "rotate-180" : ""} />
            </div>
            {isExpanded && (
                <div className="w-full divide-y-[0.5px] py-3">
                    <div className="w-full hover:bg-[#e9f5ff] py-3">
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="flex items-center justify-start gap-2 font-bold text-[#343434]">
                                <p className="flex items-center justify-center w-10 h-10 rounded-full border border-[#343434] text-md">
                                    {profileCategory.id}
                                </p>
                                <div className="flex flex-col">
                                    <p className="text-primary-blue text-sm">{profileCategory.name}</p>
                                    <p className="text-[#A7A7A7] text-sm">Description</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-4" onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}>
                                <FaPencil size={15} className="text-[#343434] hover:text-[#1877f2] cursor-pointer" />
                                <FaRegTrashAlt size={17} className="text-[#343434] hover:text-red-600 cursor-pointer" />
                                <IoMdMove size={19} className="text-[#343434] hover:text-[#1877f2]" />
                                <MdOutlineKeyboardArrowUp
                                    size={22}
                                    className={`text-[#343434] hover:text-[#1877f2] cursor-pointer ${isDetailsExpanded ? "rotate-180" : ""}`}
                                />
                            </div>
                        </div>
                        {isDetailsExpanded && (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
                                <div className="flex flex-col gap-2 pb-2">
                                    <p className="text-sm text-[#777]">Job Position</p>
                                    <p className="text-xs text-[#A7A7A7]">{profileCategory.job_position}</p>
                                </div>
                                <div className="flex flex-col gap-2 pb-2">
                                    <p className="text-sm text-[#777]">Company Name</p>
                                    <p className="text-xs text-[#A7A7A7]">{profileCategory.company_name}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
