import React from "react";
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";

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

      <div>
        {posts.map((post) => (
          <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
