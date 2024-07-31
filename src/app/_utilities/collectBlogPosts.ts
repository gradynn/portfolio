import fs from 'fs';
import path from 'path';

import rawPosts from '@/app/_content/index.json';
import { BlogPost } from '../_entities/BlogPost';

export default function collectBlogPosts(): BlogPost[] {
    const posts = rawPosts.map((post) => {
        const date = new Date(post.date);

        const postPath = path.join(process.cwd(), 'src', 'app', '_content', 'posts', post.body);
        const fileContents = fs.readFileSync(postPath, 'utf8');

        const imagePath = `/images/${post.image}`;
        
        return {
            title: post.title,
            date: date,
            bodyMarkdown: fileContents,
            imageRef: imagePath
        } as BlogPost; 
    })

    return posts;
}