import { PostMetadata } from "@/app/components/Blog/PostMetadata";
import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = (): PostMetadata[] => {
    const folder = "src/_posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each post
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf-8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            description: matterResult.data.description,
            date: matterResult.data.date,
            og_image: matterResult.data.og_image,
            slug: matterResult.data.slug ?? fileName.replace(".md", ""),
            author: matterResult.data.author,
            sourceFile: fileName,
        };
    });

    // sort posts by date in descending order
    posts.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else if (a.date > b.date) {
            return -1;
        } else {
            return 0;
        }
    });

    return posts;
};

export const getPostBySlug = (slug: string) => {
    const posts = getPostMetadata();
    const post = posts.find((entry) => entry.slug === slug);

    if (!post) {
        return null;
    }

    const fileContents = fs.readFileSync(`src/_posts/${post.sourceFile}`, "utf-8");
    const matterResult = matter(fileContents);

    return {
        ...post,
        content: matterResult.content,
    };
};

export default getPostMetadata;
