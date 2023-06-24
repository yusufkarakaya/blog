import './App.css';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './components/CreatePost';
import DetailPost from './components/DetailPost';
import EditPost from './components/EditPost';
import { Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/detailpost/:id' element={<DetailPost />} />
          <Route path='/editpost/:id' element={<EditPost />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
