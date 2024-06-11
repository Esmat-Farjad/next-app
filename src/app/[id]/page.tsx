import serviceData, { ServiceType } from "../service";
import Image from "next/image";
import Link from "next/link";
export default function ServicePage(
    {
        params:{id},
    }:{
        params: {id: string};
    }) {
        const photo: ServiceType = serviceData.find((p) => p.id === id) !;
    return <div>
        <div className="section-container">
            <div className="grid grid-cols-2">
                <div className="">
                <Image src={photo.src} alt=''></Image>
                </div>
                <div className="">
                    <p className="text-2xl font-bold">{photo.title}</p>
                    <p className="">{photo.description}</p>
                </div>
            </div>
            

        </div>
    </div>;
}