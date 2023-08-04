import { useEffect, useState } from 'react';
import Header from '../components/Header';
import SinglePost from '../components/SinglePost';
import axios from 'axios';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/getposts')
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error, 'here is the error front-end');
      });
  }, []);

  return (
    <>
      <Header />
      {posts.map((post) => (
        <SinglePost key={post._id} {...post} />
      ))}
    </>
  );
}
