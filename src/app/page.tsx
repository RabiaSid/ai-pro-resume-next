import React from 'react'
import MainBanner from '@/components/Banner/mainBanner'
import { BannerData, ResumeTemplateData } from './data'
import OurFaqs from '@/components/Faq/faq'
import ResumeTemplateSlider from '@/components/TemplateSlider'

export default function Page() {

    return (
        <>
            <div className='container md:px-4 mx-auto'>
                <MainBanner {...BannerData} />
                <ResumeTemplateSlider {...ResumeTemplateData} />
                <OurFaqs />
            </div>
        </>
    )
}