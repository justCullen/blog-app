import React, { useEffect, useState } from 'react';
import { getPosts } from "../../services/posts"
import Post from "../Post/Post"

function Posts () {
  const [posts, setPosts] = useState([])
  // const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const assignPosts = async () => {
      const posts = await getPosts()
      setPosts(posts)
    }
    assignPosts()
  }, [])
  console.log(posts);

  return (
    <div>
      {posts.map((post, index) => (
        index < 10 ? 
        <div key={index}>
          <Post post={post}/>
        </div>
        : null
      ))}
    </div>
  );
}

export default Posts;