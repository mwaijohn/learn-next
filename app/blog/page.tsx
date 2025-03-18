import { getPosts, PostModel } from "@/app/lib/get_posts"
import Link from "next/link";


const Blog = async () => {
    const posts: PostModel[] = await getPosts();
    return (
        <>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Blog