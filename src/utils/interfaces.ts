import { ChangeEvent } from "react";

export interface LabelValueOption {
    label: string;
    value: string;
}

export interface TypesOptions {
    [key: string]: LabelValueOption[];
}

export interface Option {
    label: string;
    value: string;
}

export interface DropDownProps {
    value: string;
    onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
    options: Option[];
}