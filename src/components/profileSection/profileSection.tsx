"use client";
import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoMdMove } from 'react-icons/io';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { FaPencil } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

type propsType = {
    sectionName?: any,
    sectionType?: any,
}

export default function ProfileSection(props: propsType) {
    const { sectionName, sectionType } = props
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
    const { token } = useSelector((state: RootState) => state.auth);
    const [profileSection, setProfileSection] = useState<any[]>([])

    console.log(
        sectionType,
        "secType =======================>")

    useEffect(() => {
        if (token && sectionType && sectionType.length > 0) {
            setProfileSection(sectionType)
        }
    }, [token, sectionType])

    console.log(
        profileSection,
        "profileSection =======================>")

    const getSectionMenu = (section: any) => {
        const menu = [
            // experience
            section?.job_position && { label: "Job Position", value: section?.job_position || "--" },
            section?.company_name && { label: "Company Name", value: section?.company_name || "--" },
            section?.country_id && { label: "Country", value: section?.country_id || "--" },
            section?.state && { label: "State", value: section?.state || "--" },
            section?.city && { label: "City", value: section?.city || "--" },
            section?.job_description && { label: "Job Description", value: section?.job_description || "--" },
            section?.school && { label: "School", value: section?.school || "--" },
            // : section?.end_date && { label: "End Date", value: section?.end_date || "--" },
            // institute
            section?.institution && { label: "Institution", value: section?.institution || "--" },
            section?.degree && { label: "Degree", value: section?.degree || "--" },
            section?.field && { label: "Field of Study", value: section?.field || "--" },
            section?.grade_type && { label: "Grade Type", value: section?.grade_type || "--" },
            section?.grade && { label: "Grade", value: section?.grade || "--" },
            section?.title && { label: "Certificate Title", value: section?.title || "--" },
            section?.institute && { label: "Authorization Body", value: section?.institute || "--" },
            section?.description && { label: "Certificate Details", value: section?.description || "--" },
            section?.contact && { label: "Contact", value: section?.contact || "--" },
            section?.phone_number && { label: "Phone Number", value: section?.phone_number || "--" },
            section?.mobile_number && { label: "Mobile Number", value: section?.mobile_number || "--" },
            section?.referral_link && { label: "Referral Link", value: section?.referral_link || "--" },
            section?.referral_by && { label: "Referred By", value: section?.referral_by || "--" },
            section?.start_date && { label: "Start Date", value: section?.start_date || "--" },
            section?.currently_working
            // section?.start_date && { label: "Start Date", value: section?.start_date || "--" },
            && { label: "End Date", value: "Currently Working" },
            section?.currently_studying
            && { label: "End Date", value: "Currently Studying" },
            // : section?.end_date && { label: "End Date", value: section?.end_date || "--" },
            // certificate
        ];

        return menu.filter(Boolean);
    };
    return (
        <div className="py-4 font-Lexend">
            <div
                className="flex justify-between items-center text-primarySlate font-bold cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex gap-2 items-center">
                    <span className="min-w-[90px] capitalize">{sectionName}</span>
                    <span className="bg-primaryBlue/25 w-8 h-8 flex justify-center items-center rounded-full text-sm">
                        {profileSection.length}
                    </span>

                </div>
                <IoIosArrowDown className={isExpanded ? "rotate-180" : ""} />
            </div>

            {isExpanded && (
                profileSection?.map((section: any, index: any) =>
                    <div className="w-full divide-y-[0.5px] py-3 " key={index}>
                        <div className="w-full hover:bg-[#e9f5ff] py-3">
                            <div className='grid grid-cols-2 gap-4'>
                                <div className="flex items-center justify-start gap-2 font-bold text-[#343434]">
                                    <p className="flex items-center justify-center w-10 h-10 rounded-full border border-[#343434] text-md">
                                        {index + 1}
                                    </p>
                                    <div className="flex flex-col">
                                        <p className="text-primary-blue text-sm">{section?.job_position || section?.title || section?.institution}</p>
                                        <p className="text-[#A7A7A7] text-sm">{section?.company_name || section?.institute || section?.degree}</p>
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
                                    {getSectionMenu(section)?.map((item, i) => (
                                        <div key={i} className="flex flex-col gap-2 pb-2">
                                            <p className="text-sm text-[#777]">{item?.label}</p>
                                            <p className="text-xs text-[#A7A7A7]">{item?.value}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
