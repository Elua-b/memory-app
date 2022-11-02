import React from "react";
import { useDispatch } from "react-redux";
import Form from "./components/Form/Form";
import Post from "./components/Posts/Post";
import "./App.css";
import { useEffect } from "react";
import { getPosts } from "./actions/posts";
import { useState } from "react";
import { Skeleton } from "@mui/material";
const App = () => {
  const [currentId,setCurrentId]=useState(null)
  const [posting, setPosting] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(async() => {

      let data  = getPosts();
      dispatch(data)
      setLoading(false);
    }, 1000)
  }, [posting]);
  const demoNews = [
    
    "pogba",
    "elua",
    "pogba",
    "pogba",
    "elua",
    "pogba",
  ];
  return (
    <div className="main">
      <div className="one">
        {loading ? (
          <div className="container">
            {demoNews.map((demo, index) => (
              <Skeleton
                key={index}
                sx={{ width: 300, height: 300 }}
                variant="rectangular"
              />
            ))}
          </div>
        ) : (
          <Post setCurrentId={setCurrentId} />
        )}
      </div>
      <div className="two">
        <Form currentId={currentId} posting={posting} setPosting={setPosting} setCurrentId={setCurrentId}/>
      </div>
    </div>
  );
};

export default App;
