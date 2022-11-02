const mongoose=require ("mongoose");

const  PostMessage =require ("../models/PostMessage");
const getPosts=async(req,res)=>{
    try {
        const postMessages=await PostMessage.find();
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({mesage:error.message})
    }
}
 const createPost =async(req,res)=>{
    const post=req.body;
    const newPost=new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
        console.log(newPost);
        console.log("creating...");

    } catch (error) {
        res.status(409).json({message:error.message})

    }
}
 const updatePost=async(req,res)=>{
    const {id:_id}=req.params;
    const post=req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no post with that id ");
    await PostMessage.findByIdAndUpdate(_id,post,{new:true});
    res.status(200).send("updated");
}
const deletePost=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("no post with that id ");
await PostMessage.findByIdAndRemove( id );
// console.log("deelete");
res.status(200).json({message:'post deleted successfully '})
         

}
const likePost=async(req,res)=>{
    try {
        const {id} = req.query;
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("no post with that id ");
        const post=await PostMessage.findByIdAndUpdate(id, {
            $inc: {likedCount: 1}   
        });
        
        res.json(post); 
    } catch (error) {
        console.log(error);
    }
   
   

}
module.exports={
getPosts,
createPost,
updatePost,
deletePost,
likePost

}