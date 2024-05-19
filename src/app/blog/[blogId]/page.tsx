
import { Metadata } from "next";


type Props = {
    params:{
        blogId: string;
    };
};
export const generateMetadata = async ({ params, }: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Social ${params.blogId}`);
        }, 100);
        
    });
    return {
        title: `blog ${params.blogId}`,
    };
    
};

export default function BlogDetails({params}: Props){
    return <h1>Blog Details of blog ID {params.blogId}</h1>;
}