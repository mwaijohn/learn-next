export type PostModel = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

export const getPosts = async (): Promise<PostModel[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: PostModel[] = await res.json();
    return posts;
};

export const getSinglePost = async (id: string): Promise<PostModel> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post: PostModel = await res.json();
    return post;
}
