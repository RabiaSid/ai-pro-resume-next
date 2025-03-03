'use client';

import Image from 'next/image';
import service_1 from 'media/assets/service_1.webp';
import service_2 from 'media/assets/service_2.webp';
import service_3 from 'media/assets/service_3.webp';
import banner_about from 'media/assets/main_image.webp';
import AppButton from '../common/button/pages';
import { H3 } from '../typography';
import OnScrollAnimeCard from '../common/card/OnScrollAnimeCard';
// import { UserContext } from '@/context/UserContext';

const ResumeBuilderSection: React.FC = () => {
    // const { user } = useContext(UserContext);
    const dummyData = [
        { img: service_1, title: 'Personalized AI-Based Suggestions', description: 'AI Pro Resume is your resume specialist that provides AI-based personalized suggestions based on your skills and experiences. These suggestions can speed up your cover letter and resume-making process.' },
        { img: service_2, title: 'Resume Parser', description: 'With the perfect resume builder, you do not have to write or copy-paste your data. Just import your current resume and see the magic of our resume parser tool. It fetches all the data from your file and transfers them to creative resume maker.' },
        { img: service_3, title: 'ATS Friendly Templates', description: 'AI Pro Resume allows you to create an ATS-friendly resume that will pass the ATS scan without hassle. We help you design resumes that maximize your chance of being noticed by employers and application tracking systems.' }
    ]

    return (
        <section className="overflow-x-hidden ">
            <div className="relative">
                <div className="max-w-[1500px] m-auto px-4">
                    <div className="w-full text-center">
                        <div className="py-5 opacity-0 translate-x-[-50px] transition-all duration-700 ease-in-out scroll-trigger">
                            <H3 className="text-primaryBlue drop-shadow-lg font-bold px-4 sm:px-0">
                                What Makes Us
                                <span className="text-primaryGreen mx-4 ">
                                    The Best Resume Builder
                                </span>
                                Online?
                            </H3>
                            <div className="grid gap-4 mt-10 sm:grid-cols-2 xl:grid-cols-3 font-Lexend sm:px-0">
                                {dummyData.map((service, index) => (
                                    <OnScrollAnimeCard
                                        key={index}
                                        img={service.img}
                                        title={service.title}
                                        description={service.description}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="bg-transparent opacity-0 translate-x-[50px] transition-all duration-700 ease-in-out scroll-trigger delay-200">
                            <div className="justify-center hidden xl:flex">
                                <Image src={banner_about} alt="about" />
                            </div>
                            <div className="flex justify-center items-center w-full mt-6">
                                <AppButton title="LET'S BUILD YOUR RESUME" />
                                {/* <NinaButton
                                title="LET'S BUILD YOUR RESUME"
                                mainColor="#0072b1"
                                sliderColor="#fff59c"
                                mainTextColor="#FFFFFF"
                                hoverTextColor="#0072b1"
                                link={user?.token ? '/resume-templates' : '/login'}
                              /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeBuilderSection;

// Add the following script to your project to trigger animations on scroll
if (typeof window !== "undefined") {
    document.addEventListener("scroll", () => {
        document.querySelectorAll(".scroll-trigger").forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
                el.classList.add("opacity-100", "translate-x-0");
            }
        });
    });
}