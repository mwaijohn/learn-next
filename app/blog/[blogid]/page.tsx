import { getSinglePost } from "@/app/lib/get_posts";
import { PostModel } from "@/app/lib/get_posts";
import Post from "@/app/components/Post";

interface Props {
  params: {
    blogid: number;
  };
}

export default async function BlogPage({ params }: Props) {
  const post: PostModel = await getSinglePost(params.blogid.toString());

  // console.log(params);

  return <div>
    <Post post={post} />
  </div>;
}
