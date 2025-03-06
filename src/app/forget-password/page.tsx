'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Controller, useForm } from "react-hook-form";
import { H1 } from '@/components/typography'
import AppButton from '@/components/common/button/pages'
import AppInputField from '@/components/common/inpufield/page'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { forgetPassword } from '@/redux/slices/authSlice'
import { AppDispatch } from '@/redux/store'
import Cookies from "js-cookie";
import CustomAlert from '@/components/common/customAlerts/CustomAlert';

export default function page() {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState<string>();
    const [showSuccessMessage, setShowSuccessMessage] = useState<string>();

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    // forgetPassword
    const handleForgetPassword = (data: any) => {
        setShowAlert(false)
        Cookies.set("userEmail", JSON.stringify(data.email));
        dispatch(forgetPassword(data)).then((response) => {
            if (response.payload.statusCode == 200) {
                setShowAlert(true)
                setShowSuccessMessage(response.payload.message);
                setTimeout(() => {
                    router.push("/reset-password");
                }, 2000)
            }
            else {
                setShowAlert(true)
                setShowErrorMessage(response.payload.message ?? "Something wents wrong, Try again!");
            }
        }).catch((err) => {
            console.log(err);
            setShowAlert(true)
            setShowErrorMessage("Something wents wrong, Try again!")
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

            <H1 className='text-primaryBlue mb-5'>FORGOT PASSWORD </H1>
            <div>
                <form onSubmit={handleSubmit(handleForgetPassword)}>
                    {/* Email */}
                    <div className="flex flex-col">
                        <Controller
                            name='email'
                            control={control}
                            defaultValue=""
                            rules={{ required: "Email is required" }}
                            render={({ field }) => (
                                <AppInputField
                                    label="Email or Customer ID*"
                                    type="text"
                                    className="w-full"
                                    error={!!errors.email}
                                    errorMessage={errors.email?.message}
                                    aria-invalid={errors.email ? "true" : "false"}
                                    {...field}
                                />
                            )}
                        />
                    </div>
                    <AppButton
                        title='Submit'
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
