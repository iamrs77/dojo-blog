import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id))
    }

    // runs code on every render
    useEffect(() => {
        console.log("use effect ran")

        // return () => {
        //     console.log("clean up function")
        // }
    }, [blogs]); // dependency array is an optional arguement and decided the running of useEffect

    return ( 
        <div className="home">
            <Bloglist blogs={blogs} handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;