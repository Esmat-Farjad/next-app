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
      <body>
        <header className={"bg-slate-500 text-white p-5 mb-5"}>
          <Link href="/">Navbar</Link>
        </header>
        <div className={"container p-5 ml-5 mr-5"}>
        {children}
        </div>
        <footer className={"bg-slate-100 text-teal-600 p-5 mt-5"}>
          Footer
        </footer>
      </body>
    </html>
  )
}
