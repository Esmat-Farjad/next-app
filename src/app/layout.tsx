"use client";
// import { Metadata } from "next";
import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";


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
        <header className="">
          <div className="xl:mx-44 lg:mx-44 sm:mx-16 md:mx-16 py-5">
            <Link href="/" className="font-bold text-2xl inline mr-4">Navbar</Link>
            <p className="text-end text-2xl float-right px-5 xl:hidden lg:hidden sm:inline-block md:inline-block">
              <Link href="#" className="nav-link"><CiMenuKebab/></Link>
            </p>
              <ul className="xl:inline-block lg:inline-block sm:hidden md:hidden">
                  {navLink.map((link) => {const isActive = pathname.startsWith(link.href);
                  return (
                    <li key={link.name} className="xl:inline-block lg:inline-inline-block sm:block md:block">
                        <Link 
                        href={link.href} 
                        className={isActive ? "font-bold mx-2" : "mx-2 sm:block xl:d-inline nav-link "}>
                          {link.authenticate ? '' : link.name} 
                        </Link> 
                    </li>
                  );
                })}
              </ul>
          </div>
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
