import RegisterModal from "@/components/auth/RegisterModal";
import Button from "@/components/common/Button";
import InputField from "@/components/common/InputField";
import ButtonSize from "@/types/constants/ButtonSize";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Page() {
    return <div className="grid grid-cols-2 h-100">
        <div className='h-screen bg-cover bg-[url("../../public/images/login-bg.jpg")]'>
        </div>
        <div className="h-screen flex items-center justify-center">
            <div className="w-[50%]">
                <div className="mb-4">
                    <h1 className="font-bold text-3xl">Login into your account</h1>
                </div>
                <div>
                    <div className="mb-3">
                        <InputField type="email" placeholder="Your Email Address" Icon={MdOutlineMailOutline} />
                    </div>
                    <div className="mb-3">
                        <InputField type="password" placeholder="Password" Icon={RiLockPasswordLine} />
                    </div>
                    <div className="mb-3 flex justify-between">
                        <div className="">

                        </div>
                        <span className="text-sm font-semibold text-[#343A40] cursor-pointer">Forgot your Password ?</span>
                    </div>
                    <div className="mb-3">
                        <Button className="bg-[#343A40] text-[#fff] border-none" size={ButtonSize.LG}>Login</Button>
                    </div>
                </div>
                {/* <h6 className="text-sm font-semibold text-light-grey mb-6">
                    Don't have account <span className="text-sociala-primary font-bold">Register</span>
                </h6> */}
                <RegisterModal />
                <div className="">
                    <h6 className="text-sm text-center font-semibold text-light-grey mb-3">Or, Sign in with your social account</h6>
                    <Button size="lg" className="mb-3 bg-sociala-primary text-[#fff] border-none">Sign in with Google</Button>
                    <Button size="lg" className="bg-[#3b5999] text-[#fff] border-none">Sign in witth Facebook</Button>

                </div>
            </div>
        </div>
    </div>
}