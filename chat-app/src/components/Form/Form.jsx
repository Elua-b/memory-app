import React, { useEffect, useState } from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
function Form({ currentId, setCurrentId, setPosting, posting }) {
  // const [currentId,setCurrentId]=useState(null)
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  useEffect(() => {if (currentId){
     setPostData(currentId);
     setPreview(currentId.selectedFile);
    }},[currentId])
  const dispatch = useDispatch();
  useEffect(() => {
    if (post) setCurrentId(post);
  }, [post]);
  const postdat = {
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: null,
  }
  const [postData, setPostData] = useState(postdat);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId._id, postData));
    } else {
      dispatch(createPost(postData));
      
    }
    setPosting(!posting)
    setPostData(postdat);
    document.getElementById("pr").value = ""
    setPreview(null)
  };
  const clear = () => {};
  const [preview, setPreview] = useState(null);
  return (
    <div className="form-container">
      <h3>Creating a memory</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="creator"
            value={postData.creator}
            className="input"
            placeholder="Creator"
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="title"
            className="input"
            value={postData.title}
            placeholder="Title"
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <textarea
            type="text"
            name="message"
            className="input"
            value={postData.message}
            placeholder="Message"
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="tags"
            value={postData.tags}
            className="input"
            placeholder="Tags"
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />
        </div>
        {preview && (
          <div>
            <img src={preview} className="image-preview" alt="preview" />
          </div>
        )}
        <div className="input-container">
          {/* <label className="label" htmlFor="file">Upload image</label> */}
          <input
            // id="file"
            type="file"
            name="selectedFile"
            onChange={(e) => {
              setPreview(URL.createObjectURL(e.target.files[0]));
              setPostData({ ...postData, selectedFile: e.target.files[0] });
            }}
            id="pr"
          />
        </div>
        <div className="buttons">
          <button className="submit">Submit</button>
          <button className="clear" onClick={clear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
