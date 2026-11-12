export interface PostMetadata {
    author: string
    title: string
    description: string
    date: string
    og_image: string
    slug: string
    sourceFile: string
    /** Frontmatter tags when present, otherwise derived from the slug map in site-data. */
    tags: string[]
    /** Tech posts render as news articles, life posts as social posts. */
    kind: "tech" | "life"
}
