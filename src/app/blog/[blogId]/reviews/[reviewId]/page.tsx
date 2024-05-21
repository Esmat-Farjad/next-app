import { notFound } from "next/navigation";

export default function BlogReviews(
    {params,}: {
        params:{
            reviewId: string;
            blogId: string;
        }
    }) {
        if(parseInt(params.reviewId) > 1000){
            throw new Error("Error Loading Review...");
        }
        return (
        <h1> Review {params.reviewId} for blog {params.blogId}</h1>
        );
}