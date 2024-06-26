import React from "react"
import classNames from "classnames";

import { InputType } from "@/types/constants/InputTypes";
import { IconType } from "react-icons";

interface IInputFieldProps {
    label?: string;
    placeholder?: string;
    type: InputType;
    value?: string;
    className?: string;
    Icon?: IconType
    // onChange?: (value: string) => void;
    [key: string]: any
}

const InputField: React.FC<IInputFieldProps> = React.forwardRef<HTMLInputElement, IInputFieldProps>(({ placeholder, label, type, value, className, Icon, ...props }, ref) => {
    return <div className="relative">
        {/* <MdOutlineMailOutline className="absolute top-1/2 translate-x-4 -translate-y-1/2 text-[#999] text-xl"/> */}
        {Icon && <Icon className="absolute top-1/2 translate-x-4 -translate-y-1/2 text-[#999] text-xl" />}
        <input
            className={
                classNames("w-full border-2 p-3 border-solid border-[#999] rounded text-sm focus:border-sociala-primary focus:outline-sociala-primary", className, { "pl-12": !!Icon })
            }
            placeholder={placeholder}
            type={type}
            // value={value}
            ref={ref}
            {...props}
        />
    </div>
}
)


export default InputField