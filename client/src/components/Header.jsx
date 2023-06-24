import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

export default function Header() {
  const navigate = useNavigate();
  // const [user, setUser] = useState(null);
  const { userContextInfo, setUserContextInfo } = useContext(UserContext);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/profile', {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setUserContextInfo(res.data.email);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setUserContextInfo]);

  const handleLogout = () => {
    axios
      .post('http://localhost:8000/api/logout', {}, { withCredentials: true })
      .then((res) => {
        console.log(res);
        setUserContextInfo(null);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <header>
      <nav>
        <Link to='/'>
          <h1>YK</h1>
        </Link>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>

          {userContextInfo && (
            <>
              <li>
                <Link to='/createpost'>Create Post</Link>
                <Link onClick={handleLogout} to='logout'>
                  logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
