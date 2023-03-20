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
        <div className="prose prose-slate prose-img:rounded prose-img:max-w-xl flex flex-col mx-auto px-4 justify-center items-center max-w-6xl">
            <h1>{post.data.title}</h1>
            <Markdown>{post.content}</Markdown>
        </div>
    )
};

export default PostPage;