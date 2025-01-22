import { LabelValueOption, TypesOptions } from './interfaces';

export const categoryOptions: LabelValueOption[] = [
    { label: "Small Electronics", value: "small" },
    { label: "Big Electronics", value: "big" },
]

export const typesOptions: TypesOptions = {
    small: [
        { label: "Headphones", value: "headphones" },
        { label: "Smartwatch", value: "smartwatch" },
        { label: "Portable Speaker", value: "portable_speaker" },
    ],
    big: [
        { label: "Television", value: "television" },
        { label: "Refrigerator", value: "refrigerator" },
        { label: "Washing Machine", value: "washing_machine" },
    ],
}