'use server'

export async function createPost(formData: FormData) {
    const username = formData.get('username')
    const password = formData.get('password')
    console.log(username,password)
}

export async function deletePost(formData: FormData) { }