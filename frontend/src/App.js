import { Navigate, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  const token = localStorage.getItem('token');
  return (
    <Routes>
      <Route path='/' element={token ? <Navigate to='dashboard'/> : <Login/>}/>
      <Route path='/dashboard'  element={token ? <Dashboard/> : <Navigate to='/'/>}/>
    </Routes>
  );
}

export default App;
