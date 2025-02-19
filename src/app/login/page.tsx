'use client'
import { H1 } from '@/utlis/typography'
import { Box, TextField } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { IoInformationCircle } from 'react-icons/io5'
import { useForm } from "react-hook-form";

export default function page() {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    return (
        <div className="border w-full md:w-[550px] m-auto mt-20 px-4 min-h-[800px] text-center font-Lexend">
            <H1 className="text-[#0072b1] text-center my-2 text-2xl font-bold font-large">SIGN IN</H1>
            <p className="text-black text-left my-4 text-lg flex items-start justify-center">
                <IoInformationCircle size={24} className="mt-[2px] text-[red]" />
                <div className="w-[97%] text-center">
                    Sign in to AI Pro Resume to securely save and update your resume or
                    cover letter information for future use, free of charge. Enjoy free
                    downloads at <span className="text-[red]">no hidden costs</span>.
                </div>
            </p>

            <div>
                {/* //Social Logins */}
            </div>

            <div>
                <form
                //  onSubmit={handleSubmit(handleLoginSubmit)}
                >
                    <Box
                        component="form"
                        sx={{
                            "& > :not(style)": { m: 0, width: "100%" },
                        }}
                        noValidate
                        autoComplete="on"
                        className="flex flex-col gap-4"
                    >
                        <div className="flex flex-col">
                            <TextField
                                id="email"
                                label="Email or Customer ID*"
                                variant="outlined"
                                type="email"
                                autoComplete="on"
                                autoFocus
                                {...register("email", {
                                    required: "Please Enter Your Email or Customer ID",
                                })}
                                aria-label={errors?.email ? "Email error" : ""}
                                error={!!errors.email}
                            />
                            {/* <span className="text-left text-red-500 text-xs">
                                {errors?.email?.message}
                            </span> */}
                        </div>
                        {/* Password */}
                        <div>
                            <div className="flex flex-col">
                                <div className="relative w-full">
                                    <TextField
                                        id="password"
                                        label="Password*"
                                        variant="outlined"
                                        autoComplete="on"
                                        type={showPassword ? "text" : "password"}
                                        className="w-full"
                                        {...register("password", {
                                            required: "Please Enter Your Password",
                                        })}
                                        aria-label={errors?.password ? "Password error" : ""}
                                        error={!!errors.password}
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
                                <div className="flex justify-between">
                                    <div className="text-slate-500">
                                        <input type="checkbox" className="autofill:bg-yellow-200" />{" "}
                                        Remember me
                                    </div>
                                    <Link
                                        to={"/forgot-password"}
                                        className="text-[#0072b1] font-bold hover:text-slate-800"
                                    >
                                        {" "}
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Box>

                    <button type="submit" className="hidden" id="submitForm"></button>
                </form>



            </div>
        </div>
    )
}
