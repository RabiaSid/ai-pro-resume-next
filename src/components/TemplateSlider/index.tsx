'use client';

import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import brand from 'media/assets/brand.webp';
import premium from 'media/assets/premium.webp';
// import axios from 'axios';
// import { useAuth } from '@/context/AuthContext';
// import global from '@/config/global';
// import ApiService from '@/services/ApiService';
import AppButton from '../common/button/pages';

interface Template {
    id: number;
    image: string;
    is_paid: number;
}

interface User {
    token?: string;
    purchase_templates?: { id: number }[];
}



export default function ResumeTemplateSlider() {
    // const { user } = useAuth();
    // const [templates, setTemplates] = useState<Template[]>([]);
    // const [userDetails, setUserDetails] = useState<User | null>(null);
    // const [userPurchasedTemplates, setUserPurchasedTemplates] = useState<Template[]>([]);
    // const [resumeTemplatesListing, setResumeTemplatesListing] = useState<Template[]>([]);
    // const sliderRef = useRef<Slider | null>(null);

    // useEffect(() => {
    //     axios.get(`${global.baseurl}/show-resume-templates`)
    //         .then((response) => setTemplates(response.data.data))
    //         .catch((error) => console.error(error));
    // }, []);

    // useEffect(() => {
    //     if (user?.token) {
    //         axios.get(`${global.baseurl}/user_details`, {
    //             headers: { Authorization: `Bearer ${user.token}` },
    //         })
    //             .then((response) => setUserDetails(response.data))
    //             .catch((error) => console.error(error));
    //     }
    // }, [user?.token]);

    // useEffect(() => {
    //     ApiService.showResumeTemplatesListing(user?.token)
    //         .then((res) => setResumeTemplatesListing(res?.data?.data || []))
    //         .catch((error) => console.error(error));
    // }, [user?.token]);

    // useEffect(() => {
    //     if (userDetails) {
    //         const purchasedTemplateIds = userDetails.purchase_templates?.map(p => p.id) || [];
    //         const ownTemplates = resumeTemplatesListing.filter(template => purchasedTemplateIds.includes(template.id));
    //         setUserPurchasedTemplates(ownTemplates);
    //     }
    // }, [resumeTemplatesListing, userDetails]);

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     responsive: [
    //         { breakpoint: 1500, settings: { slidesToShow: 2 } },
    //         { breakpoint: 1200, settings: { slidesToShow: 2 } },
    //         { breakpoint: 768, settings: { slidesToShow: 1 } },
    //     ],
    // };

    const [templates, setTemplates] = useState<Template[]>([
        { id: 1, image: '/dummy1.jpg', is_paid: 0 },
        { id: 2, image: '/dummy2.jpg', is_paid: 1 },
        { id: 3, image: '/dummy3.jpg', is_paid: 0 },
    ]);
    const [userPurchasedTemplates, setUserPurchasedTemplates] = useState<Template[]>([]);
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1500, settings: { slidesToShow: 2 } },
            { breakpoint: 1200, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };


    return (
        <section className="mt-2 px-2 flex justify-center items-center flex-wrap relative">
            <h3 className="text-center text-[#0072b1] font-bold text-xl md:text-3xl drop-shadow-lg sm:py-6">
                <span className="text-[#00caa5]">Try Out Our Professional</span> Resume Templates Now!
            </h3>
            <div className="w-full lg:w-[80%] lg:flex px-4 sm:justify-center sm:items-center gap-4 xl:gap-4">
                <div className="w-full sm:text-center border-4">
                    <p className="text-slate-800 text-justify font-normal leading-[1.5]">
                        Our AI resume builder allows you to <b>create resumes</b> in minutes...
                    </p>
                    {/* {templates.length > 0 && (
                        <Slider {...settings} ref={sliderRef}>
                            {templates.map((template) => {
                                const isPurchased = userPurchasedTemplates.some(pt => pt.id === template.id);
                                return (
                                    <div key={template.id} className="w-full relative mt-4 flex justify-center items-center">
                                        <div className="relative">
                                            {isPurchased ? (
                                                <div className="flex bg-gradient-to-r from-[#00caa5] to-[#01B2AC] w-[150px] h-8 absolute left-[-35px] top-6 text-white -rotate-45 justify-center items-center z-50" style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}>
                                                    <img src={brand.src} alt="purchased icon" />
                                                    <span>Own</span>
                                                </div>
                                            ) : template.is_paid === 1 && (
                                                <div className="flex bg-gradient-to-r from-[#01B2AC] to-[#0072B1] w-[150px] h-8 absolute left-[-35px] top-6 text-white -rotate-45 justify-center items-center z-50" style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}>
                                                    <img src={premium.src} alt="premium icon" />
                                                    <span>Premium</span>
                                                </div>
                                            )}
                                            <img src={`${global.imageUrl}${template.image}`} alt="Resume Template" className="shadow-md rounded-xl w-full sm:w-[90%] p-2 lg:p-0" />
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    )} */}
                    {templates.length > 0 && (
                        <Slider {...settings} ref={sliderRef} className='border-4'>
                            {templates.map((template) => {
                                const isPurchased = userPurchasedTemplates.some(pt => pt.id === template.id);
                                return (
                                    <div key={template.id} className="w-full relative mt-4 flex justify-center items-center ">
                                        <div className="relative">
                                            {isPurchased ? (
                                                <div className="flex bg-gradient-to-r from-[#00caa5] to-[#01B2AC] w-[150px] h-8 absolute left-[-35px] top-6 text-white -rotate-45 justify-center items-center z-50" style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}>
                                                    <img src={brand.src} alt="purchased icon" />
                                                    <span>Own</span>
                                                </div>
                                            ) : template.is_paid === 1 && (
                                                <div className="flex bg-gradient-to-r from-[#01B2AC] to-[#0072B1] w-[150px] h-8 absolute left-[-35px] top-6 text-white -rotate-45 justify-center items-center z-50" style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}>
                                                    <img src={premium.src} alt="premium icon" />
                                                    <span>Premium</span>
                                                </div>
                                            )}
                                            <img src={template.image} alt="Resume Template" className="shadow-md rounded-xl w-full sm:w-[90%] p-2 lg:p-0" />
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    )}
                </div>
            </div>
            <div className="flex justify-center items-center w-full pt-8 my-4 text-center">
                {/* <NinaButton title="View All Templates" mainColor="#0072b1" sliderColor="#fff59c" mainTextColor="#FFFFFF" hoverTextColor="#0072b1" link="/resume-templates" /> */}

                <AppButton title="View All Templates" />
            </div>
        </section>
    );
}


