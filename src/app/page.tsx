import Image from "next/image";
import Link from "next/link";
// icons
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

export default function Home(){
    const blogId = 100
   
    return <div>
        <div className="heading-container p-10 bg-white h-96 bg-gradient-to-b from-indigo-900 to-pink-800">
            {/* <Image src='next.svg' alt="this is the picture" width={100} height={100}/> */}
           <p className="text-white text-6xl font-bold text-center mt-10 pt-10">Welcome to my Portfolio</p>
           <div className="text-center">this is the subtext comes from the bottom of the page</div>
           
        </div>
        <div className="grid grid-cols-5 p-10 gap-5 mx-20">
            <div className="card grid-col-1 image-container">
                <div className="border border-gray-500 rounded overflow-hidden shadow">
                    <Image src="/profile.jpg" alt="profile" width={500} height={700}></Image>
                </div>
            </div>
            <div className="col-span-4 info-container">
                <div className="mr-5">
                    <p className="text-4xl font-bold">Esmatullah Hashimi</p>
                    <p className="tex-lg text-teal-500 mb-5">Full Stack Software developer</p>
                    <p className="">
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the 
                    industrys standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five 
                    centuries, but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with the release 
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className="text-pink-600">Join me on social media</p>
                    <p className="py-3 pr-3">
                        <Link href="/www.facebook.com"><FaFacebookF className="social-icon"/></Link>
                        <Link href="http://www.github.com/Esmat-Farjad"><FaGithub className="social-icon"/></Link>
                        <Link href="/www.instagram.com"><FaInstagram className="social-icon"/></Link>
                        <Link href="/www.gmail.com"><BiLogoGmail className="social-icon"/></Link>
                        <Link href="/www.twitter.com"><FaTwitter className="social-icon"/></Link>
                    </p>
                </div>
            </div>
        </div>
        {/* project section */}
        <div className="project-section">
            <div className="text-2xl text-center">
                <span className="text-4xl p-3 font-bold">Projects Completed</span>
                <p className="pt-2">this projects are completed or under development</p>
            </div>
            <div className="grid grid-cols-5 p-10 gap-5 mx-20">
                <div className="grid-cols-1 border rounded overflow-hidden">
                    <Image src="/project.avif" alt="photo" width={300} height={280}></Image>
                    <p className="text-center p-5">
                        <p className="font-bold">Project tile</p>
                        <p className="text-sm">project description</p>
                    </p>
                </div>
                <div className="grid-cols-1 border rounded overflow-hidden shadow">
                    <Image src="/project.avif" alt="photo" width={300} height={280}></Image>
                    <p className="text-center p-5">
                        <p className="font-bold">Project tile</p>
                        <p className="text-sm">project description</p>
                    </p>
                </div>
                <div className="grid-cols-1 border rounded overflow-hidden shadow">
                    <Image src="/project.avif" alt="photo" width={300} height={280}></Image>
                    <p className="text-center p-5">
                        <p className="font-bold">Project tile</p>
                        <p className="text-sm">project description</p>
                    </p>
                </div>
                <div className="grid-cols-1 border rounded overflow-hidden shadow">
                <Image src="/project.avif" alt="photo" width={300} height={280}></Image>
                    <p className="text-center p-5">
                        <p className="font-bold">Project tile</p>
                        <p className="text-sm">project description</p>
                    </p>
                </div>
                <div className="grid-cols-1 border rounded overflow-hidden shadow">
                    <Image src="/project.avif" alt="photo" width={300} height={280}></Image>
                    <p className="text-center p-5">
                        <p className="font-bold">Project tile</p>
                        <p className="text-sm">project description</p>
                    </p>
                </div>
            </div>
        </div>
        <div className="p-10 gap-5 mx-20">
            <div className="text-center">
                <p className="text-4xl font-bold">Skills & Experties</p>
            </div>
            <div className="grid grid-cols-6">
                <div className="grid-cols-1 skill-holder border rounded flex flex-col justify-center items-center">
                    <p className="font-bold">[skill name]</p>
                    <progress className="w-24 h-2 bg-blue-500"></progress>
                </div>
            </div>
        </div>
</div> 

}