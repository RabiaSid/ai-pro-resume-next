'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useForm } from "react-hook-form";
import { H1 } from '@/utils/typography'
import AppButton from '@/components/common/button/pages'
import AppInputField from '@/components/common/inpufield/page'
import { useRouter } from 'next/navigation'

export default function page() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showC_Password, setC_ShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleCreate = () => {
        router.push("/register")
    }

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleTogglePasswordVisibilityC = () => {
        setC_ShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleClick = () => {
        console.log("Creatimg account");
    };

    return (
        <div className="w-full md:w-[550px] m-auto min-h-[800px] text-center font-Lexend flex flex-col justify-center">
            <H1 className='text-black mb-5'>Reset Password</H1>
            <div>
                <form
                //  onSubmit={handleSubmit(handleLoginSubmit)} 
                >
                    {/* Email */}
                    <div className="flex flex-col">
                        <AppInputField
                            label="Verify Code"
                            // variant="outlined"
                            type="text"
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

                    <AppButton title='Submit'
                        onClick={handleCreate}
                        className="bg-primaryCran uppercase w-full
                         mt-4 px-8 py-2 rounded-md text-white 
                         text-xl font-bold hover:bg-slate-800
                          ease-in transition-all mb-4 sm:mb-0"
                    />
                    <div className="flex justify-between items-center m-4">
                        <p className="text-sm text-primaryGray">
                            Didn't get the code{" "}
                            <span className="color_4">
                                <Link href="/register"
                                    className="text-primaryBlue">
                                    Resend
                                </Link>
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
