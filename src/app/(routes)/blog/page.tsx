import PostGrid from "@/app/_components/PostGrid/PostGrid";
import { GetServerSideProps } from "next";

import collectBlogPosts from "@/app/_utilities/collectBlogPosts";

export default function Blog() {
    const blogPosts = collectBlogPosts();

    return (
        <main>
            <PostGrid posts={blogPosts} />
        </main>
    );
}