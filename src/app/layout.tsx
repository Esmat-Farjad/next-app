import { Metadata } from "next"
import Link from "next/link";
import "./style.css";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "next app",
    template: "%s | Next App",
  },
  description: "Generated by Next App",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"bg-slate-900 text-white relative"}>
        <header className={"mx-20 px-10 py-4"}>
          <Link href="/" className={"font-bold text-2xl"}>Navbar</Link>
          <ul className={"inline mx-5"}>
            <li className={"inline mx-3"}><Link href="/">Home</Link></li>
            <li className={"inline mx-3"}><Link href="/">Projects</Link></li>
            <li className={"inline mx-3"}><Link href="/">Technologies</Link></li>
          </ul>
        </header>
        <div className={"container p-5 ml-5 mr-5"}>
        {children}
        </div>
        <footer className={"fixed bottom-0 p-5 mt-5"}>
          <div className={"text-center p-3 "}>
            <p className="text-xl"></p>
          </div>
        </footer>
      </body>
    </html>
  )
}
