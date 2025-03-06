'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Controller, useForm } from "react-hook-form";
import { H1 } from '@/components/typography'
import AppButton from '@/components/common/button/pages'
import AppInputField from '@/components/common/inpufield/page'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { UpdatePassword } from '@/redux/slices/authSlice';
import Cookies from "js-cookie";
import CustomAlert from '@/components/common/customAlerts/CustomAlert';

export default function page() {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const [showPassword, setShowPassword] = useState(false);
    const [showC_Password, setC_ShowPassword] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState<string>();
    const [showSuccessMessage, setShowSuccessMessage] = useState<string>();

    const {
        handleSubmit,
        control,
        getValues,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleTogglePasswordVisibilityC = () => {
        setC_ShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleResetPassword = async (data: any) => {
        setShowAlert(false)
        const userEmail = Cookies.get("userEmail");
        const getUserEmail = userEmail ? JSON.parse(userEmail) : "";
        const reseTPassData = {
            ...data,
            email: getUserEmail.replace(/^"|"$/g, "").trim()
        }
        await dispatch(UpdatePassword(reseTPassData)).then((response) => {
            if (response.payload.statusCode == 200) {
                setShowAlert(true)
                setShowSuccessMessage(response.payload.message);
                setTimeout(() => {
                    router.push("/");
                }, 1000)
            }
            else {
                setShowAlert(true)
                setShowErrorMessage(response.payload.message);
            }
        }).catch((err) => {
            console.log(err, "err");
            setShowAlert(true)
            setShowErrorMessage("Something wents wrong.")
        })
    }
    return (
        <div className="w-full md:w-[550px] m-auto min-h-[800px] text-center font-Lexend flex flex-col justify-center">

            {showAlert && (showErrorMessage || showSuccessMessage) && (
                <CustomAlert
                    messages={showErrorMessage || showSuccessMessage}
                    type={showErrorMessage ? "error" : "success"}
                />
            )}

            <H1 className='text-black mb-5'>Reset Password</H1>
            <div>
                <form
                    onSubmit={handleSubmit(handleResetPassword)}
                >
                    {/* Verify Code */}
                    <div className="flex flex-col">
                        <Controller
                            name='verify_code'
                            control={control}
                            defaultValue=""
                            rules={{ required: "Code is required" }}
                            render={({ field }) => (
                                <AppInputField
                                    {...field}
                                    label="Verify Code"
                                    type="text"
                                    className="w-full"
                                    error={!!errors.verify_code}
                                    errorMessage={errors.verify_code?.message}
                                    aria-invalid={errors.verify_code ? "true" : "false"}
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
                                        error={!!errors.password}
                                        errorMessage={errors.password?.message}
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
                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col">
                        <div className="relative w-full">
                            <Controller
                                name="password_confirmation"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Please Enter Your Confirm Password",
                                    validate: (value) =>
                                        value === getValues('password') || "Passwords do not match"
                                }}
                                render={({ field }) => (
                                    <AppInputField
                                        label="Confirm Password*"
                                        type={showPassword ? "text" : "password"}
                                        className="w-full"
                                        {...field}
                                        error={!!errors.password_confirmation}
                                        errorMessage={errors.password_confirmation?.message}
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
                    </div>

                    <AppButton
                        title='Submit'
                        className="bg-primaryCran uppercase w-full mt-4 px-8 py-2 rounded-md text-white  text-xl font-bold hover:bg-slate-800 ease-in transition-all mb-4 sm:mb-0"
                    />

                    <div className="flex justify-between items-center m-4">
                        <p className="text-sm text-primaryGray">
                            Didn't get the code{" "}
                            <span className="color_4">
                                <Link href="/forget-password" className="text-primaryBlue">
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
