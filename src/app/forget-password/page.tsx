'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { IoInformationCircle } from 'react-icons/io5'
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { H1 } from '@/utils/typography'
import AppButton from '@/components/common/button/pages'
import AppInputField from '@/components/common/inpufield/page'
import GoogleLogo from "media/assets/google_logo.webp";
import FacebookLogo from "media/assets/fb_logo.webp";
import LinkedInLogo from "media/assets/link.webp";
import { useRouter } from 'next/navigation'

export default function page() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [captchaError, setCaptchaError] = useState("");
    const [verified, setVerified] = useState<any>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleCheckCaptcha = () => {
        setVerified(true);
        setCaptchaError("");
    };

    const resetRecaptchaValue = () => {
        setVerified(null);
    };

    const TIMEOUT_DURATION = 1 * 60 * 1000;
    let timeoutId: any;

    const handleRecaptchaTimeout = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(resetRecaptchaValue, TIMEOUT_DURATION);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleCreate = () => {
        router.push("/register")
    }
    return (
        <div className="w-full md:w-[550px] m-auto min-h-[800px] text-center font-Lexend flex flex-col justify-center">
            <H1 className='text-primaryBlue mb-5'>FORGOT PASSWORD </H1>
            <div>
                <form
                //  onSubmit={handleSubmit(handleLoginSubmit)} 
                >
                    {/* Email */}
                    <div className="flex flex-col">
                        <AppInputField
                            label="Email or Customer ID*"
                            // variant="outlined"
                            type="email"
                            className="w-full"
                            aria-label={errors?.email ? "Email error" : ""}
                        />
                    </div>

                    <AppButton title='Submit'
                        onClick={handleCreate}
                        className="bg-primaryBlue uppercase w-full
                         mt-4 px-8 py-2 rounded-md text-white 
                         text-xl font-bold hover:bg-slate-800
                          ease-in transition-all mb-4 sm:mb-0"
                    />
                    <div className="flex justify-between items-center m-4">
                        <p className="text-sm">
                            Don't you have an account?{" "}
                            <span className="color_4">
                                <Link href="/register"
                                    className="text-primaryBlue">
                                    SIGN UP
                                </Link>
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
