import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

import rawPosts from '@/app/_content/index.json';
import { BlogPost, BlogPostContent } from '../_entities/BlogPost';

interface PostRecord {
    slug: string;
    title: string;
    date: string;
    body: string;
    image: string;
    description: string;
}

export const collectPostContentFromSlug = async (slug: string) => {
    const postPath = path.join(process.cwd(), 'src', 'app', '_content', 'index.json');
    const jsonData = fs.readFileSync(postPath, 'utf8');

    const posts: PostRecord[] = JSON.parse(jsonData);

    // Find the post by ID
    const post = posts.find(p => p.slug === slug);
    if (!post) {
        throw new Error(`Post with id ${slug} not found`);
    }

    // Path to the markdown file
    const markdownFilePath = path.join(process.cwd(), 'src', 'app', '_content', 'posts', post.body);

    // Read the markdown file
    const markdownContent = fs.readFileSync(markdownFilePath, 'utf-8');

    // Convert markdown to HTML
    const htmlContent = await marked(markdownContent);

    return {
        title: post.title,
        description: post.description,
        date: post.date,
        content: htmlContent
    } as BlogPostContent;
};

export const collectAllPostsSlugs = () => {
    return rawPosts.map((post) => {
        return {
            params: {
                slug: post.slug,
            }
        };
    });
}

export const collectPostsMetaData = (): BlogPost[] => {
    const posts = rawPosts.map((post) => {
        const date = new Date(post.date);

        const imagePath = `/images/${post.image}`;
        
        return {
            slug: post.slug,
            title: post.title,
            date: date,
            imageRef: imagePath,
            description: post.description,
        } as BlogPost; 
    })

    return posts;
}