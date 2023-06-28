import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import { UserContext } from '../context/UserContext';
import Header from './Header';

export default function DetailPost() {
  const [postInfo, setPostInfo] = useState([]);
  const { userContextInfo } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getpost/${id}`)
      .then((res) => {
        setPostInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deletePost() {
    axios
      .delete(`http://localhost:8000/api/deletepost/${id}`)
      .then((res) => {
        console.log(res.data);

        navigate('/blog');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (Object.keys(postInfo).length === 0) {
    return <div>Loading...</div>;
  }

  const postDate = format(new Date(postInfo.createdAt), 'MM/dd/yyyy');

  return (
    <>
      <Header />
      <div className='detail-page'>
        <div className='admin-post'>
          <h1>{postInfo.title}</h1>
          <div>
            <span>by @{postInfo.author?.username}</span> <span> | </span>
            <time> {postDate} </time>
          </div>
          {userContextInfo?.id === postInfo.author?._id && (
            <div>
              <Link to={`/editpost/${postInfo?._id}`}>
                <button className='editPost'>Edit Post</button>
              </Link>
            </div>
          )}
        </div>
        <img src={'http://localhost:8000/' + postInfo.cover} alt='blog post' />
        <p dangerouslySetInnerHTML={{ __html: postInfo.content }}></p>
        {userContextInfo?.id === postInfo.author?._id && (
          <button onClick={() => deletePost()} className='deletePost'>
            Delete Post
          </button>
        )}
      </div>
    </>
  );
}
