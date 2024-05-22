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
/*---------------Note---------------
Parallel Routes:
1. Parallel routes in Next.js are defined using a feature known as slots
2. Slots help structure our content in a modular fashion
3. To define a slot, we use the '@folder' nameing convention
4. Each slot is then passed as a prop to its corresponding 'layout.tsx' file.
Benefits of Parallel Routes
A clear benefits of parallel routes is their ability to 
split a single laout into various slots, making the code more manageable

True Benefits of Parallel Routes
a) Independent route handling
b) Sub-navigaiton
1. INDEPENDENT ROUTE HANDLING:
    Each slot of your layout, such as users or revenue can have its
    own loadin and error states

    This granular contol is particularly beneficial in scenarios
    where different sctions of the page load at varying speeds pr ecouter unique errors
2. SUB-NAVIGATIONS IN ROUTES
    Each slot of your dashboard can essentially funcion as amini-application,
    complete with its own navigaiton and stae management.

    This is especially in a complex application such as our dashboard where different section
    serve distict purposes.
*/