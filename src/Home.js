import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id))
    }

    useEffect(() => {
        fetch("http://localhost:8000/blogs").then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            setBlogs(data);
        })
    }, []);


    // runs code on every render
    // useEffect(() => {
    //     console.log("use effect ran")

    //     // return () => {
    //     //     console.log("clean up function")
    //     // }
    // }, [blogs]); // dependency array is an optional arguement and decided the running of useEffect

    return ( 
        <div className="home">
            { blogs && <Bloglist blogs={blogs} handleDelete={handleDelete} /> }
        </div>
     );
}
 
export default Home;