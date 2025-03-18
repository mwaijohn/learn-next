import React from 'react'
import { PostModel } from '@/app/lib/get_posts'

const Post = ({ post }: { post: PostModel }) => {
  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
  )
}

export default Post