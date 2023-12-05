import {HTMLInputTypeAttribute} from "react";
import { Field as FormikField } from "formik";

interface FieldProps {
    type: HTMLInputTypeAttribute;
    name: string;
    fieldName?: string;
}

export const Field = ({ type, name, fieldName }: FieldProps ) => {

    const firstNameUpperCase = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="font-bold text-white">{ fieldName ?? firstNameUpperCase }</label>
            <FormikField
                type={type}
                name={name}
                placeholder={fieldName ?? firstNameUpperCase}
                className="w-96 rounded-md p-2"
            />
        </div>
    )
}