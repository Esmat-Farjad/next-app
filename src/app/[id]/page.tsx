import serviceData, { ServiceType } from "../service";
import Image from "next/image";
import Link from "next/link";
import { PiMicrophone, PiMicrophoneStageFill, PiTrophy, PiUsers } from "react-icons/pi";
import { LiaAwardSolid } from "react-icons/lia";
import { IoBriefcaseOutline, IoDocumentText} from "react-icons/io5";
import { FiUploadCloud } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { RiWhatsappFill } from "react-icons/ri";
export default function ServicePage(
    {
        params:{id},
    }:{
        params: {id: string};
    }) {
        const photo: ServiceType = serviceData.find((p) => p.id === id) !;
    return <div className="">
        <div className="bg-gradient-to-b from-slate-600 to-slate-800 xl:px-44 sm:px-10 py-10">
            <div className="grid xl:grid-cols-6 sm:grid-cols-1">
                <div className="col-span-2 p-3">
                    <ul>
                        <li className="my-5">
                            <div className="flex">
                                <div className="p-2">
                                    <PiTrophy className="text-3xl"/>
                                </div>
                                <div className="">
                                    <p className="font-bold p-0 m-0 text-lg">5 years in IT</p>
                                    <p className="pt-0 m-0 text-md font-thin">delivering project success no matter what</p>
                                </div>
                            </div>
                        </li>
                        <li className="my-5">
                            <div className="flex">
                                <div className="p-2">
                                    <LiaAwardSolid className="text-3xl"/>
                                </div>
                                <div className="">
                                    <p className="font-bold p-0 m-0 text-lg">Project Management Office</p>
                                    <p className="pt-0 m-0 text-md font-thin">to ensure service quality and reduced project costs</p>
                                </div>
                            </div>
                        </li>
                        <li className="my-5">
                            <div className="flex">
                                <div className="p-2">
                                    <IoBriefcaseOutline className="text-3xl"/>
                                </div>
                                <div className="">
                                    <p className="font-bold p-0 m-0 text-lg">Around 10+ success stories</p>
                                    <p className="pt-0 m-0 text-md font-thin">
                                        includding projects for Business and Industries.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="my-5">
                            <div className="flex">
                                <div className="p-2">
                                    <PiUsers className="text-3xl"/>
                                </div>
                                <div className="">
                                    <p className="font-bold p-0 m-0 text-lg">Over 10 specialists</p>
                                    <p className="pt-0 m-0 text-md font-thin">who love what they do</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-span-3">
                    <div className="flex bg-gray-700">
                        <div className="">
                            <Image src="/image.png" alt="team image" width={500} height={300}></Image>
                        </div>
                        <div className="p-3">
                            <h1 className="text-xl font-bold">Talk to the solution team</h1>
                            <p className="my-2">
                                Get your question answered by our 
                                <span className="font-bold">consultants, architects, and project managers, </span>
                                 bypassing the usual sales pitch.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-slate-600 to-slate-400 p-3">
                        <form action="#">
                            <textarea name="proposal" id="proposal" className="form-input" 
                            placeholder="Please describe your request - we usually respond within 1 hour on business days.">
                            </textarea>
                            
                            <div className="flex items-center justify-center w-full my-1">
                                <label 
                                htmlFor="dropzone-file" 
                                className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400"> (MAX. 2.0 MB)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div> 
                            <p className="font-thin p-2">
                                <FiUploadCloud className="inline mr-2 text-2xl"/>
                                Drap and drop or browse to upload your file(s)
                            </p>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="grid-cols-1">
                                    <input type="text" className="form-input" placeholder="Full Name"/>
                                </div>
                                <div className="grid-cols-1">
                                <input type="text" className="form-input" placeholder="Company"/>
                                </div>
                                <div className="grid-cols-1">
                                <input type="text" className="form-input" placeholder="Work email"/>
                                </div>
                                <div className="grid-cols-1">
                                <input type="text" className="form-input" placeholder="Phone"/>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn-transparent mt-4">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="grid-cols-1">
                    <div className="bg-gradient-to-b from-slate-600 to-slate-500 p-3 h-full">
                        <h1 className="font-bold">Our Contacts</h1>
                        <ul className="my-5 font-light">
                            <li className="mb-5">
                                <span className="bg-cyan-500 pb-1 px-1 rounded-full">
                                <IoIosCall className="inline text-xs"/> 
                                </span> +93748621879
                            </li>
                            <li className="mb-5">
                                <span className="bg-cyan-500 pb-1 px-1 rounded-full">
                                <HiOutlineMail className="inline text-xs"/> 
                                </span> info@webservices.Company
                            </li>
                            <li className="mb-5">
                                <span className="">
                                <RiWhatsappFill className="text-green-400 inline text-2xl"/> 
                                </span> +919067698909
                            </li>
                        </ul>
                        <div className="py-3">
                            <h1 className="font-bold py-1">For Developer</h1>
                            <span className="bg-cyan-500 px-1 pb-1 rounded-full">
                                <PiMicrophoneStageFill className="text-xs inline"/>
                            </span> 
                            <span className="font-light ml-1">Get Uinque Insights</span>
                        </div>
                        <div className="py-3">
                            <h1 className="font-bold py-1">Join Our Team</h1>
                            <span className="bg-cyan-500 px-1 pb-1 rounded-full">
                                <IoDocumentText className="text-xs inline"/>
                            </span> 
                            <span className="font-light ml-1">Upload your CV</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="section-container">
            <div className="mb-10">
                <p className="text-2xl font-bold">{photo.title}</p>
                <p className="">{photo.description}</p>
            </div>
        <div className="grid xl:grid-cols-3 sm:grid-cols-1 my-5 gap-3">
            <div className="grid-cols-1 bg-slate-800 pb-5 px-3">
                <div className="flex justify-center items-center">
                    <Image src="/email.svg" width={150} height={150} alt="icon"></Image>
                </div>
                <div className="text-center">
                    <h1 className="font-bold text-xl">1. Send us a request </h1>
                    <p className="text-sm font-light">
                        Our team is readily available 
                        to assist you through, 
                       contact form, live chat, email, or telephone.
                    </p>
                    <p className="text-sm font-light">
                        Kindly provide a comprehensive description of your idea, 
                        and our seasoned consultants will diligently collaborate 
                        with you to formulate detailed project requirements, devise a 
                        feasible solution concept, and promptly evaluate its technical 
                        and economic viability.
                    </p>
                </div>
            </div>

            <div className="grid-cols-1 bg-slate-800 pb-5 px-3">
                <div className="flex justify-center items-center">
                    <Image src="/online.svg" width={150} height={150} alt="icon"></Image>
                </div>
                <div className="text-center">
                    <h1 className="font-bold text-xl">2. Schedual an introductory call </h1>
                    <p className="font-light text-sm">
                        We arrange a preliminary consultation with our solution team, 
                        which is non-binding, aimed at delving into your circumstances 
                        and discerning potential value-enhancing prospects for your 
                        consideration. Throughout this engagement, we endeavor to 
                        address your specific inquiries and furnish bespoke insights 
                        tailored to your requirements, surpassing the scope of a conventional 
                        corporate presentation or sales pitch.
                    </p>
                </div>
            </div>
            <div className="grid-cols-1 bg-slate-800 pb-5 px-3">
                <div className="flex justify-center items-center">
                    <Image src="/offer.svg" width={150} height={150} alt="icon"></Image>
                </div>
                <div className="">
                    <h1 className="font-bold text-xl text-center">3. Get Proposal </h1>
                    <p className="font-light text-sm text-center">
                    Our proposal is free of charge and will give you a 
                    comprehensive understanding of the service scope or 
                    solution we offer. It always includes:
                    </p>
                    <ol className="px-5 font-light text-sm list-decimal">
                        <li>Project timelines.</li>
                        <li>Identification of risks (if any) and our mitigation strategies.</li>
                        <li>Deliverables focused on the business value.</li>
                    </ol>
                </div>
            </div>

        </div>
        
    </div>
</div>

}