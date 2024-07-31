import { BlogPost } from "@/app/_entities/BlogPost"

interface PostGridProps {
    posts: BlogPost[],
}

export default function PostGrid({ posts }: PostGridProps) {
    return (
        <div className="grid grid-cols-3 w-full">
            {posts.map((post: BlogPost) => {
                return (
                    <div 
                        key={post.title} 
                        className="w-full aspect-1 bg-cover bg-center"
                        style={{ backgroundImage: `url(${post.imageRef})` }}
                    >
                        {post.title}
                    </div>
                );
            })}
        </div>
    )
}