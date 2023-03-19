import fs from 'fs';
import Markdown from 'markdown-to-jsx';
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
        <div>
            <h1>{slug}</h1>
            <Markdown>{content}</Markdown>
        </div>
    )
};

export default PostPage;