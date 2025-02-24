import React from 'react';
import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";

const CustomPhoneNumber = ({ field, errors }: any) => {
    return (
        <PhoneInput
            {...field}
            value={field.value}
            onChange={(value) => field.onChange(value)}
            defaultCountry="US"
            placeholder="Enter phone number*"
            autoComplete="on"
            className={`w-full leading-3 py-[14px] rounded-md px-[14px] border-2 
                ${errors?.phone ? "border-red-500" : "border-gray-300"}
            `}
        />
    );
};

export default CustomPhoneNumber;
