import React from 'react';
import { Login } from './views/Login';
import { Dashboard } from './components/Dashboard';
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