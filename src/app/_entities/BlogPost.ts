
export interface BlogPost {
    slug: string,
    title: string,
    date: Date,
    imageRef: string,
    description: string,
}

export interface BlogPostContent {
    title: string,
    description: string,
    date: string,
    content: string,
}