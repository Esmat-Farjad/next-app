"use client";
// import { Metadata } from "next";
import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";


// export const metadata: Metadata = {
//   title: {
//     absolute: "",
//     default: "next app",
//     template: "%s | Next App",
//   },
//   description: "Generated by Next App",
// }
const navLink = [
  {name: "Blog", href:"/blog", authenticate:false},
  {name: "Dashboard", href:"/dashboard", authenticate:true},
  {name: "About", href:"/about", authenticate:false},
  {name: "Profile", href:"/profile", authenticate:true},
  {name: "Login", href: "/login"},
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={"bg-slate-900 bg-blend-darken text-white relative"}>
        <header className={"mx-20 px-10 py-4"}>
          <Link href="/" className={"font-bold text-2xl"}>Navbar</Link>
            {navLink.map((link) => {const isActive = pathname.startsWith(link.href);
              return (
                
                  <Link 
                  href={link.href} 
                  key={link.name} 
                  className={isActive ? "font-bold m-4" : "text-slate-200 m-4"}>
                    {link.authenticate ? '' : link.name} 
                  </Link> 
                
                
              );
            })}
        </header>
       
        {children}
      
        {/* footer */}
        <div className="border-t border-gray-600 p-5">
          <div className="text-center text-gray-600 hover:text-white duration-300">
            <div className="">
              <p className="text-xl">&#169;  
                2024 portfolio all right reserved
              </p>
            </div>
          </div>
          <div className="py-3 pr-3 text-center text-gray-600">
            <Link href="/www.facebook.com"><FaFacebookF className="social-icon"/></Link>
            <Link href="http://www.github.com/Esmat-Farjad"><FaGithub className="social-icon"/></Link>
            <Link href="/www.instagram.com"><FaInstagram className="social-icon"/></Link>
            <Link href="/www.gmail.com"><BiLogoGmail className="social-icon"/></Link>
            <Link href="/www.twitter.com"><FaTwitter className="social-icon"/></Link>
          </div>
        </div>
        {/* footer */}
      </body>
      
    </html>
  )
}
