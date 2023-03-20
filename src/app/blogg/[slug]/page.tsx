import fs from 'fs';
import Markdown from 'markdown-to-jsx';
let capitalize = require('capitalize')

const getPostContent = (slug: string) => {
    const folder = "src/_posts";
    const file = `${folder}/${slug}.md`;
    const content = fs.readFileSync(file, 'utf-8');
    return content;
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const content = getPostContent(slug);
    return (
        <div className="prose prose-slate prose-img:rounded prose-img:max-w-xl flex flex-col mx-auto px-4 justify-center items-center max-w-6xl">
            <h1>{capitalize(slug)}</h1>
            <Markdown>{content}</Markdown>
        </div>
    )
};

export default PostPage;