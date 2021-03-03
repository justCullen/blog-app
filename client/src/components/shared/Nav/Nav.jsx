import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import "./Nav.css";

export default function Nav(props) {
  return (
    <nav>
      <Link className="blog-icon-link" to="/">
        <div className="blog-icon">Sapphire.post()</div>
      </Link>
      <div className="links">
        <NavLink className="link" to="/add-post">New Post</NavLink>
      </div>
    </nav>
  );
}
