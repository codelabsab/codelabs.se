import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postsDirectory = path.join(process.cwd(), 'public/blogg');

export async function getSortedPostsData() {
    const posts = [];
    const dirs = fs.readdirSync(postsDirectory, { withFileTypes: true });
    dirs.forEach((dir) => {
        if (dir.isDirectory()) {
            const post = dir.name;
            const postPath = path.join(postsDirectory, post);
            const files = fs.readdirSync(postPath);
            files.forEach((file) => {
                if (file.endsWith('.mdx')) {
                    const fileName = path.join(postPath, file);
                    const fileContent = fs.readFileSync(fileName, 'utf-8');
                    const {slug, data, content, description, og_image} = matter(fileContent);
                    posts.push({slug, postPath, post, data, content, description, og_image});
                }
            });
        }
    });

    return posts.sort((a, b) => {
        if (a.data.date < b.data.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
