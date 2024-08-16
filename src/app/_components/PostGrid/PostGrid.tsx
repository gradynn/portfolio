import Image from "next/image";
import { BlogPost } from "@/app/_entities/BlogPost";
import Link from "next/link";

interface PostGridProps {
    posts: BlogPost[],
}

export default function PostGrid({ posts }: PostGridProps) {
    const handleClick = () => {

    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {posts.map((post: BlogPost) => {
                return (
                    <div 
                        key={post.title} 
                        className="relative w-full aspect-1 overflow-hidden shadow-lg hover:shadow-white"
                    >
                        <Link href={`blog/${post.slug}`}>
                            <Image
                                src={post.imageRef}
                                alt={post.title}
                                layout="fill"
                                objectFit="cover"
                                className="z-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 hover:from-white/70 via-black/50 hover:from-white/70 to-transparent z-10 flex flex-col justify-end p-6 text-white hover:text-black">
                                <span className="text-3xl">{post.title}</span>
                                <p className="text-xl font-light">{post.description}</p>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    )
}