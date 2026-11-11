import { PostMetadata } from "@/app/components/Blog/PostMetadata";
import fs from "fs";
import matter from "gray-matter";
import { techPostTags } from "@/app/components/site/site-data";

const slugify = (value: string) => value.toLowerCase().trim().replace(/\s+/g, "-");

function classify(slug: string, frontmatterTags: unknown): Pick<PostMetadata, "tags" | "kind"> {
    const mapped = techPostTags[slug];
    const own = Array.isArray(frontmatterTags) ? frontmatterTags.map((tag) => slugify(String(tag))) : [];
    const tags = Array.from(new Set([...(mapped ?? ["crewlife"]), ...own]));
    return { tags, kind: tags.includes("tech") ? "tech" : "life" };
}

const getPostMetadata = (): PostMetadata[] => {
    const folder = "src/_posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each post
    const posts: PostMetadata[] = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf-8");
        const matterResult = matter(fileContents);
        const slug = matterResult.data.slug ?? fileName.replace(".md", "");
        return {
            ...classify(slug, matterResult.data.tags),
            title: matterResult.data.title,
            description: matterResult.data.description,
            date: matterResult.data.date,
            og_image: matterResult.data.og_image,
            slug,
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
