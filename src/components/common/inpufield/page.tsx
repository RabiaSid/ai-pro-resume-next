import React from "react";
import styles from './inpufield.module.css';

type PropsType = {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    status?: "success" | "error" | "warning" | null;
};

export default function AppInputField({
    label = "Input",
    type = "text",
    placeholder = "Enter text",
    value,
    onChange,
    className = "",
    status = null,
    ...rest
}: PropsType) {
    return (
        <div className={`w-72 ${className}`}>
            <div className={`relative ${styles.floatLabelInput}`}>
                <input
                    type={type}
                    id="input-field"
                    placeholder=" "
                    value={value}
                    onChange={onChange}
                    className={`peer w-full focus:text-primaryBlue focus:outline-primaryBlue focus:shadow-outline border rounded-md py-3 px-3 block appearance-none leading-normal transition-all duration-200 
                        ${status === "success" ? 'border-green-500 focus:border-green-500' : ''}
                        ${status === "error" ? 'border-red-500 focus:border-red-500' : ''}
                        ${status === "warning" ? 'border-yellow-500 focus:border-yellow-500' : ''}
                        ${status === null ? 'border-slate-300 focus:border-primaryBlue' : ''}
                    `}
                    {...rest}
                />
                <label
                    htmlFor="input-field"
                    className={`absolute bg-none bg-transparent top-3 left-3 pointer-events-none transition-all duration-200 px-2
                        peer-focus:${status === "success" ? 'text-green-500' : ''}
                        peer-focus:${status === "error" ? 'text-red-500' : ''}
                        peer-focus:${status === "warning" ? 'text-yellow-500' : ''}
                        ${status === null ? 'text-gray-400 peer-focus:text-primaryBlue' : ''}
                    `}
                >
                    {status === "error" ? "Error: Invalid Input" : label}
                </label>
            </div>
            {status === "error" && <p className="text-red-500 text-xs mt-1 border">Error: Invalid Input</p>}
        </div>
    );
}
