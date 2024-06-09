"use client" //declaring this page as client page 
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEyeSlash } from "react-icons/fa";


export default function Register(){
    const router = useRouter();
    const handleClick = () => {
        console.log("redirecting to home page after registeration");
        router.push("/"); // redirecting to home page
        // router.replace("/"); replace the current url with the given url
        //router.back(); redirecting back to the previous page
        //router.forward(); redirecting forward the history

    }
    return <div>
        <div className="">
        <div className="mt-20">
            
            <div className="text-center py-5">
                <h1 className="text-2xl font-bold">Sign Up</h1>
                <span>Join Us Today! Create Your Account Here.</span>
            </div>
            <form action="#" className="flex flex-col justify-center items-center relative">
                <div className="grid w-1/4">
                    <label htmlFor="full-name" className="block mt-4">Full name</label>
                    <input type="text" className="form-input w-100" id="full-name" placeholder=" full name" />
                    <label htmlFor="email" className="block mt-4">Email</label>
                    <input type="email" className="form-input w-100" id="email" placeholder="example@gmail.com..."/>
                    <label htmlFor="password" className="block mt-4">password</label>
                    <input type="password" className="form-input w-100" id="password" placeholder="password"/>
                    <label htmlFor="confirm-password" className="block mt-4">confirm password</label>
                    <input type="password" className="form-input w-100" id="confirm-password" placeholder="Re-enter your password"/>
                    
                </div>
               
                <div className="grid my-10">
                    <button type="submit" className="btn-transparent">Sign Up</button>
                </div>
                <div className="mt-5">
                    <p>by registering yourself you will be agree to the  
                    <Link href="./register" className="ms-2 text-blue-300 hover:text-blue-500">privacy & policy of use</Link> 
                    </p>
                    <p>already have account ? 
                        <Link href="./login" className="ms-2 hover:text-sky-400 text-sky-300">Sign in</Link> 
                    </p>
                    
                </div>
            </form>
        </div>
    </div>;
    </div>;
}