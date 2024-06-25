
import Image from "next/image";
import Link from "next/link";
import { FaUserEdit } from "react-icons/fa";
export const metadata = {
    title: "Profile",
    description: "Generated by Next.js",
};
export default function Profile(){
   return (<>
   <div className="section-container">
    <div className="text-center">
       <h1 className="font-bold text-2xl">Profile</h1>
       <small className="p-0 m-0">[this is the description section of the profile]</small>
    </div>
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 bg-gray-600 rounded p-5">
        <div className="grid-cols-1">
            <div className="flex justify-center items-center">
                <div className="inline-block relative">
                    <Image src="/profile.png" 
                    className="border border-gray-600 rounded " 
                    width={250} height={150} alt="user profile">
                    </Image>
                    <div className="absolute top-90 bottom-0 left-0 right-0 inline bg-gray-900/75 p-1">
                    <p className="text-center text-sm text-white">
                        <Link href="/">
                            <FaUserEdit className="inline mr-1 pb-1"/>change photo
                        </Link>
                    </p>
                    </div>
                </div>
                
            </div>
            <div className="text-center">
                <h1 className="font-bold">Your Name</h1>
                <p className="">this is the description</p>
                <p className="">Address description</p>
                <button className="btn-transparent">follow</button>
                <button className="btn-transparent">Message</button>
            </div>
        </div>
        <div className="col-span-2">
            <h1 className="font-bold text-2xl">Esmatullah Hashimi</h1>
            <p className="text-sky-500 p-0 m-0">Full Stack web developer</p>
            <div className="">
                <div className="border-b border-gray-500 py-3.5">
                    <span className="mr-3 border-b-2 border-sky-500 pb-4 px-3">
                        <Link href="/" >About</Link>
                    </span>
                    <span className="mr-3 hover:border-b-2 border-sky-500 pb-4 px-3">
                        <Link href="/" >Timeline</Link>
                    </span>
                </div>
                <div className="grid grid-cols-2">
                    <div className="">
                        <div className="my-3">
                            <p className="font-bold">User ID</p>
                            <p className="text-gray-300 border-b border-gray-500">username</p>
                        </div>
                        <div className="my-3">
                            <p className="font-bold">Full Name</p>
                            <p className="text-gray-300 border-b border-gray-500">your name</p>
                        </div>
                        <div className="my-3">
                            <p className="font-bold">Email</p>
                            <p className="text-gray-300 border-b border-gray-500">user.name@gmail.com</p>
                        </div>
                        <div className="my-3">
                            <p className="font-bold">Contact</p>
                            <p className="text-gray-300 border-b border-gray-500">+93 (0) 74 862 1879</p>
                        </div>
                        <div className="my-3">
                            <p className="font-bold">Profession</p>
                            <p className="text-gray-300 border-b border-gray-500">Software Developer</p>
                        </div>
                    </div>
                    <div className="font-bold">
                    </div>
                </div>
            </div>
        </div>
        
    </div>
   </div>
   </>);
}