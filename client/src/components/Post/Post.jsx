import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

function Post(props) {
  return (
    <div className="post-container">
      <Link to={`/posts/${props.post._id}`}>
        <div className="user-container">
          <div className="post-userName">{props.post.userName}</div>
          <img
            className="post-imgURL"
            src={props.post.imgURL}
            alt={props.post.userName}
          />
          <div className="content">{`${props.post.content}`}</div>
        </div>
      </Link>
    </div>
  );
}

export default Post;
