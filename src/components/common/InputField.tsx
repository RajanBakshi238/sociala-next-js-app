import { InputType } from "@/types/constants/INPUT_TYPES";
import React from "react"

interface IInputField {
    label?: string;
    placeholder?: string;
    type: InputType;
    value: string;
    onChange?: (value: string) => void;
}

const InputField: React.FC<IInputField> = ({ placeholder, label, type, value }) => {
    return <>
        <div>
            <input
                placeholder={placeholder}
                type={type}
                value={value}
            />
        </div>
    </>
}

export default InputField