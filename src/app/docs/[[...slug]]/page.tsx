export default function Docs(
    {params,}:{
        params:{
            slug: string[];
        };
    }){
    if(params.slug?.length === 2){
        return(
            <h1>Viewving docs for feature <u>{params.slug[0]}</u> and concept <u>{params.slug[1]}</u></h1>
        );
    } else if(params.slug?.length === 1){
        return <h1>Viewing docs for feature <u>{params.slug[0]}</u></h1> ;
    } 
    
    return <h1>Docs Home page</h1>;
}

