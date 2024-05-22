import "./style.css";
export default function NotFound(){
    return (
        <div className={"text-center text-gray-400 m-5 subpixel-antialiased"}>
            <div className={"flex justify-center m-5"}>
            <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 512 512"><path fill="#b1b4b9" 
            d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 
            111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 
            35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
            </div>
            <h1 className={"text-3xl font-bold"}>404 | Page Not Found !</h1>
            <p>Could not find the requested resource </p>
        </div>
    )
}
