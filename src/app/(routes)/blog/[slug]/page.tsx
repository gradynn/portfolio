import { BlogPostContent } from "@/app/_entities/BlogPost";
import { collectAllPostsSlugs, collectPostContentFromSlug } from "@/app/_utilities/blogPosts.util";

// This function generates the paths for static generation
export async function generateStaticParams() {
    const paths = collectAllPostsSlugs();
    return paths.map(({ params }) => ({
        slug: params.slug,
    }));
}

// The page component itself
export default async function Post({ params }: { params: { slug: string } }) {
    const postContent: BlogPostContent = await collectPostContentFromSlug(params.slug);

    return (
        <div>
            <h1>{postContent.title}</h1>
            <article dangerouslySetInnerHTML={{ __html: postContent.content }} />
        </div>
    );
}