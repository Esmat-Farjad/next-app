import Image from "next/image";
import Link from "next/link";
// icons
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { RxOpenInNewWindow } from "react-icons/rx";
import { CgPhone } from "react-icons/cg";
import { TbClockCheck } from "react-icons/tb";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { FaLocationCrosshairs, FaCode, FaPython, FaHeartCircleCheck } from "react-icons/fa6";
import { AiOutlineAntDesign, AiOutlineCloudServer, AiOutlineJavaScript, AiOutlineSafety } from "react-icons/ai";
export default function Home(){
    const blogId = 100
    const carouselData = [
        {src: "/next.svg", alt:"skill", width:500, height:400},
        {src: "/vercel.svg",alt:"skill", width:500, height:400},
    ]
   
    return <div>
        <div className="heading-container px-10 pt-10 bg-white h-100 bg-gradient-to-b from-indigo-900 to-pink-800 ">
            {/* <Image src='next.svg' alt="this is the picture" width={100} height={100}/> */}
           <p className="header-text text-white text-6xl font-bold text-center mt-10 pt-10 ">Welcome to my Portfolio</p>
           <div className="text-center sub-text">this is the subtext comes from the bottom of the page</div>
           <div className="feature-holder">
                <div className="grid gap-2 xl:grid-cols-4 sm:cols-1 xl:mx-20">
                    <div className="feature-customization">
                        <p className="font-bold">
                            <AiOutlineSafety className="inline text-2xl mr-2"/>Security
                        </p>
                        <p className="ml-8 text-xs">
                            Protect your data with our robust security features, including encryption, authentication, and access controls, ensuring your online presence remains safe and secure.
                        </p>
                    </div>
                    <div className="feature-customization">
                        <p className="font-bold">
                            <MdOutlineMobileFriendly className="inline text-2xl mr-2"/>Flexibility
                        </p>
                        <p className="ml-8 text-xs">
                        Experience unparalleled flexibility with our versatile features, empowering you to customize and adapt your online experience effortlessly to meet your unique needs and preferences.
                        </p>
                    </div>
                    <div className="feature-customization">
                        <p className="font-bold">
                            <FaHeartCircleCheck className="inline text-2xl mr-2"/>Effeciency
                        </p>
                        <p className="ml-8 text-xs">
                        Maximize efficiency with our streamlined features, designed to optimize workflows and streamline processes, so you can achieve more in less time.
                        </p>
                    </div>
                    <div className="feature-customization">
                        <p className="font-bold">
                            <TbClockCheck className="inline text-2xl mr-2"/>Real-Time
                        </p>
                        <p className="ml-8 text-xs">
                        Stay ahead with our real-time features, providing instant updates and responsiveness, ensuring you are always in sync with the latest information and developments.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* about */}
        <div className="section-container">
            <div className="grid xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-5">
                <div className="card grid-col-1 image-container">
                    <div className="rounded overflow-hidden shadow h-96">
                        <Image src="/profile.png" alt="profile" fill></Image>
                    </div>
                </div>
                <div className="xl:grid-cols-1 p-5 sm:grid-cols-1 md:grid-cols-1 info-container ">
                    <div className="mr-5">
                        <p className="text-4xl font-bold">Esmatullah Hashimi</p>
                        <p className="tex-lg mb-5 antialiased hover:subpixel-antialiased">Full Stack Software developer</p>
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
        </div>
        {/* services */}
        <div className="services-section section-container">
            <div className="my-10 text-center">
                <p className="text-2xl font-bold">Services</p>
                <span className="">services provided for you</span>
            </div>
            <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-5">
                <div className="p-5 rounded border-slate-600 hover:border duration-300">
                    <p className="font-bold capitalize">
                        <span className="text-2xl mr-2"><FaCode className="inline"/></span>
                        <span className="text-xl">[service name]</span>
                    </p>
                    <p className="pl-8">
                        <span className="text-sm">
                        Donec ac ex et diam eleifend molestie.
                        Vestibulum auctor rutrum viverra. Suspendisse pulvinar vehicula auctor. 
                        Phasellus sed pretium arcu. 
                        </span>
                    </p>
                    <p className="text-xsm text-cyan-500 hover:font-bold duration-300 pl-8 my-2">
                        <Link href="/">learn more...</Link>
                    </p>
                </div>
                <div className="p-5 rounded border-slate-600 hover:border duration-300">
                    <p className="font-bold capitalize">
                        <span className="text-2xl mr-2"><AiOutlineCloudServer className="inline"/></span>
                        <span className="text-xl">[service name]</span>
                    </p>
                    <p className="pl-8">
                        <span className="text-sm">
                        Donec ac ex et diam eleifend molestie.
                        Vestibulum auctor rutrum viverra. Suspendisse pulvinar vehicula auctor. 
                        Phasellus sed pretium arcu. 
                        </span>
                    </p>
                    <p className="text-xsm text-cyan-500 hover:font-bold duration-300 pl-8 my-2">
                        <Link href="/">learn more...</Link>
                    </p>
                </div>
                <div className="p-5 rounded border-slate-600 hover:border duration-300">
                    <p className="font-bold capitalize">
                        <span className="text-2xl mr-2"><AiOutlineAntDesign className="inline"/></span>
                        <span className="text-xl">[service name]</span>
                    </p>
                    <p className="pl-8">
                        <span className="text-sm">
                        Donec ac ex et diam eleifend molestie.
                        Vestibulum auctor rutrum viverra. Suspendisse pulvinar vehicula auctor. 
                        Phasellus sed pretium arcu. 
                        </span>
                    </p>
                    <p className="text-xsm text-cyan-500 hover:font-bold duration-300 pl-8 my-2">
                        <Link href="/">learn more...</Link>
                    </p>
                </div>
            </div>
        </div>
        {/* services */}
        {/* project section */}
        <div className="section-container">
            <div className="text-2xl text-center my-10">
                <span className="text-2xl p-3 font-bold">Latest Project</span>
                <p className="pt-2">this projects are completed or under development</p>
            </div>
            <div className="grid xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-1 gap-5">
                <div className="xl:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 border border-slate-600 rounded overflow-hidden card">
                    <div className="blur-cover">
                        <Image src="/project.avif" alt="photo" width={400} height={280}></Image>
                        <div className="text-center p-5">
                            <h1 className="font-bold">Project tile</h1>
                            <h4 className="text-sm">project description</h4>
                        </div>
                    </div>
                    <div className="absolute-cover flex justify-center items-center ">
                        <Link href="/profile" className="text-2xl p-2 text-white border border-pink-500 rounded-full bg-pink-500 z-50">
                            <RxOpenInNewWindow/>
                        </Link>
                    </div>
                </div>
                <div className="xl:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 border border-slate-600 rounded overflow-hidden card">
                    <div className="blur-cover">
                        <Image src="/project.avif" alt="photo" width={400} height={280}></Image>
                        <div className="text-center p-5">
                            <h1 className="font-bold">Project tile</h1>
                            <h4 className="text-sm">project description</h4>
                        </div>
                    </div>
                    <div className="absolute-cover flex justify-center items-center ">
                        <Link href="/profile" className="text-2xl p-2 text-white border border-pink-500 rounded-full bg-pink-500 z-50">
                            <RxOpenInNewWindow/>
                        </Link>
                    </div>
                </div>
                <div className="xl:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 border border-slate-600 rounded overflow-hidden card">
                    <div className="blur-cover">
                        <Image src="/project.avif" alt="photo" width={400} height={280}></Image>
                        <div className="text-center p-5">
                            <h1 className="font-bold">Project tile</h1>
                            <h4 className="text-sm">project description</h4>
                        </div>
                    </div>
                    <div className="absolute-cover flex justify-center items-center ">
                        <Link href="/profile" className="text-2xl p-2 text-white border border-pink-500 rounded-full bg-pink-500 z-50">
                            <RxOpenInNewWindow/>
                        </Link>
                    </div>
                </div>
                <div className="xl:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 border border-slate-600 rounded overflow-hidden card">
                    <div className="blur-cover">
                        <Image src="/project.avif" alt="photo" width={400} height={280}></Image>
                        <div className="text-center p-5">
                            <h1 className="font-bold">Project tile</h1>
                            <h4 className="text-sm">project description</h4>
                        </div>
                    </div>
                    <div className="absolute-cover flex justify-center items-center ">
                        <Link href="/profile" className="text-2xl p-2 text-white border border-pink-500 rounded-full bg-pink-500 z-50">
                            <RxOpenInNewWindow/>
                        </Link>
                    </div>
                </div>
                <div className="xl:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 border border-slate-600 rounded overflow-hidden card">
                    <div className="blur-cover">
                        <Image src="/project.avif" alt="photo" objectFit="cover" width={400} height={280}></Image>
                        <div className="text-center p-5">
                            <h1 className="font-bold">Project tile</h1>
                            <h4 className="text-sm">project description</h4>
                        </div>
                    </div>
                    <div className="absolute-cover flex justify-center items-center ">
                        <Link href="/profile" className="text-2xl p-2 text-white border border-pink-500 rounded-full bg-pink-500 z-50">
                            <RxOpenInNewWindow/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-container">
            <div className="text-center">
                <p className="text-4xl font-bold">Skills & Experties</p>
            </div>
            <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-5">
                <div className="skills">
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-blue-700 dark:text-white">
                            <FaPython className="inline text-2xl mr-2"/>Python
                        </span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full progress-bar"></div>
                    </div>
                </div>

                <div className="skills">
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-blue-700 dark:text-white">
                            <AiOutlineJavaScript className="text-2xl mr-2 inline"/>Javascript
                        </span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full progress-bar"></div>
                    </div>
                </div>

                <div className="skills">
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-blue-700 dark:text-white">
                            <RiNextjsFill className="text-2xl mr-2 inline"/>Next Js
                        </span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full progress-bar"></div>
                    </div>
                </div>

                <div className="skills">
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-blue-700 dark:text-white">
                            <RiReactjsFill className="inline text-2xl mr-2"/>React Js
                        </span>
                    <span className="text-sm font-medium text-blue-700 dark:text-white">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full progress-bar"></div>
                    </div>
                </div>
            </div>
        </div>
        {/* contact me */}
        <div className="section-container">
            <div className="bg-slate-800 m-5 p-5 rounded-lg p-24">
                <h1 className="text-center text-4xl p-5 font-bold">Subscribe for our newsletter </h1>
                <p className="text-center mx-auto w-3/4 text-lg text-gray-500">
                Do you want to get notified when a new article is published ? Sign up for our newsletter and you will be among the first to find out about new articles, courses and features.
                </p>
                <div className="pt-5">
                    <div className="flex justify-center items-center ">
                        <form action="#" className="relative xl:w-1/2 lg:w-1/2 sm:w-full md:w-full flex">
                            <input type="text" className="subscribe-input" placeholder="Enter your Email"/>
                            <div className="absolute top-4 left-4">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                            </div>
                            <button className="bg-gradient-to-r rounded-lg xl:px-3 lg:px-2 sm:px-1 rounded-l-none from-pink-500 to-rose-500">Subscribe</button>
                        </form>
                    </div>
                    <div className="text-sm text-center text-gray-500">
                        <p>We care about the protection of your data. Read our 
                            <Link href="/" className="hover:text-cyan-500 duration-300"> Privacy Policy</Link>
                        .</p>
                    </div>
                </div>
            </div>
        </div>
</div> 

}