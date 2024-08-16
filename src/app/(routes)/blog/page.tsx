import PostGrid from "@/app/_components/PostGrid/PostGrid";

import { collectAllPostsSlugs, collectPostsMetaData } from "@/app/_utilities/blogPosts.util";


export default function Blog() {
    const blogPosts = collectPostsMetaData();
    const postIds = collectAllPostsSlugs();

    return (
        <main>
            <PostGrid posts={blogPosts} />
        </main>
    );
}