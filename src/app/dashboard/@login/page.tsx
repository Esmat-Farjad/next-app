import Card from "@/components/card";

export default function Login() {
    return <Card>
            <form action="#" method="post">
                <label htmlFor="pin" className="block text-center my-5">Enter your passcode </label>
                <input type="password" className="py-2 active bg-slate-900 border-b border-sky-500 focus:outline-none text-center" placeholder="****"/>
            </form>
    </Card>
}