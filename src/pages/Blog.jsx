import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import parse from "html-react-parser";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts", {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <Navigation title={"blog"} />

      <div className="w-7/12 m-auto">
        {posts.map((post) => (
          <div className="">
            <h1 className="text-center text-5xl	mb-3">{post.title}</h1>
            {parse(post.description)}
            <hr className="mb-3 mt-3" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
