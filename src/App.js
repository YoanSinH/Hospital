import React from 'react';
import { Login } from './views/Login';
import { Dashboard } from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useToken from './useToken';

import { User } from './views/User';
import { Doctor } from './views/Doctor';

function App() {
  const { token, setToken } = useToken();
  /*if (!token) {
    console.log("l",token);
    return <Login setToken={setToken} />;
  }*/
  return (
    <>
    <div id="main">
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/doctor' element={<Doctor/>}/>
        </Routes>
    </div>
    </>
  );
}
export default App;