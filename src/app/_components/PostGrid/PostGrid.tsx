import Image from "next/image";

import { BlogPost } from "@/app/_entities/BlogPost";

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
                        className="relative w-full aspect-1"
                    >
                        <Image 
                            src={post.imageRef} 
                            alt={post.title}
                            layout="fill" 
                            objectFit="cover"
                            className="z-0"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                            <span className="text-white text-lg font-bold">{post.title}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}