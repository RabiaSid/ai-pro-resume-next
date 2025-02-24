import React from "react";
import styles from "./inpufield.module.css"

type PropsType = {
    label?: string;
    name: string;
    options?: { id: string; name: string }[];
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
    status?: "success" | "error" | "warning" | null;
};

const CustomSelect = ({
    label = "Select",
    name,
    options = [],
    value,
    onChange,
    className = "",
    status = null,
    ...rest
}: PropsType) => {

    return (
        <div className={`w-72 ${className}`}>
            <div className={`relative ${styles.floatLabelSelect}`}>
                <select
                    id={name}
                    value={value}
                    onChange={onChange}
                    className={`peer w-full border rounded-md py-3 px-3 block appearance-none leading-normal transition-all duration-200 focus:outline-none
            ${status === "success" ? "border-green-500 focus:border-green-500" : ""}
            ${status === "error" ? "border-red-500 focus:border-red-500" : ""}
            ${status === "warning" ? "border-yellow-500 focus:border-yellow-500" : ""}
            ${status === null ? "border-slate-300 focus:border-primaryBlue" : ""}
          `}
                    {...rest}
                >
                    <option value="">Select an option</option>
                    {options.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>
                <label
                    htmlFor={name}
                    className={`absolute top-3 left-3 pointer-events-none transition-all duration-200 px-2
            peer-focus:${status === "success" ? "text-green-500" : ""}
            peer-focus:${status === "error" ? "text-red-500" : ""}
            peer-focus:${status === "warning" ? "text-yellow-500" : ""}
            ${status === null ? "text-gray-400 peer-focus:text-primaryBlue" : ""}
          `}
                >
                    {status === "error" ? "Error: Invalid Selection" : label}
                </label>
            </div>
            {status === "error" && <p className="text-red-500 text-xs mt-1">Error: Invalid Selection</p>}
        </div>
    );
};

export default CustomSelect;
