"use client"; //used to declare page as client page
import "./style.css";
import Link from "next/link"; // used to navigate between component 
import { usePathname } from "next/navigation"; // used to decalre the active path name 
import { useState } from "react";


//navigation object for creating navigation menu of the following component
const navLink = [
    {name: "Register", href:"/register"},
    {name: "Login", href: "/login"},
   
];

export default function AuthLayout({
    children,
}:{
    children:React.ReactNode
}){
    //creating path
    const pathname = usePathname();
    const [input, setInput] = useState("");
    return (
        <div className="mt-0">
            <div>
                {/* this will be shared between compnent if you want separate the resource user template.tsx */}
                {/* <input value={input} onChange={e => setInput(e.target.value)} /> */}
            </div>
            {/* mapping through nav link object and adding the link.href for each item of the navLink object */}
            {navLink.map((link) => {const isActive = pathname.startsWith(link.href);
                return (
                    <Link href={link.href} key={link.name} className={isActive ? "font-bold m-4" : "text-gray-600 hover:text-white duration-300 m-4"}>{link.name} </Link>
                );
            })}
            {children}
        </div>
    )
}