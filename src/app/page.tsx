import Link from "next/link";

export default function Home(){
    const blogId = 100
    return <div>
        <h1>Welcome to Homepage !</h1>
        <ul style={{listStyleType:"none",}}>
            <li style={{padding:"10px"}}><Link href="/profile">Profile</Link></li>
            <li style={{padding:"10px"}}><Link href="/about">About</Link></li>
            <li style={{padding:"10px"}}><Link href={`blog/${blogId}`}>Blog</Link></li>
            <li style={{padding:"10px"}}><Link href="/docs">Docs</Link></li>
            <li style={{padding:"10px"}}><Link href="/register">Registration</Link></li>
            <li style={{padding:"10px"}}><Link href="/login">Sign In</Link></li>
            <li style={{padding:"10px"}}><Link href="/forgot-password">Forgot Password</Link></li>
        </ul>
    </div>
}