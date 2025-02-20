"use client"
import React, { useState } from "react"
// import { usePathname } from "next/navigation"
// import { PopupProvider } from "./configs/store/Popup"

import Header from "@/app/Layout/header/page"
import Footer from "@/app/Layout/footer"

const ConditionalLayout = ({ children }: any) => {
    // const pathname = usePathname();
    // const [popup, setPopup] = useState(true)
    // const togglePopup = (e) => {
    //     setPopup(!e)
    // }
    return (
        // <PopupProvider value={{ popup, togglePopup }}>
        //     {pathname !== "/video-explainer-lp" && pathname !== "/animating-studio-lp" && (
        //         <Header />
        //     )}
        <>
            <Header />
            {children}
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