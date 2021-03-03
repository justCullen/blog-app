import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

function Post(props) {
  return (
    <>
      <Link className="post" to={`/posts/${props._id}`}>
        <div className="post-container">
          <div className="post-userName">{props.userName}</div>
          <img
            className="post-imgURL"
            src={props.imgURL}
            alt={props.userName}
          />
          <div className="content">{`${props.content}`}</div>
        </div>
      </Link>
    </>
  );
}

export default Post;
