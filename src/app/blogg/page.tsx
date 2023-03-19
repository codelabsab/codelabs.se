import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';
import {PostMetadata} from "@/app/components/Blogg/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
    const folder = "src/_posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each post
    const posts  = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`${folder}/${fileName}`, 'utf-8');
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            description: matterResult.data.description,
            date: matterResult.data.date,
            og_image: matterResult.data.ogImage,
            slug: fileName.replace(".md", ""),
        };
    });

    return posts;
};

function Blogg () {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <Link href={`/blogg/${post.slug}`} key={`${post.slug}`}>
        <div>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
        </div>
        </Link>
    ));
    return <div>{postPreviews}</div>
}

export default Blogg;