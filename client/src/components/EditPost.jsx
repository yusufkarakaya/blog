import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
export default function EditPost() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getpost/${id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setSummary(res.data.summary);
        setContent(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  async function updatePost(e) {
    e.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files?.[0]);
    data.set('id', id);

    axios
      .put('http://localhost:8000/api/updatepost/' + id, data, {
        withCredentials: true,
      })
      .then((res) => {
        setRedirect(true);
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  }

  if (redirect) {
    navigate(`/detailpost/${id}`);
  }

  return (
    <main className='create-main'>
      <h1>Update Post</h1>
      <form className='create-form' onSubmit={updatePost}>
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
        <button type='submit'>Update</button>
      </form>
    </main>
  );
}
