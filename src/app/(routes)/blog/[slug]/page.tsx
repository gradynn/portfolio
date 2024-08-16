import { BlogPostContent } from "@/app/_entities/BlogPost";
import { collectAllPostsSlugs, collectPostContentFromSlug } from "@/app/_utilities/blogPosts.util";
import './page.css'

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
        <div className="flex w-full justify-center">
            <div className="flex flex-col">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold leading-tight mb-2 text-gray-900">{postContent.title}</h1>
                    <div className="flex gap-3 text-gray-600 text-sm">
                        <p>{new Date(postContent.date).toDateString()}</p>
                        <span className="text-gray-400">•</span>
                        <p>{postContent.description}</p>
                    </div>
                </div> 
                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: postContent.content }}></div>
            </div>
        </div>
    );
}