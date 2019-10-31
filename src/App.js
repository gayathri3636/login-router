import React from 'react';
import './App.css';
import Login from './components/login/login';
import Register from './components2/register/register';
import Routers from './routes/route';

function App() {
  return (
    <div>
      <Login />,
      <Register />,
      <Routers />
    </div>
  );
}

export default App;
