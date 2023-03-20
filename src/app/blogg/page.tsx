import getPostMetadata from "@/app/components/Blogg/getPostMetadata";
import PostPreview from "@/app/components/Blogg/PostPreview";

const Blogg = () => {
    const PostMetadata = getPostMetadata();
    const postPreviews = PostMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));
    return (
        <div className="w-full ">
            <div className="max-w-6xl mx-auto py-28">
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {postPreviews}
                </div>
            </div>
        </div>
    )
}

export default Blogg;