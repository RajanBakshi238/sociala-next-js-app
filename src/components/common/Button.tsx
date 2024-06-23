import ButtonSize, { ButtonSizeType } from "@/types/constants/ButtonSize";
import classNames from "classnames";

interface IButtonProps {
    label: string;
    className?: string;
    type?: "button" | "submit"
    size: ButtonSizeType
}

const Button: React.FC<IButtonProps> = ({ label, className, type = "button", size = ButtonSize.MD }) => {
    return <>
        <button type={type} className={classNames("relative", {
            "": size === ButtonSize.SM,
            "": size === ButtonSize.MD,
            "": size === ButtonSize.LG,

        }, className)}>
            {label}
        </button>
    </>
}