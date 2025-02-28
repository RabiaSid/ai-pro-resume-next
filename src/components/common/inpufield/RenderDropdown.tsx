"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import React from "react";

interface Option {
  id: string;
  title?: string;
  body?: string;
}

interface RenderDropdownProps {
  label: string;
  htmlFor: string;
  placeholder?: string;
  options: Option[];
  change: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  isLoading?: boolean;
}

const RenderDropdown: React.FC<RenderDropdownProps> = ({
  label,
  htmlFor,
  placeholder = "Select",
  options,
  change,
  value,
  isLoading = false,
}) => {
  return (
    <div className="py-4 w-full">
      {isLoading && <LoadingSpinner isLoading={false} />}

      <label htmlFor={htmlFor} className="border-[#9b9b9b]">
        {label}
      </label>

      <select
        id={htmlFor}
        onChange={change}
        value={value}
        className="w-full font_3 transition-all duration-300 ease-linear text-[#00caa5] text-lg p-2 border border-[#9b9b9b] focus:border-[#00caa5] outline-none"
      >
        <option value="" disabled className="text-gray-600">
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.body ?? opt.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RenderDropdown;
