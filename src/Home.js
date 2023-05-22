import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id))
    }

    useEffect(() => {
        fetch("http://localhost:8000/blogs").then((res) => {
            if(!res.ok) {
                throw Error('Could not fetch data');
            }
            return res.json();
        }).then((data) => {
            setBlogs(data);
            setIsPending(false);
            setError(null);
        }).catch(err => {
            setError(err.message);
            setIsPending(false);
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
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            { blogs && <Bloglist blogs={blogs} handleDelete={handleDelete} /> }
        </div>
     );
}
 
export default Home;