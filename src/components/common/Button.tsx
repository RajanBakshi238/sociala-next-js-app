import React from "react";
import classNames from "classnames";

import ButtonSize, { ButtonSizeType } from "@/types/constants/ButtonSize";

interface IButtonProps {
    className?: string;
    type?: "button" | "submit"
    size?: ButtonSizeType
    children: React.ReactNode
}

const Button: React.FC<IButtonProps> = ({ children, className, type = "button", size = ButtonSize.MD }) => {
    return <>
        <button type={type} className={classNames("relative text-center border-2 w-full border-[#999] font-semibold hover:bg-primary hover:text-[#fff] hover:border-primary", {
            "": size === ButtonSize.SM,
            "rounded-md p-2": size === ButtonSize.MD,
            "rounded-lg p-4": size === ButtonSize.LG,

        }, className)}>
            {children}
        </button>
    </>
}

export default Button;