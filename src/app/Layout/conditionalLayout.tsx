"use client"
import React, { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
// import { usePathname } from "next/navigation"
// import { PopupProvider } from "./configs/store/Popup"

import Header from "@/app/Layout/header/page"
import Footer from "@/app/Layout/footer/page"
import SpinnerLoader from "@/components/common/loader/SpinnerLoader"

const ConditionalLayout = ({ children }: any) => {
    // const pathname = usePathname();
    // const [popup, setPopup] = useState(true)
    // const togglePopup = (e) => {
    //     setPopup(!e)
    // }
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        // <PopupProvider value={{ popup, togglePopup }}>
        //     {pathname !== "/video-explainer-lp" && pathname !== "/animating-studio-lp" && (
        //         <Header />
        //     )}
        <>
            <Header />
            {loading ? <SpinnerLoader /> : children}
            <Footer />
            {/* {pathname !== "/video-explainer-lp" && pathname !== "/animating-studio-lp" && (
                 <Footer />
                 )}
                 {pathname !== '/video-explainer-lp' && <Footer />} 
                </PopupProvider> */}
        </>
    )
}

export default ConditionalLayout