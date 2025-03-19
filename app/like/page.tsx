'use client'
 
import { useState ,useActionState} from 'react'
import { incrementLike,createPost } from '../lib/actions'
 
export default function LikeButton({ initialLikes }: { initialLikes: number}) {
  const [likes, setLikes] = useState(initialLikes)

//   const [state, action, pending] = useActionState(createPost, false)
const [state, formAction, pending] = useActionState(createPost, "9")
 
  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        onClick={async () => {
          const updatedLikes = await incrementLike()
          setLikes(updatedLikes)
        }}
      >
        Like
      </button>

      {/* <button onClick={async () => action()}>
      {pending ? <div>Loading</div> : 'Create Post'}
    </button> */}
    </>
  )
}