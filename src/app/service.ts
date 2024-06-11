
import { StaticImageData } from 'next/image';
import service_image from "./service-image/service_image.jpg";

export type ServiceType = {
    id: string,
    title: string,
    src: StaticImageData,
    description: string,
};

const serviceData: ServiceType[] = [
    {
        id: "1",
        title: "Software Development",
        src: service_image,
        description: "Unlock your vision with our bespoke software solutions. Explore our expert software development services today!",
    },
    {
        id: "2",
        title: "Software Solutions",
        src: service_image,
        description: "Elevate your business with our tailored software solutions. Discover how our services can streamline your operations today!",
    },
    {
        id: "3",
        title: "UX & UI",
        src: service_image,
        description: "Crafting unforgettable user experiences starts here. Explore our top-tier UX/UI design services today!",
    }
];
export default serviceData;