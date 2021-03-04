import React from "react";
import { Link } from "react-router-dom";
import "./EditButton.css"
function EditButton(props) {
  return (
    <Link to={`/posts/${props.id}/edit`}>
      <button className="edit-button">Edit</button>
    </Link>
  );
}
export default EditButton;
