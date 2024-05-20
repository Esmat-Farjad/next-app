import Link from "next/link";

export default function Home(){
    const blogId = 100
    return <div>
        <h1>Welcome to Homepage !</h1>
        <ul>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href={`blog/${blogId}`}>Blog</Link></li>
            <li><Link href="/docs">Docs</Link></li>
            <li><Link href="/register">Registration</Link></li>
            <li><Link href="/login">Sign In</Link></li>
            <li><Link href="/forgot-password">Forgot Password</Link></li>
        </ul>
    </div>
}