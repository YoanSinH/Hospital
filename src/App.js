import React from 'react';
import { Login } from './views/login.js';
import { Dashboard } from './components/dashboard.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div id="main">
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/> // /root directory
          
        </Routes>
    </div>
    </>
  );
}
export default App;