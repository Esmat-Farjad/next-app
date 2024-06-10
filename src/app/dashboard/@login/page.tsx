import Card from "@/components/card";
import { useState } from "react";

export default function Login() {
    const [pwdInput, setPassword] = useState('');
    return <Card>
            <form action="#" method="post">
                <label htmlFor="pin" className="block text-center my-5">Enter your passcode </label>
                <input 
                type="password" 
                value={pwdInput} onChange={e => setPassword(e.target.value)} 
                className="py-2 active bg-slate-900 border-b border-sky-500 focus:outline-none text-center" 
                placeholder="****"/>
            </form>
    </Card>
}