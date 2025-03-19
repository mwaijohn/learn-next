'use server'

export async function createPost(formData: FormData) {
    const username = formData.get('username')
    const password = formData.get('password')
    console.log(username,password)
}

export async function deletePost(formData: FormData) { }


let likes = 0 // Simulating database storage

export async function incrementLike() {
  likes += 1
  return likes
}