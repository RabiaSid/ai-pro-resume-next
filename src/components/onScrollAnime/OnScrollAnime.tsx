'use client';

import React, { useState } from 'react'
import AppButton from '../common/button/pages'
import OnScrollAnimeCard from '../common/card/OnScrollAnimeCard'
import ServiceImg1 from 'media/assets/service_1.webp'
import ServiceImg2 from 'media/assets/service_2.webp'
import ServiceImg3 from 'media/assets/service_3.webp'
const dummyServices = [
    {
        image: ServiceImg1,
        name: 'Web Development',
        description: '<ul><li>Responsive Design</li><li>Modern UI/UX</li><li>SEO Optimization</li></ul>',
    },
    {
        image: ServiceImg2,
        name: 'Mobile App Development',
        description: '<ul><li>iOS & Android Apps</li><li>React Native</li><li>Performance Optimization</li></ul>',
    },
    {
        image: ServiceImg3,
        name: 'Cloud Services',
        description: '<ul><li>AWS & Azure</li><li>Scalability</li><li>Serverless Architecture</li></ul>',
    },
    {
        image: ServiceImg1,
        name: 'AI & Machine Learning',
        description: '<ul><li>Data Analysis</li><li>Chatbots</li><li>Automation</li></ul>',
    },
];
export default function OnScrollAnime() {
    // const [random_services, set_random_services] = useState<any[]>([{
    //     image: ServiceImg1,
    //     name: 'Web Development',
    //     description: '<ul><li>Responsive Design</li><li>Modern UI/UX</li><li>SEO Optimization</li></ul>',
    // },
    // {
    //     image: ServiceImg2,
    //     name: 'Mobile App Development',
    //     description: '<ul><li>iOS & Android Apps</li><li>React Native</li><li>Performance Optimization</li></ul>',
    // },
    // {
    //     image: ServiceImg3,
    //     name: 'Cloud Services',
    //     description: '<ul><li>AWS & Azure</li><li>Scalability</li><li>Serverless Architecture</li></ul>',
    // },]);
    // const [random_services, set_random_services] = useState([" ", " "]);
    // const fetchData = async () => {
    //     try {
    //         const reviewsResponse = await axios.get(global.baseurl + "/our-reviews");

    //         set_our_reviews(reviewsResponse.data.data);

    //         const servicesResponse = await axios.get(
    //             global.baseurl + "/random-services"
    //         );
    //         set_random_services(servicesResponse.data.data.services);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);
    return (
        <section className='relative '>
            <div className="container m-auto overflow-hidden py-8 px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 ">
                    {/* {random_services?.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-[rgba(255,255,255,0.4)] border-4 hover:bg-[rgba(255,255,255,0.9)] cursor-pointer backdrop-blur-[10px] rounded-lg 
                        opacity-0 translate-y-10 fadeInUp"
                        >

                            <OnScrollAnimeCard
                                img={service.image}
                                alt={service.name}
                                title={service.name}
                                points={service.description}
                            />

                        </div>
                    ))} */}
                    {dummyServices.map((service, idx) => (
                        <div
                            key={idx}
                            className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.9)] cursor-pointer backdrop-blur-[10px] rounded-lg 
        opacity-0 translate-y-10 '
                        >
                            <OnScrollAnimeCard
                                img={service.image}
                                alt={service.name}
                                title={service.name}
                                points={service.description}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center w-full pt-8">
                    <AppButton title="Let's Explore Services" />
                    {/* <NinaButton
                        className=""
                        title="Let's Explore Services"
                        mainColor="#0072b1"
                        sliderColor="#fff59c"
                        mainTextColor="#FFFFFF"
                        hoverTextColor="#0072b1"
                        link={user?.token ? "/services" : "/login"}
                    /> */}
                </div>
            </div>
        </section >
    )
}
