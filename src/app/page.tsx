import Image from "next/image";
import Link from "next/link";
// icons
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaStar, FaAngular, FaSass, FaNodeJs, FaNode } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbClockCheck } from "react-icons/tb";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaCode, FaPython, FaHeartCircleCheck } from "react-icons/fa6";
import { SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";
import { AiOutlineAntDesign, AiOutlineCloudServer, AiOutlineJavaScript, AiOutlineSafety } from "react-icons/ai";
import { DiDjango } from "react-icons/di";

export default function Home(){
    const technology = [
        {name:"Python", icon:<FaPython className='text-4xl inline fill-yellow-400'/>, text:"Versatile Programming Language for Everything", star:5},
        {name:"React Js", icon:<RiReactjsFill className='text-4xl inline fill-cyan-500' />, text:"Cutting-edge front-end tools", star:5},
        {name:"Next Js", icon:<RiNextjsFill className='text-4xl inline fill-white' />, text:"Seamless lightning-fast web development", star:5},
        {name:"Node Js", icon:<FaNodeJs className='text-4xl inline fill-green-500' />, text:"JavaScript Runtime for Server-Side Development", star:5},
        {name:"JavaScript", icon:<AiOutlineJavaScript className='text-4xl inline fill-yellow-400' />, text:"The Language of the Web", star:5},
        {name:"PostgreSQL", icon:<SiPostgresql className='text-4xl inline fill-sky-500' />, text:"Relational Database Management System", star:5},
        {name:"MySQL", icon:<SiMysql className='text-4xl inline fill-gray-400' />, text:"Open-Source Relational Database", star:5},
        {name:"MongoDB", icon:<SiMongodb className='text-4xl inline fill-green-500' />, text:"NoSQL Database for Modern Applications", star:5},
        {name:"Angular", icon:<FaAngular className='text-4xl inline fill-rose-600' />, text:"Frontend Framework for Dynamic Web Apps", star:5},
        {name:"Django", icon:<DiDjango className='text-4xl inline fill-green-500' />, text:"High-Level Python Web Framework", star:5},
        {name:"Sass", icon:<FaSass className='text-4xl inline fill-pink-600' />, text:"Syntactically Awesome Stylesheets", star:5},
        {name:"Tailwind CSS", icon:<RiTailwindCssFill className='text-4xl inline fill-cyan-600' />, text:"Utility-First CSS Framework", star:5},
    ]
    const posts = [
        {
            title:"Trending Technology", 
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ultrices nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. ", 
            pic:"/next.svg", 
            created_at:"24-04-2024"
        },
        {
            title:"Trending Technology", 
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ultrices nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. ", 
            pic:"/next.svg", 
            created_at:"24-04-2024"
        },
        {
            title:"Trending Technology", 
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ultrices nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. ", 
            pic:"/next.svg", 
            created_at:"24-04-2024"},
        {
            title:"Trending Technology", 
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ultrices nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. ", 
            pic:"/next.svg", 
            created_at:"24-04-2024"
        },
        {
            title:"Trending Technology", 
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ultrices nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. ", 
            pic:"/next.svg", 
            created_at:"24-04-2024"
        },
    ]
    const serviceData = [
        {
            id:"1",
            title: "Software Development",
            icon: <FaCode className="inline"/>,
            description: "Unlock your vision with our bespoke software solutions. Explore our expert software development services today!",
        },
        {
            id:"2",
            title: "Software Solutions",
            icon: <AiOutlineCloudServer className="inline"/>,
            description:  "Elevate your business with our tailored software solutions. Discover how our services can streamline your operations today!", 
        },
        {
            id:"3",
            title: "UX & UI",
            icon: <AiOutlineAntDesign className="inline"/>,
            description: "Crafting unforgettable user experiences starts here. Explore our top-tier UX/UI design services today!",
        }
    ]

    return (<>
        <div className="heading-container px-10 pt-10 bg-white h-100 bg-gradient-to-b from-indigo-900 to-pink-800 ">
           <p className="header-text text-white text-6xl font-bold text-center mt-10 pt-10 ">Welcome to my Portfolio</p>
           <p className="text-center sub-text">this is the subtext comes from the bottom of the page</p>
           <div className="feature-holder">
                <div className="grid gap-2 xl:grid-cols-4 sm:cols-1 xl:mx-20">
                    <div className="feature-customization">
                        <p className="font-bold"><AiOutlineSafety className="inline text-2xl mr-2"/>Security</p>
                        <p className="ml-8 text-xs">
                            Protect your data with our robust security features, 
                            including encryption, authentication, and access controls, 
                            ensuring your online presence remains safe and secure.
                        </p>
                    </div>
                    <div className="feature-customization">
                        <p className="font-bold"><MdOutlineMobileFriendly className="inline text-2xl mr-2"/>Flexibility</p>
                        <p className="ml-8 text-xs">
                        Experience unparalleled flexibility with our versatile 
                        features, empowering you to customize and adapt your online 
                        experience effortlessly to meet your unique needs and preferences.
                        </p>
                    </div>
                    <div className="feature-customization">
                        <p className="font-bold"><FaHeartCircleCheck className="inline text-2xl mr-2"/>Effeciency</p>
                        <p className="ml-8 text-xs">
                        Maximize efficiency with our streamlined features, 
                        designed to optimize workflows and streamline processes, 
                        so you can achieve more in less time.
                        </p>
                    </div>
                    <div className="feature-customization">
                        <p className="font-bold"><TbClockCheck className="inline text-2xl mr-2"/>Real-Time</p>
                        <p className="ml-8 text-xs">
                        Stay ahead with our real-time features, providing 
                        instant updates and responsiveness, ensuring you are 
                        always in sync with the latest information and developments.
                        </p>
                    </div>
                </div>
            </div>
        </div>

       <div className="section-container">
            <div className="grid xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-5">
                <div className="card grid-col-1 image-container">
                    <div className="rounded overflow-hidden shadow h-96">
                        <Image src="/profile.png" alt="profile" fill>
                        </Image>
                    </div>
                </div>
                <div className="xl:grid-cols-1 lg:grid-cols-1 p-5 sm:grid-cols-1 md:grid-cols-1 bio-graphy">
                    <div className="mr-5">
                        <h1 className="text-4xl font-bold">Esmatullah Hashimi</h1>
                        <h4 className="tex-lg mb-5 ">Full Stack Software developer</h4>
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
                        <small className="text-indigo-500">Join me on social media</small>
                        <div className="py-3 pr-3">
                            <Link href="/www.facebook.com"><FaFacebookF className="social-icon"/></Link>
                            <Link href="http://www.github.com/Esmat-Farjad"><FaGithub className="social-icon"/></Link>
                            <Link href="/www.instagram.com"><FaInstagram className="social-icon"/></Link>
                            <Link href="/www.gmail.com"><BiLogoGmail className="social-icon"/></Link>
                            <Link href="/www.twitter.com"><FaTwitter className="social-icon"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div className="services-section section-container">
            <div className="my-10 text-center">
                <p className="text-2xl font-bold">Services</p>
                <span className="text-sm">services provided for you</span>
            </div>
            <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-5">
                {serviceData.map((service, index) =>{
                    return (
                        <div key={index} className="p-5 rounded border-slate-600 hover:border duration-300">
                            <p className="font-bold capitalize">
                                <span className="text-2xl mr-2">{service.icon}</span>
                                <span className="text-xl">{service.title}</span>
                            </p>
                            <p className="pl-8">
                                <span className="text-sm">{service.description}</span>
                            </p>
                            <p className="text-xsm text-cyan-500 hover:font-bold duration-300 pl-8 my-2">
                                <Link href={`/${service.id}`}>learn more...</Link>
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
     
         <div className="section-container">
            <div className="text-2xl text-center my-10">
                <span className="text-2xl p-3 font-bold">Latest Project</span>
                <p className="pt-2 text-sm">this projects are completed or under development</p>
            </div>
            <div className="grid xl:grid-cols-5 sm:grid-cols-1 md:grid-cols-1 gap-5">
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

        <div className="section-container p-10">
            <div className="text-center my-10">
                <span className="text-2xl p-3 font-bold">Skills and Experties</span>
                <p className="pt-2 text-sm">We possess expertise in a diverse range of technologies within our professional domain</p>
            </div>
            <div className="grid xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-2 place-content-center">
                {technology.map((item, index) => {
                    return (
                        <div key={index} className="grid-cols-1 rounded border-gray-600 hover:border duration-300 p-3 text-center">
                            <div className="header">
                                <span className="icon">{item.icon}</span>
                                <h1 className="text-xl font-bold">{item.name}</h1>
                            </div>
                            <div className="description">
                                <p className="text-xs">{item.text}</p>
                                <div className="flex items-center mb-5 justify-center">
                                    {Array.from({length:item.star}).map((_, starIndex) =>(
                                        <FaStar key={starIndex} className="fill-yellow-400 text-md m-0.5"/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        <div className="section-container">
            <div className="text-center my-10">
                <p className="text-2xl font-bold p-3">Posts</p>
                <p className="pt-2 text-sm">We possess expertise in a diverse range of technologies within our professional domain</p>
            </div>
            <div className="grid xl:grid-cols-5 sm:grid-cols-1 md:grid-cols-1 gap-5">
                {posts.map((post, index) => {
                    return (
                        <div key={index} className="xl:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 border border-slate-600 rounded overflow-hidden card">
                            <div className="blur-cover">
                                <Image src={post.pic} alt="photo" width={400} height={280}></Image>
                                <div className="text-start p-3">
                                    <h1 className="font-bold mb-2">{post.title}</h1>
                                    <h4 className="text-sm">{post.text}</h4>
                                </div>
                                <small className="text-gray-600 p-3">
                                    <span className="font-bold mr-2 animate-pluse">updated at:</span> 
                                    {post.created_at}
                                </small>
                            </div>
                            <div className="absolute-cover flex justify-center items-center ">
                                <Link href="/blog" className="text-sm px-3 py-1 text-white border border-pink-500 animate-pulse rounded-full bg-pink-500 z-50">
                                    Learn more...
                                </Link>
                            </div>
                        </div>
                    );
                })}
                
            </div>

        </div>
        <div className="section-container">
            <div className="bg-slate-800 m-5 rounded-lg p-20">
                <h1 className="text-center text-4xl p-5 font-bold">Subscribe for our newsletter </h1>
                <p className="text-center mx-auto w-3/4 text-xl text-gray-500">
                Do you want to get notified when a new article is published ? 
                Sign up for our newsletter and you will be among the first to find out 
                about new articles, courses and features.
                </p>
                <div className="pt-5">
                    <div className="flex justify-center items-center ">
                        <form action="#" className="relative xl:w-1/2 lg:w-1/2 sm:w-full md:w-full flex">
                            <input type="text" className="subscribe-input" placeholder="Type your Email here..."/>
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
</>)
}