import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { deletePost } from "../../services/posts";

function Post(props) {

  const deleteButton = async () => {
    await deletePost(props.post._id)
    props.setToggleFetch((curr) => !curr)
  }

  return (
    <div className="post-container">
          <div className="user-container">
            <div className="post-userName">{props.post.userName}</div>
            <Link to={`/posts/${props.post._id}`}>
            <img
              className="post-imgURL"
              src={props.post.imgURL}
              alt={props.post.userName}
              />
            </Link>
            <div className="content">{`${props.post.content}`}</div>
        <button className="delete-button" onClick={deleteButton}>Delete</button>
      </div>
    </div>
  );
}

export default Post;
