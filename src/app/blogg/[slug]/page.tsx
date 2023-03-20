import Markdown from 'markdown-to-jsx';

let capitalize = require('capitalize')
import {PostMetadata} from "@/app/components/Blogg/PostMetadata";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/app/components/Blogg/getPostMetadata";


const getPostContent = (slug: string) => {
    const folder = "src/_posts";
    const file = `${folder}/${slug}.md`;
    const content = fs.readFileSync(file, 'utf-8');
    const matterResult = matter(content);
    return matterResult
}

export async function generateStaticParams() {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

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
                <div className={"grid md:grid-cols-3"}>
                    <div className={"bg-transparent"}></div>
                    <div
                        className={"bg-white h-60 items-center text-center my-32"}>
                            <h4 className="font-bold text-4xl my-24 text-center justify-center">
                                {post.data.title}
                            </h4>
                    </div>
                    <div className={"bg-transparent"}></div>
                </div>
            </div>
            <div className="max-w-3xl px-9 mx-auto md:pt-24 sm:pt-10">
                <article className={"prose lg:prose-xl"}>
                    <Markdown>{post.content}</Markdown>
                </article>
            </div>
        </>
    )
};

export default PostPage;