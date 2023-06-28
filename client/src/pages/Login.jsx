import react, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function Login() {
  const { setUserContextInfo } = useContext(UserContext);

  const [userLogin, setUserLogin] = useState({
    _id: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  const handleInput = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/login', userLogin, {
        withCredentials: true,
      })
      .then((res) => {
        setUserContextInfo(res.data.id);
        navigate('/');
      })
      .catch((err) => {
        setErrors(err.response.data.message);
      });
  };

  return (
    <section className='login-main'>
      <h1>Login</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        {errors && <p className='error'>{errors}</p>}
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' onChange={handleInput} />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          onChange={handleInput}
        />
        <button type='submit'>Login</button>
      </form>
    </section>
  );
}
