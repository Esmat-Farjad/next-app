import { notFound } from "next/navigation";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}
export default function BlogReviews(
    {params,}: {
        params:{
            reviewId: string;
            blogId: string;
        }
    }) {
        const random = getRandomInt(3);
        if(random === 2){
            throw new Error("Error too much refresh...wait for a moment and Tray again...");
        }
        if(parseInt(params.reviewId) > 1000){
            notFound();
        }

        return (
            <>
            <h1> Review {params.reviewId} for blog {params.blogId}</h1>
            <div className={"text-red-300"}>
                <h1>For observing the error handling in Next.js Refresh the page multiple times.</h1>
                <ol>
                    <li>If you refresh the page multiple times it gives an error</li>
                   
                </ol>
            </div>
            </>
        
        );
}