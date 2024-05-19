export default function BlogReviews(
    {params,}: {
        params:{
            reviewId: string;
            blogId: string;
        }
    }) {
    return <h1> Review {params.reviewId} for blog {params.blogId}</h1>
}