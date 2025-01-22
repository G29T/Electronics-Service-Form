import React from 'react';
import { DropDownProps } from '../utils/interfaces';

const DropDown: React.FC<DropDownProps> = ({ value, onChange, placeholder, options }) => {
    return (
        <select
            value={value}
            onChange={onChange}
            required
            className="block w-full p-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option disabled value=''>{placeholder}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default DropDown;
