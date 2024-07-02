"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
export default function BlogDetailsLayout({children,}:{children: React.ReactNode;}){
    const navLink = [
        {name:"Home", href:"/"},
        {name:"Blog", href:"/blog"},
        {name:"Blog Details",href:"/blog/100"},
        
    ]
    const pathname = usePathname();
    return (
        
        <>  
        <div className="mt-0">
            <div className="mx-10">
                {navLink.map((link) => {const isActive = pathname.startsWith(link.href);
                return (
                    <Link href={link.href} key={link.name} className={isActive ? "font-bold" : "anchor-link"}>
                        {link.name}
                        <GoChevronRight className="inline text-gray-600 text-2xl"/>
                    </Link>
                );
                })}
            </div>
            {children}
        </div>
        </>
    );

}