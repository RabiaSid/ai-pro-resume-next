"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import logo from "media/assets/logo_resume.webp";

interface LoadingSpinnerProps {
  isLoading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading }) => {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="h-screen w-full flex justify-center items-center gap-4 flex-col fixed top-0 left-0 bg-white z-50">
      <div>
        <Image src={logo} width={200} height={100} alt="logo" />
      </div>
      <div className="spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default LoadingSpinner;
