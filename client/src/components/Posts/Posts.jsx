import React, { useEffect, useState } from "react";
import { getPosts } from "../../services/posts";
import Post from "../Post/Post";
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const assignPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    assignPosts();
  }, [toggleFetch]);

  console.log(posts);

  return (
    <div className="post-section">
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <Post setToggleFetch={setToggleFetch} post={post} />
        </div>
      ))}
    </div>
  );
}

export default Posts;
