
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export const metadata = {
    title: "Auth",
    description: "Generated by Next.js",
};
export default function Login(){
    
    return <div className="">
        <div className="mt-20">
            <div className="grid justify-items-center" id="alert-box">
                <div className="text-emerald-700 bg-emerald-200 shadow rounded-md p-4 w-1/3">
                   <p className="relative">
                   <FaCircleCheck className="text-xl inline mx-2"/>
                    <small>
                        Invalid username or password
                    </small>
                    <span className="absolute top-50 right-0 cursor-pointer hover:opacity-75"><IoClose/></span>
                   </p>
                </div>
            </div>
            <div className="grid justify-items-center" id="alert-box">
                <div className="text-rose-700 bg-rose-200 shadow rounded-md p-4 w-1/3">
                    <p className="relative">
                    <IoCloseCircle className="text-xl inline mx-2"/>
                    <small>
                        Invalid username or password
                    </small>
                    <span className="absolute top-50 right-0 cursor-pointer hover:opacity-75"><IoClose/></span>
                    </p>
                </div>
            </div>
            <div className="text-center py-5">
                <h1 className="text-2xl font-bold">Sign In</h1>
                <span>to continue to your account please sign in</span>
            </div>
            <form action="#" className="my-10 login-form flex flex-col justify-center items-center">
                <div className="mb-5 grid w-1/4">
                    <label htmlFor="username" className="">username</label>
                    <input type="text" className=" form-input" placeholder="username"/>
                    <label htmlFor="password" className=" mt-3">username</label>
                    <input type="password" className="form-input" placeholder="password" />
                </div>
                <button className="btn-transparent mt-5">Sign in</button>
                <div className="mt-5">
                    <p>please accept 
                    <Link href="./register" className="ms-2 text-blue-300 hover:text-blue-500">privacy & policy of use</Link> 
                    </p>
                    <p>Do not have an account ? 
                        <Link href="./register" className="ms-2 hover:text-sky-400 underline">lets create one</Link> 
                        <p className="text-center"><Link href="./forgot-password" className="text-red-500">forgot password?</Link></p>
                    </p>
                    
                </div>
            </form>
        </div>
    </div>;
}