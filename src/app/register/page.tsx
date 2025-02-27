'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Controller, useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { H1 } from '@/utils/typography'
import AppButton from '@/components/common/button/pages'
import AppInputField from '@/components/common/inpufield/page'
import GoogleLogo from "media/assets/google_logo.webp";
import FacebookLogo from "media/assets/fb_logo.webp";
import LinkedInLogo from "media/assets/link.webp";
import CustomSelect from '@/components/common/customSelect/CustomSelect'

import { useRouter } from 'next/navigation'
import CustomPhoneNumber from '@/components/common/customSelect/CustomPhoneNumber'
import Ads from '@/components/ads/Ads'
import { registerUser } from '@/redux/slices/authSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'


export default function page() {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const [captchaError, setCaptchaError] = useState("");
    const [verified, setVerified] = useState<any>(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showC_Password, setC_ShowPassword] = useState(false);

    const staticOptions = [
        { id: "us", name: "United States" },
        { id: "ca", name: "Canada" },
        { id: "uk", name: "United Kingdom" },
        { id: "au", name: "Australia" },
        { id: "de", name: "Germany" },
        { id: "fr", name: "France" },
        { id: "in", name: "India" },
        { id: "jp", name: "Japan" },
        { id: "cn", name: "China" },
    ];

    const {
        register,
        handleSubmit,
        control,
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

    const handleTogglePasswordVisibilityC = () => {
        setC_ShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleClick = () => {
        console.log("Creatimg account");
    };
    const handleLoginSubmit = async (formData: any) => {
        console.log(formData);
        console.log(formData, "formData");
        const credentials = {
            name: formData?.name,
            email: formData?.email,
            role: formData?.role,
            password: formData?.password,
            confirm_password: formData?.confirm_password,
            country_id: 2,
            contact: formData?.contact,
            referred_by: formData?.referred_by,
        }
        try {
            const response = await dispatch(registerUser(credentials));
            console.error(response?.payload, "responseresponsevv");

            if (response.payload?.statusCode == "200") {
                router.push("/login");
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
                <H1 className='text-primaryBlue mb-5'>CREATE ACCOUNT</H1>

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
                        {/* //Social Logins */}
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

                <div>
                    <form onSubmit={handleSubmit(handleLoginSubmit)}
                    >
                        {/* Name */}
                        <div className="flex flex-col">
                            <Controller
                                name='name'
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <AppInputField
                                        {...field}
                                        label="Name*"
                                        // variant="outlined"
                                        type="text"
                                        className="w-full"
                                        aria-label={errors?.name ? "Name error" : ""}
                                    />
                                )}
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <Controller
                                name='email'
                                control={control}
                                defaultValue=""
                                rules={{ required: "Email is required" }}
                                render={({ field }) => (
                                    <AppInputField
                                        {...field}
                                        label="Email*"
                                        // variant="outlined"
                                        type="email"
                                        className="w-full"
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
                                    {showPassword ? (
                                        <FaRegEye className="text-xl" />
                                    ) : (
                                        <FaRegEyeSlash className="text-xl " />
                                    )}
                                </button>
                            </div>
                            <span className="text-left text-red-500 text-xs">
                                {/* {errors?.password?.message} */}
                            </span>
                        </div>

                        {/* Confirm Password */}
                        <div className="flex flex-col">
                            <div className="relative w-full">
                                <Controller
                                    name="confirm_password"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Please Enter Your Confirm Password" }}
                                    render={({ field }) => (
                                        <AppInputField
                                            label="Confirm Password*"
                                            type={showPassword ? "text" : "password"}
                                            className="w-full"
                                            {...field}
                                            aria-label={errors?.password ? "Password error" : ""}
                                        />
                                    )}
                                />
                                <button
                                    type="button"
                                    onClick={handleTogglePasswordVisibilityC}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                                >
                                    {showC_Password ? (
                                        <FaRegEye className="text-xl" />
                                    ) : (
                                        <FaRegEyeSlash className="text-xl " />
                                    )}
                                </button>
                            </div>
                            <span className="text-left text-red-500 text-xs">
                                {/* {errors?.password?.message} */}
                            </span>
                        </div>

                        {/* Referred By */}
                        <div className="flex flex-col">
                            <Controller
                                name='referred_by'
                                control={control}
                                defaultValue="Rimsha012"
                                render={({ field }) => (
                                    <AppInputField
                                        {...field}
                                        label="Referred By"
                                        type="text"
                                        className="w-full"
                                        readOnly={true}
                                        aria-label={errors?.reffered ? "reffered error" : ""}
                                    />
                                )}
                            />
                        </div>

                        {/* Select Country */}
                        <div className="flex flex-col">

                            <Controller
                                name="country_id"
                                control={control}
                                rules={{ required: "Country is Required" }}
                                render={({ field }) => (
                                    <CustomSelect
                                        {...field}
                                        label="Select Country"
                                        name="text"
                                        className="w-full"
                                        options={staticOptions}
                                    />)}
                            />
                        </div>

                        {/* Phone Number   */}
                        <div className="flex flex-col">
                            <Controller
                                name="contact"
                                control={control}
                                rules={{ required: "Phone Number is Required" }}
                                render={({ field }) => (
                                    <CustomPhoneNumber field={field} errors={errors} />
                                )}
                            />
                        </div>

                        {/* Remember Me */}
                        <div>
                            <div className="flex justify-between">
                                <div className="text-slate-500">
                                    <input type="checkbox" className="autofill:bg-yellow-200" />{" "}
                                    Remember me
                                </div>
                                <div className="text-slate-500">
                                    <Link
                                        href={"/forget-password"} >
                                        <span className="text-[#0072b1] font-bold hover:text-slate-80">
                                            Forgot Password?
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="flex flex-col items-start mt-4">
                                <span className="text-red-500 text-sm">{captchaError}</span>
                                <ReCAPTCHA
                                    sitekey={"6LdRjxslAAAAAIP7BsNtsYgCvPM5RfNXjHGIzveJ"}
                                    onChange={(val: any) => {
                                        handleCheckCaptcha();
                                        handleRecaptchaTimeout();
                                    }}
                                />
                            </div>

                            <AppButton title='Create Account'
                                onClick={handleClick}
                                className="bg-primaryBlue uppercase w-full mt-4 px-8 py-2 rounded-md text-white text-xl font-bold hover:bg-slate-800 ease-in transition-all mb-4 sm:mb-0"
                            />
                            <div className="w-[60%] text-center mt-4 text-slate-500 inline-block mb-5">
                                <p className="text-slate-500">
                                    Already an account?{" "}
                                    <a
                                        href={"/login"}
                                        className="text-primaryBlue font-bold hover:text-slate-800"
                                    >
                                        LOGIN
                                    </a>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>


            </div>
        </>
    )
}