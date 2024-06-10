

export default function DashboardLayout(
    {
        children,
        users,
        revenue,
        notifications,
        login,
    }:{
        children: React.ReactNode;
        users: React.ReactNode;
        revenue: React.ReactNode;
        notifications: React.ReactNode;
        login: React.ReactNode;
    }
){
    
    const isLoggedIn = login;
    return isLoggedIn ?(
        <div>
        <div>{children}</div>
        <div style={{display:"flex"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div style={{display: "flex", flex: 1}}>{notifications}</div>
        </div>
        </div>

    ) : (login);
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