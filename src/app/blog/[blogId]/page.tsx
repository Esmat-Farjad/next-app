export default function blogDetails({params,}:{params:{blogId:string};}){
    return <h1>Blog Details of blog ID {params.blogId}</h1>;
}