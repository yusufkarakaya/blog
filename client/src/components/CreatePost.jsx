import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
};
const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState([]);

  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }

  async function createNewPost(e) {
    e.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);

    axios
      .post('http://localhost:8000/api/createpost', data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setRedirect(true);
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.errors) {
          const errorResponse = err.response.data.errors;
          const errorArr = [];
          for (const key of Object.keys(errorResponse)) {
            errorArr.push(errorResponse[key].message);
          }
          setErrors(errorArr);
        } else {
          console.log(err); // Log the error for debugging purposes
          setErrors(['An unexpected error occurred.']);
        }
      });
  }

  if (redirect) {
    return <Navigate to='/' />;
  }

  return (
    <>
      <main className='create-main'>
        <h1>Create Post</h1>
        <form className='create-form' onSubmit={createNewPost}>
          <ul className='error-validation'>
            {errors.map((err, index) => (
              <li className='error-message' key={index}>
                {err}
              </li>
            ))}
          </ul>
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type='summary'
            placeholder='Summary'
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
          <input type='file' onChange={(e) => setFiles(e.target.files)} />
          <ReactQuill
            modules={modules}
            formats={formats}
            value={content}
            onChange={(newValue) => setContent(newValue)}
          />
          <button type='submit'>Create</button>
        </form>
      </main>
    </>
  );
}
