"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { FaUserTie } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import InputField from "../common/InputField"
import Button from "../common/Button";
import ButtonSize from "@/types/constants/ButtonSize";

interface IRegisterForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}


const RegisterModal = () => {
    const { register, handleSubmit, formState } = useForm<IRegisterForm>()

    const onSubmit: SubmitHandler<IRegisterForm> = (data) => console.log(data);

    console.log(formState.validatingFields,">>>>>>>> ")

    return <>
        <Dialog>
            <DialogTrigger asChild>
                <h6 className="text-sm font-semibold text-light-grey mb-6">
                    Don't have account <span className="text-sociala-primary font-bold cursor-pointer">Register</span>
                </h6>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h1 className="font-bold text-3xl mb-3"> Create your account</h1>
                        <div className="mb-3">
                            <InputField type="text" placeholder="Your Name" Icon={FaUserTie} {...register("name")} />
                        </div>
                        <div className="mb-3">
                            <InputField type="email" placeholder="Your Email Address" Icon={MdOutlineMailOutline} {...register("email")} />
                        </div>
                        <div className="mb-3">
                            <InputField type="password" placeholder="Password" Icon={RiLockPasswordLine} {...register("password")} />
                        </div>
                        <div className="mb-3">
                            <InputField type="password" placeholder="Confirm Password" Icon={RiLockPasswordLine} {...register("confirmPassword")} />
                        </div>

                        <div className="mb-3">
                            <Button type="submit" className="bg-[#343A40] text-[#fff] border-none" size={ButtonSize.LG}>Register</Button>
                        </div>

                        <h6 className="text-sm font-semibold text-light-grey mb-6">
                            Already have account <span className="text-sociala-primary font-bold cursor-pointer">Login</span>
                        </h6>

                        <div className="">
                            <h6 className="text-sm text-center font-semibold text-light-grey mb-3">Or, Sign in with your social account</h6>
                            <Button size="lg" className="mb-3 bg-sociala-primary text-[#fff] border-none">Sign in with Google</Button>
                            <Button size="lg" className="bg-[#3b5999] text-[#fff] border-none">Sign in witth Facebook</Button>
                        </div>
                    </div>
                </form>
                {/* <DialogClose asChild>
                    Close
                </DialogClose> */}
            </DialogContent>
        </Dialog>
    </>
}


export default RegisterModal