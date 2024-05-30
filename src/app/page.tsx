import Image from "next/image";
export default function Home(){
    const blogId = 100
   
    return <div>
        <div className="heading-container p-10 bg-white h-96 bg-gradient-to-b from-indigo-900 to-pink-800">
            {/* <Image src='next.svg' alt="this is the picture" width={100} height={100}/> */}
           <p className="text-white text-6xl font-bold text-center mt-10 pt-10">Welcome to my Portfolio</p>
           <div className="text-center">this is the subtext comes from the bottom of the page</div>
           <div className="flex justify-center items-center">
           <Image src="vercel.svg" className="p-5" alt="logo" width={500} height={500}></Image>
           </div>
        </div>
    </div>
        

}