
import { Metadata } from "next";
import Link from "next/link";
import { IoAdd } from "react-icons/io5";
import { MdFeed, MdOutlineViewCarousel } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";

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
        <div className="section-container bg-gradient-to-b from-slate-700 to-slate-500 rounded-lg">
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
                <div className="form-container col-span-2">
                    <div className="mt-8">
                        <p className="text-center text-2xl font-bold">Update Post</p>
                        <p className="text-center">update your post</p>
                    </div>
                    <form action="#" className="p-5">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="">
                            <label htmlFor="title">Post Title</label>
                            <input type="text" id="title" name="title" className="form-input" />
                        </div>
                        <div className="">
                            <label htmlFor="file">Image</label>
                            <input className="form-input file-input" id="file" type="file"/>
                        </div>
                    </div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description"rows={5} className="form-input mt-2" 
                    placeholder="what is in your mind..."></textarea>
                    <span className="text-sm">34/1000</span>
                    <div className="text-center my-5">
                        <button type="submit" className="btn-transparent">Post</button>
                        <button type="reset" className="btn-transparent">Discard</button>
                    </div>
                    </form>
                </div>
                <div className="py-5 px-10 bg-slate-500 mx-auto rounded-b-full border border-slate-500">
                    <div className="my-3">
                        <p className="text-2xl font-bold">
                            <CiMenuFries className="inline mr-1"/>Menu
                        </p>
                    </div>
                    <ul className="mt-7">
                        <li className="py-2 text-gray-400 hover:text-white duration-500">
                            <IoAdd className="inline text-2xl mb-1 mr-2"/><Link href="#">Create Post</Link>
                        </li>
                        <li className="py-2 text-gray-400 hover:text-white duration-500">
                            <MdOutlineViewCarousel className="inline text-2xl mb-1 mr-2"/><Link href="#">View Posts</Link>
                        </li>
                        <li className="py-2 text-gray-400 hover:text-white duration-500">
                            <MdFeed className="inline text-2xl mb-1 mr-2"/><Link href="#">My Posts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>);
}