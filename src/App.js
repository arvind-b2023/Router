import './App.css';
import Navbar from './Components/Navbar';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Deshbord from './Components/Deshbord';
import User from './Components/User';
import ProtectedRoute from './Components/ProtectedRoute';
import PageNotFound from './Components/PageNotFound';
import Login from './Components/Login';
import Post from './Components/Post';
import RegisterCompney from './Components/RegisterCompney.js';
import Detaile from './Components/Detaile';
import AddUser from './Components/AddUser';
import PostDetaile from './Components/PostDetaile';
function App() {
  return (
    <>        
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ProtectedRoute ><Deshbord /></ProtectedRoute>} />
        <Route path='/users' element={<ProtectedRoute ><User /></ProtectedRoute>} />
        <Route path='/users/:userId' element={<ProtectedRoute ><Detaile /></ProtectedRoute>} />
        <Route path='/products/:postId' element={<ProtectedRoute ><PostDetaile /></ProtectedRoute>} />
        <Route path='/users/adduser' element={<ProtectedRoute ><AddUser /></ProtectedRoute>} />
        <Route path='/post' element={<ProtectedRoute ><Post /></ProtectedRoute>} />
        <Route path='/registercompney' element={<ProtectedRoute ><RegisterCompney /></ProtectedRoute>} />
        <Route exact path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes >
    </>
  )
}
export default App;
