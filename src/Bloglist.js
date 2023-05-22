const Bloglist = ({blogs, handleDelete}) => {
    // const blogs = props.blogs;

    return ( 
        <div className="blog-list">
            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <button onClick={() => handleDelete(blog.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Bloglist;