import { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { createPost } from "../../services/posts";
import { useHistory } from "react-router-dom";
import "./PostCreate.css"
function PostCreate(props) {
  let history = useHistory();
  const [post, setPost] = useState({
    userName: "",
    imgURL: "",
    content: "",
    location: "",
    cohort: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(post);
    history.push("/");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  return (
    <Layout user={props.user}>
      <form className="postcreate-form" onSubmit={handleSubmit}>
        <input
          className="input-userName"
          placeholder="User Name"
          value={post.userName}
          name="userName"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Profile Image Link"
          value={post.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea-content"
          rows={5}
          placeholder="What's on your mind?"
          value={post.content}
          name="content"
          required
          onChange={handleChange}
        />
        <input
          className="input-location"
          placeholder="Location of post"
          value={post.location}
          name="location"
          required
          onChange={handleChange}
        />
        <input
          className="input-cohort"
          placeholder="Cohort"
          value={post.cohort}
          name="cohort"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default PostCreate;
