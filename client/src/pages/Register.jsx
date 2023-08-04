import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState([]);

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/register', user)
      .then((res) => {
        console.log(res);
        navigate('/login');
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <section className='register-main'>
      <h1>Register</h1>
      <form className='register-form' onSubmit={handleSubmit}>
        <ul className='error-validation'>
          {errors.map((err, index) => (
            <li className='error-message' key={index}>
              {err}
            </li>
          ))}
        </ul>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={user.email}
          onChange={handleInput}
        />
        <label htmlFor='username'>Name</label>
        <input
          type='text'
          id='username'
          name='username'
          value={user.username}
          onChange={handleInput}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          value={user.password}
          onChange={handleInput}
        />
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          value={user.confirmPassword}
          onChange={handleInput}
        />
        <button type='submit'>Register</button>
      </form>
    </section>
  );
}
