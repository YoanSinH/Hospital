import React from 'react';
import { Login } from './views/Login';
import { Dashboard } from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    console.log("l",token);
    return <Login setToken={setToken} />;
  }
  return (
    <>
    <div id="main">
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    </>
  );
}
export default App;