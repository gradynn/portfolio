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
                        <div className="absolute inset-0 flex items-end bg-blue-500">
                            <div className="flex justify-center items-center w-full h-1/4 p-10 bg-black bg-opacity-75">
                                <span className="text-white text-2xl">{post.title}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}