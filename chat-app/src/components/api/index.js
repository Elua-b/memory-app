import axios from '../../axios'
export const fetchPosts=()=>axios.get('/posts')
export const createPost=(newPost)=>axios.post('/posts', newPost)
export const updatePost=(id,updatePost)=>axios.patch('/posts/' + id,updatePost)
export const deletePost=(id,deletePost)=>axios.delete('/posts/'+id,deletePost)
export const likePost=(id)=>axios.patch('/posts/?id='+id)
