import Markdown from 'markdown-to-jsx';
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/app/components/Blogg/getPostMetadata";

require('capitalize');


const getPostContent = (slug: string) => { // src/_posts/2021-10-26-rust-ocpp.md
    const folder = "src/_posts";
    const file = `${folder}/${slug}.md`;
    const content = fs.readFileSync(file, 'utf-8');
    return matter(content)
}

export async function generateStaticParams() {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <>
            <div
                className="min-h-500 relative w-full backgroundImg-detail bg-contain bg-no-repeat bg-center"
                style={{
                    backgroundImage: "url(" + post.data.og_image + ")",
                    height: "500px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
            </div>
            <div className="max-w-4xl px-4 py-4 mx-auto md:pt-4 sm:pt-10 items-center">
                <h1 className="text-5xl md:text-7xl font-extrabold py-12">{post.data.title}</h1>
                <p className="text-lg font-light italic">{post.data.description}</p>
                <article className={"prose lg:prose-xl prose-code:before:hidden prose-code:after:hidden py-4"}>
                    <Markdown>{post.content}</Markdown>
                </article>
            </div>
        </>
    )
};

export default PostPage;