import React, { useState } from 'react';
import { DropDownProps } from '../utils/interfaces';

const DropDown: React.FC<DropDownProps> = ({ value, onChange, placeholder, options }) => {
   return(
        <select value={value} onChange={onChange} required>
            <option disabled value=''>{placeholder}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ) )}
        </select>
   )
}

export default DropDown;