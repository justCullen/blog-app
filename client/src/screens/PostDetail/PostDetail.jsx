import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getPost } from "../../services/posts";
import "../../components/Post/Post.css"


export default function PostDetail (props) {

    const [post, setPost] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetPost = async () => {
            const post = await getPost(id)
            setPost(post)
            setLoaded(true)
        }
        fetPost()
    }, [id])

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    
    return (
        <Layout>
            <div className="user-container">
                <div className="post-img-container">
                    <img className="post-imgURL" src={post.imgURL} alt={post.userName}/>
                </div>
                <div>
                    <div className="post-userName">{post.userName}</div>
                    <div className="location">{post.location}</div>
                    <div className="content">{post.content}</div>
                </div>
                
            </div>
        </Layout>
    )
}