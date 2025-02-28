"use client";

import React from "react";

interface Option {
  value: string;
  label: string;
}

interface RenderInputGroupProps {
  label: string;
  isRequired?: boolean;
  htmlFor: string;
  onChange: (value: string) => void;
  value: string;
  type?: "text" | "email" | "password" | "number" | "select";
  placeholder?: string;
  options?: Option[];
}

const RenderInputGroup: React.FC<RenderInputGroupProps> = ({
  label,
  isRequired = false,
  htmlFor,
  onChange,
  value,
  type = "text",
  placeholder = "",
  options = [],
}) => {
  return (
    <div className="py-2 w-full flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="border-[#9b9b9b] text-xs sm:text-base"
      >
        {label}
      </label>

      {type === "select" ? (
        <select
          id={htmlFor}
          className="w-full font_3 transition-all duration-300 ease-linear text-[#00caa5] text-lg p-2 border border-[#9b9b9b] focus:border-[#00caa5] outline-none rounded-md"
          required={isRequired}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={htmlFor}
          className="w-full font_3 transition-all duration-300 ease-linear text-[#00caa5] text-lg p-2 border border-[#9b9b9b] focus:border-[#00caa5] outline-none rounded-md"
          required={isRequired}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default RenderInputGroup;
