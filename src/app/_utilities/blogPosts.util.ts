import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

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
    const fileContents = fs.readFileSync(markdownFilePath, 'utf8');
    
    const processedContents = await remark().use(gfm).use(html).process(fileContents);
    const content = processedContents.toString();

    return {
        title: post.title,
        description: post.description,
        date: post.date,
        content,
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