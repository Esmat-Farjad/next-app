
import Image from "next/image";
import Link from "next/link";
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
    <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-2">
        <div className="bg-gray-600 rounded p-5">
            <div className="flex justify-center items-center">
                <Image src="/offer.svg" className="rounded-full border p-3" width={100} height={100} alt="user profile"></Image>
            </div>
            <div className="text-center">
                <h1 className="font-bold">Your Name</h1>
                <p className="">this is the description</p>
                <p className="">Address description</p>
                <button className="btn-transparent">follow</button>
                <button className="btn-transparent">Message</button>
            </div>
        </div>
        <div className="bg-gray-600 rounded p-5">
            <h1 className="font-bold text-2xl">Esmatullah Hashimi</h1>
            <p className="text-sky-500 p-0 m-0">Full Stack web developer</p>
            <div className="">
                <Link href="/" className="mr-3 border-b-4 border-sky-500 p-4">About</Link>
                <Link href="/" className="mr-3 hover:border-b-4 border-sky-500 p-4">Timeline</Link>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-500"/>
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