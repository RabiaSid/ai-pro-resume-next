import React from "react";
import styles from "./inpufield.module.css"

type PropsType = {
    label?: string;
    name: string;
    options?: { id: string; name: string, disabled?: boolean }[];
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
                    <option value="" ></option>
                    {options.map((option) => (
                        <option disabled={option.disabled} key={option.id} value={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>
                <label
                    htmlFor={name}
                    className={`absolute left-3 px-2 bg-white transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primaryBlue
        ${status === "success" ? "peer-focus:text-green-500" : ""}
        ${status === "error" ? "peer-focus:text-red-500" : ""}
        ${status === "warning" ? "peer-focus:text-yellow-500" : ""}
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