import serviceData, { ServiceType } from "../service";
import Image from "next/image";
import Link from "next/link";
import { PiTrophy, PiUsers } from "react-icons/pi";
import { LiaAwardSolid } from "react-icons/lia";
import { IoBriefcaseOutline } from "react-icons/io5";
export default function ServicePage(
    {
        params:{id},
    }:{
        params: {id: string};
    }) {
        const photo: ServiceType = serviceData.find((p) => p.id === id) !;
    return <div>
        <div className="section-container">
            <div className="grid xl:grid-cols-3 sm:grid-cols-1 gap-3">
                <div className="">
                    <ul>
                        <li className="my-1">
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
                        <li className="my-1">
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
                        <li className="my-1">
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
                        <li className="my-1">
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
                <div className="">
                    <p className="text-2xl font-bold">{photo.title}</p>
                    <p className="">{photo.description}</p>
                </div>
            </div>
        </div>
    </div>;
}