'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { IoInformationCircle } from 'react-icons/io5'
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { H1, H2 } from '@/utils/typography'
import AppButton from '@/components/common/button/pages'
import AppInputField from '@/components/common/inpufield/page'
import GoogleLogo from "media/assets/google_logo.webp";
import FacebookLogo from "media/assets/fb_logo.webp";
import LinkedInLogo from "media/assets/link.webp";
import CustomSelect from '@/components/common/customSelect/CustomSelect'
import { Fa42Group } from 'react-icons/fa6'

export default function page() {
    const [captchaError, setCaptchaError] = useState("");
    const [verified, setVerified] = useState<any>(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showC_Password, setC_ShowPassword] = useState(false);

    const staticOptions = [
        { id: "1", name: "Option 1" },
        { id: "2", name: "Option 2" },
        { id: "3", name: "Option 3" },
    ];

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

    const handleTogglePasswordVisibilityC = () => {
        setC_ShowPassword((prevShowPassword) => !prevShowPassword);
    };
    return (
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
                <form
                //  onSubmit={handleSubmit(handleLoginSubmit)} 
                >
                    {/* Name */}
                    <div className="flex flex-col">
                        <AppInputField
                            label="Name*"
                            // variant="outlined"
                            type="text"
                            className="w-full"
                            aria-label={errors?.name ? "Name error" : ""}
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <AppInputField
                            label="Email*"
                            // variant="outlined"
                            type="email"
                            className="w-full"
                            aria-label={errors?.email ? "Email error" : ""}
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <div className="relative w-full">
                            <AppInputField
                                // id="password"
                                label="Password*"
                                // variant="outlined"
                                // autoComplete="on"
                                type={showPassword ? "text" : "password"}
                                className="w-full"
                                {...register("password", {
                                    required: "Please Enter Your Password",
                                })}
                                aria-label={errors?.password ? "Password error" : ""}
                            // error={!!errors.password}
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
                            <AppInputField
                                // id="password"
                                label="Confirm Password*"
                                // variant="outlined"
                                // autoComplete="on"
                                type={showPassword ? "text" : "password"}
                                className="w-full"
                                {...register("password", {
                                    required: "Please Enter Your Confirm Password",
                                })}
                                aria-label={errors?.password ? "Password error" : ""}
                            // error={!!errors.password}
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
                        <AppInputField
                            label="Referred By"
                            type="text"
                            className="w-full"
                            readOnly={true}
                            aria-label={errors?.reffered ? "reffered error" : ""}
                        />
                    </div>

                    {/* Referred By */}
                    <div className="flex flex-col">
                        <AppInputField
                            label="Referred By"
                            type="text"
                            className="w-full"
                            readOnly={true}
                            aria-label={errors?.reffered ? "reffered error" : ""}
                        />
                    </div>

                    {/* Select Country */}
                    <div className="flex flex-col">
                        <CustomSelect
                            label="Select Country"
                            name="text"
                            className="w-full"
                            options={staticOptions}
                        // onChange={onChange}
                        />
                    </div>

                    {/* Phone Number   */}
                    <div className="flex flex-col">
                        <AppInputField
                            label="Referred By"
                            type="text"
                            className="w-full"
                            readOnly={true}
                            aria-label={errors?.reffered ? "reffered error" : ""}
                            leftIcon={<Fa42Group />}
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

                </form>



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
                    className="bg-[#0072b1] uppercase w-full mt-4 px-8 py-2 rounded-md text-white text-xl font-bold hover:bg-slate-800 ease-in transition-all mb-4 sm:mb-0"

                />
                <div className="w-[60%] text-center mt-4 text-slate-500 inline-block mb-5">
                    <p className="text-slate-500">
                        Already an account?{" "}
                        <a
                            href={"/login"}
                            className="text-[#0072b1] font-bold hover:text-slate-800"
                        >
                            LOGIN
                        </a>
                    </p>
                </div>
            </div>
        </div >
    )
}
