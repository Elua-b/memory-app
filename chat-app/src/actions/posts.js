import * as api from "../components/api";
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
  // const action ={type:'FETCH_ALL',payload:[]}
  // dispatch(action)
};
export const createPost  =(post)=> async (dispatch) =>{
  try {
    const file = new FormData();
    file.append("file", post.selectedFile);
    file.append("upload_preset", "g1idoxnk");
    let res = await fetch("https://api.cloudinary.com/v1_1/govtalk/image/upload", {
      method: "post",
      body: file
    });
    
    let url = await (await res.json()).url;
    post = {...post, selectedFile: url};
    const { data } = await api.createPost(post);
    
  console.log(data);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
    
  }
};
export const updatePost=(id,post)=>async(dispatch)=>{
try {
  if (!post.selectedFile.includes("http://res.cloudinary.com")) {
    
    const file = new FormData();
    file.append("file", post.selectedFile);
    file.append("upload_preset", "g1idoxnk");
    let res = await fetch("https://api.cloudinary.com/v1_1/govtalk/image/upload", {
      method: "post",
      body: file
    });
    
    let url = await (await res.json()).url;
    post = {...post, selectedFile: url};
  }
  await api.updatePost(id,post);

} catch (error) {
  console.log(error.message);
}
}
export const deletePost =(id)=>async(dispatch)=>{
  try {
    await api.deletePost(id)
    dispatch({type:'DELETE',payload:id});
  } catch (error) {
    console.log(error);
  }
}
export const likePost=(id)=>async(dispatch)=>{
  try {
    const {data}=await api.likePost(id);
    dispatch({type:'LIKE',payload:data});

  } catch (error) {
    console.log(error);
  }
}