import React, { useState } from "react";
import "./styles.css";
import moment from 'moment'
import { useSelector } from "react-redux";
import { deletePost,likePost } from "../../actions/posts";
import { useDispatch } from "react-redux";
// import {ThumbUpAltIcon} from '@mui/material'
function Post({setCurrentId}) {
  const dispatch=useDispatch()

  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className="container">
      {posts.map((post) => {
        return (
          <div className="post-container" key={post._id}>
            <div className="post-top">
              {post.selectedFile === "" ? <img src="./shoes4.jpg" className=""/> :<img src={post.selectedFile} alt="" />}
              <div className="sub-top">
                <p className="post-name">{post.creator}</p>
                <span>{moment(post.createAt).fromNow()}</span>
                <button className="dots" onClick={() => {setCurrentId(post._id)}} >
                upt
              </button>
              </div>
             
            </div>
            <div className="post-bottom">
              <div className="post-tags">
                <p></p>
                <p>{post.tags.map((tag)=>`#${tag}`)}</p>
              </div>
              <div className="post-title">{post.title}</div>
              <div className="post-message">
                {post.message}
              </div>
            {" "}
            <div className="post-down">
              <button style={{color:"red" ,cursor:"pointer"}} onClick={()=>dispatch(likePost(post._id))}>Like</button>
              <span> Like {post.likedCount}</span>
              <span onClick={()=>dispatch(deletePost(post._id))} >delete</span>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
