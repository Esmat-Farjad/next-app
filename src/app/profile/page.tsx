"use client"
import Image from "next/image";
import Link from "next/link";
import { FaUserEdit } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

export default function Profile(){
    const personalDetails = false
    const slideForm = () =>{
        
    }
   return (<>
   <div className="section-container">
    <div className="text-center mb-10">
       <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300">Profile</h1>
       <small className="p-0 m-0 ">[this is the description section of the profile]</small>
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
            <div className="m-10">
                <p className="font-light my-5">Work Link</p>
                <Link href='/' className="block py-1"> 
                    <FcApproval className="inline-block mr-2 mb-1 text-lg"/>
                    <span className="text-gray-300 hover:text-white duration-300">Task Management software</span>
                </Link>
                <Link href='/' className="block py-1"> 
                    <FcApproval className="inline-block mr-2 mb-1 text-lg"/>
                    <span className="text-gray-300 hover:text-white duration-300">Online shopping Application</span>
                </Link>
                <Link href='/' className="block py-1"> 
                    <FcApproval className="inline-block mr-2 mb-1 text-lg"/>
                    <span className="text-gray-300 hover:text-white duration-300">E-Commerce software</span>
                </Link>
                <Link href='/' className="block py-1"> 
                    <FcApproval className="inline-block mr-2 mb-1 text-lg"/>
                    <span className="text-gray-300 hover:text-white duration-300">Med+ Medicine management software</span>
                </Link>
                <div className="my-10">
                <button className="btn-transparent">follow</button>
                <button className="btn-transparent">Message</button>
                </div>
            </div>
        </div>
        <div className="col-span-2 py-5">
            <h1 className="font-bold text-2xl">Esmatullah Hashimi</h1>
            <p className="text-sky-500 p-0 m-0">Full Stack web developer</p>
            <div className="my-10">
                <div className="border-b border-gray-500 py-3.5">
                    <span className="mr-3 border-b-2 border-sky-500 pb-4 px-3">
                        <Link href="/" >About</Link>
                    </span>
                    <span className="mr-3 hover:border-b-2 border-sky-500 pb-4 px-3">
                        <Link href="/" >Timeline</Link>
                    </span>
                    <span className="mr-3 hover:border-b-2 border-sky-500 pb-4 px-3">
                        <Link href="/" onClick={slideForm}>Edit Profile</Link>
                    </span>
                </div>
                <div className="grid grid-cols-3">
                    <div className="grid-cols-1">
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
                    <div className="grid col-span-2 font-bold">
                        <div className="font-bold mt-5 mx-5">
                            <p className="text-2xl">Personal Details</p>
                        </div>
                        <form action="#" className="p-5">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="first-col">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" id="username" name="username" className="form-input" />
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" className="form-input" />
                                </div>
                                <div className="first-col">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input type="text" id="fullname" name="fullname" className="form-input" />
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="text" id="mobile" name="mobile" className="form-input" />
                                </div>
                            </div>
                            <label htmlFor="profession">Profession</label>
                            <input type="text" id="profession" name="profession" className="form-input" />
                            <div className="text-center mt-10">
                                <button type="submit" className="btn-transparent">Update Profile</button>
                                <button type="reset" className="btn-transparent">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
   </div>
   </>);
}