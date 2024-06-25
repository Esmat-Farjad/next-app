
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
    return (<>
    <div className="bg-slate-800 xl:px-44 sm:px-10 py-10">
        <div className="section-container bg-gradient-to-b from-slate-700 to slate-500 rounded">
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
                <div className="form-container col-span-2">
                    <form action="#">
                    <div className="grid grid-cols-2">
                        <div className="">
                            <label htmlFor="title">Post Title</label>
                            <input type="text" id="title" name="title" className="form-input" />
                    
                        </div>
                        <div className="">
                            <label htmlFor="file">Default size</label>
                            <input className="form-input file-input" id="file" type="file"/>

                        </div>
                    </div>
                    <textarea name="description" id="description" className="form-input mt-2"></textarea>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>);
}