'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { IoInformationCircle } from 'react-icons/io5'
import { Controller, useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { H1 } from '@/utils/typography'
import AppButton from '@/components/common/button/pages'
import AppInputField from '@/components/common/inpufield/page'
import GoogleLogo from "media/assets/google_logo.webp";
import FacebookLogo from "media/assets/fb_logo.webp";
import LinkedInLogo from "media/assets/link.webp";
import { useRouter } from 'next/navigation'
import Ads from '@/components/ads/Ads'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { loginUser } from '@/redux/slices/authSlice'
// import { useAppDispatch } from '@/redux/store';

export default function page() {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error, user } = useSelector((state: RootState) => state.auth);

    const [showPassword, setShowPassword] = useState(false);
    const [captchaError, setCaptchaError] = useState("");
    const [verified, setVerified] = useState<any>(false);

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const handleCheckCaptcha = () => {
        setVerified(true);
        setCaptchaError("");
    };
    console.log(user, "useruser");

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

    const handleLoginSubmit = async (formData: any) => {
        console.log(formData, "formData");
        const credentials = {
            email: formData?.email,
            password: formData?.password,
        }
        try {
            const response = await dispatch(loginUser(credentials));
            console.error(response?.payload, "responseresponsevv");

            if (response.payload?.statusCode == "200") {
                router.push("/");
            } else {
                console.error(response.payload?.statusCode);
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    }
    return (
        <>
            <Ads />
            <div className="w-full md:w-[550px] m-auto mt-20 px-4 min-h-[800px] text-center font-Lexend">

                <H1 className='text-primaryBlue mb-5'>SIGN IN</H1>

                <div className="text-black text-left my-4 text-lg flex items-start justify-center">
                    <IoInformationCircle size={24} className="mt-[2px] text-[red]" />
                    <p className="w-[97%] text-center">
                        Sign in to AI Pro Resume to securely save and update your resume or
                        cover letter information for future use, free of charge. Enjoy free
                        downloads at <span className="text-[red]">no hidden costs</span>.
                    </p>
                </div>

                {/* //Social Logins */}
                <div className='grid space-y-3'>

                    <div>
                        {/* //Social Logins */}
                        <AppButton title='Sign-in  with Google'
                            className="w-[100%] border border-solid text-gray-400 border-slate-300 px-2 py-2 rounded-md hover:bg-slate-800 hover:text-white ease-in transition-all flex justify-center items-center"
                            childClassName="sm:tracking-widest relative"
                            leftIcon={
                                <>
                                    <Image
                                        src={GoogleLogo}
                                        alt="My Image"
                                        width={25}
                                        height={25}
                                        className="mr-2"
                                    />
                                </>
                            }
                        />
                    </div>

                    <div>
                        <AppButton title='Sign-in  with Facebook'
                            className="w-[100%] border border-solid text-gray-400 border-slate-300 px-2 py-2 rounded-md hover:bg-slate-800 hover:text-white ease-in transition-all flex justify-center items-center"
                            childClassName="sm:tracking-widest relative"
                            leftIcon={
                                <>
                                    <Image
                                        src={FacebookLogo}
                                        alt="My Image"
                                        width={25}
                                        height={25}
                                        className="mr-2"
                                    />
                                </>
                            }
                        />
                    </div>

                    <div>
                        <AppButton title='Sign-in  with LinkendIn'
                            className="w-[100%] border border-solid text-gray-400 border-slate-300 px-2 py-2 rounded-md hover:bg-slate-800 hover:text-white ease-in transition-all flex justify-center items-center"
                            childClassName="sm:tracking-widest relative"
                            leftIcon={
                                <>
                                    <Image
                                        src={LinkedInLogo}
                                        alt="My Image"
                                        width={25}
                                        height={25}
                                        className="mr-2"
                                    />
                                </>
                            }
                        />
                    </div>

                </div>


                <form onSubmit={handleSubmit(handleLoginSubmit)}>
                    <div>
                        {/* Email */}
                        <div className="flex flex-col">
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Email is required" }}
                                render={({ field }) => (
                                    <AppInputField
                                        label="Email or Customer ID*"
                                        type="email"
                                        className="w-full"
                                        {...field}
                                        aria-label={errors?.email ? "Email error" : ""}
                                    />
                                )}
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col">
                            <div className="relative w-full">
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Please Enter Your Password" }}
                                    render={({ field }) => (
                                        <AppInputField
                                            label="Password*"
                                            type={showPassword ? "text" : "password"}
                                            className="w-full"
                                            {...field}
                                            aria-label={errors?.password ? "Password error" : ""}
                                        />
                                    )}
                                />
                                <button
                                    type="button"
                                    onClick={handleTogglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                                >
                                    {showPassword ? <FaRegEye className="text-xl" /> : <FaRegEyeSlash className="text-xl" />}
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col items-start mt-4">
                        <span className="text-red-500 text-sm">{captchaError}</span>
                        <ReCAPTCHA
                            sitekey={"6LdRjxslAAAAAIP7BsNtsYgCvPM5RfNXjHGIzveJ"}
                            onChange={() => {
                                handleCheckCaptcha();
                                handleRecaptchaTimeout();
                            }}
                        />
                    </div>

                    <AppButton
                        title="Sign-in"
                        className="bg-[#0072b1] uppercase w-full mt-4 px-8 py-2 rounded-md text-white text-xl font-bold hover:bg-slate-800 ease-in transition-all flex items-center justify-center"
                    />
                </form>

            </div>
        </>
    )
}
