import { Link } from "react-router-dom"
import "./Nav.css"

export default function Nav (props) {
    return (
        <nav>
            <Link className="blog-icon-link" to="/"><div className="blog-icon">Sapphire.post()</div></Link>
        </nav>
    )
}