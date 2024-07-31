import { Navigate, Route,  Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
        navigate('/dashboard');
    }
}, [ token]);

  return (
    <Routes>
      <Route path='/' element={token ? <Navigate to='dashboard'/> : <Login />}/>
      <Route path='/dashboard'  element={token ? <Dashboard/> : <Navigate to='/'/>}/>
    </Routes>
  );
}

export default App;
