import { Link } from "react-router-dom";

const Bloglist = ({blogs, handleDelete}) => {
    // const blogs = props.blogs;

    return ( 
        <div className="blog-list">
            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written by {blog.author}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Bloglist;