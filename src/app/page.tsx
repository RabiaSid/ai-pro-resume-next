import MainBanner from '@/components/Banner/mainBanner'
import React from 'react'
import MainSliderImage1 from "media/assets/home_slider/slider_1.webp";
import MainSliderImage2 from "media/assets/home_slider/slider_2.webp";
import MainSliderImage3 from "media/assets/home_slider/slider_3.webp";
import MainSliderImage4 from "media/assets/home_slider/slider_4.webp";
import MainSliderImage5 from "media/assets/home_slider/slider_5.webp";

export default function Page() {

    const images = [
        MainSliderImage1,
        MainSliderImage2,
        MainSliderImage3,
        MainSliderImage4,
        MainSliderImage5,
    ];



    return (
        <>
            <MainBanner
                user={{ token: "exampleToken" }}
                title="Let AI Build the Resume"
                subtitle={[
                    "That Builds Your Career",
                    "Your Future Starts Here",
                    "Create the Best Resume",
                ]}
                description="Build a professional resume with our outstanding resume maker in no time. AI Pro Resume is an easy, fast, free, and creative resume-building platform with incredible features and services."
                button1={{
                    title: "IMPORT RESUME",
                    mainColor: "#0072b1",
                    sliderColor: "#fff59c",
                    mainTextColor: "#FFFFFF",
                    hoverTextColor: "#0072b1",
                    authLink: "/import-resume",
                    guestLink: "/login",
                }}
                button2={{
                    title: "CREATE RESUME",
                    mainColor: "#0072b1",
                    sliderColor: "#fff59c",
                    mainTextColor: "#FFFFFF",
                    hoverTextColor: "#0072b1",
                    authLink: "/resume-templates",
                    guestLink: "/login",
                }}
                images={images}
            />
        </>
    )
}