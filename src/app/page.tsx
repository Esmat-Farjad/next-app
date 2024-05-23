import Link from "next/link";

export default function Home(){
    const blogId = 100
    return <div>
        <div className={"container"}>
            <div className="grid grid-cols-5">
                <div className={"border border-slate-500 p-3 rounded shadow"}>
                    
                </div>
                <div className={"col-span-4"}>
                    <div className={"header-text text-center"}>
                        <p className={"text-4xl"}>Welcome to my Portfolio</p>
                        <small>this is a demo text for description details </small>
                        <p className="social-media">
                            <Link href="/" className={"mx-3 hover:text-cyan-600"}>Facebook</Link>
                            <Link href="/" className={"mx-3 hover:text-cyan-600"}>Twitter</Link>
                            <Link href="/" className={"mx-3 hover:text-cyan-600"}>Instagram</Link>
                        </p>
                    </div>
                </div>
            </div>
        {/* <h1>Welcome to Homepage !</h1>

        <ul style={{listStyleType:"none",}}>
            <li style={{padding:"10px"}}><Link href="/profile">Profile</Link></li>
            <li style={{padding:"10px"}}><Link href="/about">About</Link></li>
            <li style={{padding:"10px"}}><Link href={`blog/${blogId}`}>Blog {blogId}</Link></li>
            <li style={{padding:"10px"}}><Link href="/docs">Docs</Link></li>
            <li style={{padding:"10px"}}><Link href="/register">Registration</Link></li>
            <li style={{padding:"10px"}}><Link href="/login">Sign In</Link></li>
            <li style={{padding:"10px"}}><Link href="/forgot-password" replace>Forgot Password</Link></li>
        </ul> */}
        </div>
    </div>
}