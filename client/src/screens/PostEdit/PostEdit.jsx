import { useState, useEffect } from "react";
import "./PostEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getPost, updatePost } from "../../services/posts";

const PostEdit = (props) => {
  const [post, setPost] = useState({
    userName: "",
    location: "",
    imgURL: "",
    content: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updatePost(id, post);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="post-edit">
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div className="input-row">
              <label htmlFor="userName">Username: </label>
              <input
                className="post-content"
                placeholder="Your desired username"
                value={post.userName}
                name="userName"
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className="input-row">
              <label htmlFor="location">Your Location: </label>
              <input
                className="post-content"
                placeholder="Where do you live?"
                value={post.location}
                name="location"
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className="input-row">
              <label htmlFor="status">Status: </label>
              <textarea
                  className="post-content"
                  placeholder="What's on your mind?"
                  value={post.content}
                  name="content"
                  required
                  autoFocus
                  onChange={handleChange}
              />
            </div>
            <div className="input-row">
              <label htmlFor="imageUrl">Image Url: </label>
              <input
                  className="post-content"
                  placeholder="Link to your desired Profile Image"
                  value={post.imgURL}
                  name="imgURL"
                  required
                  autoFocus
                  onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="post-button">Save Edits</button>
        </form>
      </div>
    </Layout>
  );
};

export default PostEdit;
