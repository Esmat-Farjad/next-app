"use client" //declaring this page as client page 
import { useRouter } from "next/navigation";



export default function Register(){
    const router = useRouter();
    const handleClick = () => {
        console.log("redirecting to home page after registeration");
        router.push("/"); // redirecting to home page
        // router.replace("/"); replace the current url with the given url
        //router.back(); redirecting back to the previous page
        //router.forward(); redirecting forward the history

    }
    return <div>
        <h1>Sign Up/Register</h1>
        <button className={"bg-teal-500 p-1 m-4 rounded shadow text-white hover:bg-teal-700"} onClick={handleClick}>Register</button>
    </div>;
}