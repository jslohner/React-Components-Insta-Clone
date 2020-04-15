//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data

const PostsPage = props => {
  // set up state for your data

  const [posts, setPosts] = useState(props.postData);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        posts.map(post => {
          return <Post key={post.username} post={post} setPosts={setPosts}/>
        })
      }
    </div>
  );
};

export default PostsPage;
