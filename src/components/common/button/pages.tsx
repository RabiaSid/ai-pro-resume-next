import React from "react";

type propType = {
    className?: string;
    childClassName?: string;
    title: string;
    mainColor?: string;
    altColor?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    border?: string;
    onClick?: () => void;
}

export default function AppButton(props: propType) {
    const {
        className = "",
        childClassName = "",
        title,
        mainColor,
        altColor,
        leftIcon,
        rightIcon,
        border,
        onClick,
    } = props;
    return (
        <button
            type="submit"
            className={
                className ? className :
                    `group border-2 border-transparent ${mainColor ? mainColor : "bg-primaryBlue"} 
                ${altColor ? altColor : "hover:bg-transparent"} 
                ${altColor ? altColor : "hover:border-primaryBlue"} 
                inline-flex w-fit py-2 px-6 xl:py-3 xl:px-12 ${border ? border : "rounded-full"} justify-center 
                items-center font-semibold sm:text-lg tracking-normal uppercase  
                `}
            onClick={onClick}
        >
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            <span
                className={childClassName ? childClassName : ` sm:tracking-widest relative ${altColor ? altColor : "group-hover:text-primaryBlue"} ${altColor ? altColor : "text-white"}`}
            >
                {title}
            </span>
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </button>
    );
};

