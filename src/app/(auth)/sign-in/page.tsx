import InputField from "@/components/common/InputField";
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
                    
                </div>
            </div>
        </div>
    </div>
}