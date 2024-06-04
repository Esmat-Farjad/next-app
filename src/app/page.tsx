import Image from "next/image";
import Link from "next/link";
// icons
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { CgPhone } from "react-icons/cg";
import { FaLocationCrosshairs } from "react-icons/fa6";
export default function Home(){
    const blogId = 100
    const carouselData = [
        {src: "/next.svg", alt:"skill", width:500, height:400},
        {src: "/vercel.svg",alt:"skill", width:500, height:400},
    ]
   
    return <div>
        <div className="heading-container p-10 bg-white h-96 bg-gradient-to-b from-indigo-900 to-pink-800">
            {/* <Image src='next.svg' alt="this is the picture" width={100} height={100}/> */}
           <p className="text-white text-6xl font-bold text-center mt-10 pt-10">Welcome to my Portfolio</p>
           <div className="text-center">this is the subtext comes from the bottom of the page</div>
           
        </div>
        <div className="grid xl:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 p-10 gap-5 xl:mx-20 md:mx-10 sm:mx-10">
            <div className="card grid-col-1 image-container shadow-effect">
                <div className="border border-gray-500 rounded overflow-hidden shadow">
                    <Image src="/profile.jpg" alt="profile" width={550} height={700}></Image>
                </div>
            </div>
            <div className="xl:col-span-4 sm:grid-cols-1 info-container shadow-effect p-5 rounded">
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
                <span className="text-4xl p-3 font-bold">Latest Project</span>
                <p className="pt-2">this projects are completed or under development</p>
            </div>
            <div className="grid xl:grid-cols-5 sm:grid-cols-1 md:grid-cols-1 p-10 gap-5 xl:mx-20 sm:mx-10 md:mx-10">
                <div className="xl:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 shadow-effect rounded overflow-hidden card">
                    <div className="blur-cover">
                        <Image src="/project.avif" alt="photo" width={350} height={280}></Image>
                        <p className="text-center p-5">
                            <p className="font-bold">Project tile</p>
                            <p className="text-sm">project description</p>
                        </p>
                    </div>
                    <div className="absolute-cover flex justify-center items-center ">
                        <Link href="/profile" className="text-2xl p-2 text-white border border-pink-500 rounded-full bg-pink-500 z-50">
                            <RxOpenInNewWindow/>
                        </Link>
                    </div>
                </div>
                <div className="xl:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 shadow-effect rounded overflow-hidden card">
                    <div className="blur-cover">
                        <Image src="/project.avif" alt="photo" width={350} height={280}></Image>
                        <p className="text-center p-5">
                            <p className="font-bold">Project tile</p>
                            <p className="text-sm">project description</p>
                        </p>
                    </div>
                    <div className="absolute-cover flex justify-center items-center ">
                        <Link href="/profile" className="text-2xl p-2 text-white border border-pink-500 rounded-full bg-pink-500 z-50">
                            <RxOpenInNewWindow/>
                        </Link>
                    </div>
                </div>
                <div className="xl:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 shadow-effect rounded overflow-hidden card">
                    <div className="blur-cover">
                        <Image src="/project.avif" alt="photo" width={350} height={280}></Image>
                        <p className="text-center p-5">
                            <p className="font-bold">Project tile</p>
                            <p className="text-sm">project description</p>
                        </p>
                    </div>
                    <div className="absolute-cover flex justify-center items-center ">
                        <Link href="/profile" className="text-2xl p-2 text-white border border-pink-500 rounded-full bg-pink-500 z-50">
                            <RxOpenInNewWindow/>
                        </Link>
                    </div>
                </div>
                <div className="xl:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 shadow-effect rounded overflow-hidden card">
                    <div className="blur-cover">
                        <Image src="/project.avif" alt="photo" width={350} height={280}></Image>
                        <p className="text-center p-5">
                            <p className="font-bold">Project tile</p>
                            <p className="text-sm">project description</p>
                        </p>
                    </div>
                    <div className="absolute-cover flex justify-center items-center ">
                        <Link href="/profile" className="text-2xl p-2 text-white border border-pink-500 rounded-full bg-pink-500 z-50">
                            <RxOpenInNewWindow/>
                        </Link>
                    </div>
                </div>
                <div className="xl:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 shadow-effect rounded overflow-hidden card">
                    <div className="blur-cover">
                    <Image src="/project.avif" alt="photo" objectFit="cover" width={350} height={280}></Image>
                   
                        <p className="text-center p-5">
                            <p className="font-bold">Project tile</p>
                            <p className="text-sm">project description</p>
                        </p>
                    </div>
                    <div className="absolute-cover flex justify-center items-center ">
                        <Link href="/profile" className="text-2xl p-2 text-white border border-pink-500 rounded-full bg-pink-500 z-50">
                            <RxOpenInNewWindow/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-10 gap-5 mx-20 my-10">
            <div className="text-center">
                <p className="text-4xl font-bold">Skills & Experties</p>
            </div>
            <div className="grid grid-cols-4 place-content-center gap-5 my-5">
                <div className="skills">
                    <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-blue-700 dark:text-white">Python</span>
                    <span className="text-sm font-medium text-blue-700 dark:text-white">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full progress-bar"></div>
                    </div>
                </div>

                <div className="skills">
                    <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-blue-700 dark:text-white">Javascript</span>
                    <span className="text-sm font-medium text-blue-700 dark:text-white">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full progress-bar"></div>
                    </div>
                </div>

                <div className="skills">
                    <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-blue-700 dark:text-white">Next Js</span>
                    <span className="text-sm font-medium text-blue-700 dark:text-white">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full progress-bar"></div>
                    </div>
                </div>

                <div className="skills">
                    <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-blue-700 dark:text-white">React Js</span>
                    <span className="text-sm font-medium text-blue-700 dark:text-white">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full progress-bar"></div>
                    </div>
                </div>
            </div>
        </div>
        {/* contact me */}
        <div className="contact-section p-10 gap-5 mx-20 my-10">
            <div className="heading text-center">
                <p className="text-4xl font-bold">Contact me</p>
                <span className="">feel free to contact me</span>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-10">
                <div className="border border-cyan-500 rounded shadow-xl shadow-cyan-500 p-5 contact-holder2">
                    <p className="text-center text-2xl pt-10">Contact Information</p>
                    <ul className="my-5">
                        <li className="p-4">
                            <BiLogoGmail className="inline text-2xl"/> 
                            <span className="mx-2">esmatullah@gmail.com</span>
                        </li>
                        <li className="p-4">
                            <CgPhone className="inline text-2xl"/>
                            <span className="mx-2">+93 (0) 74 862 1879</span>
                        </li>
                        <li className="p-4">
                            <FaLocationCrosshairs className="text-2xl inline"/>
                            <span className="mx-2">House No.12, Imam Reza path, Shaheed Mazari Road, Kabul, Afghanistn</span>
                        </li>
                    </ul>
                </div>
                <div className="rounded p-5 shadow-effect contact-holder1">
                    <p className="text-center text-2xl pt-10">Query</p>
                    <form action="#" className="flex flex-col mx-10">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" className="form-input" id="fullname"/>
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-input" id="email"/>
                        
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="message" rows={4} className="form-input" placeholder="Write your thoughts here..."></textarea>
                        <button type="submit" className="btn-transparent my-10 w-24">Submit</button>
                    </form>
                </div>
            </div>
        </div>
</div> 

}