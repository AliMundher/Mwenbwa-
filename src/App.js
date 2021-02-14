

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav/nav'
import Login from './components/Login/Login'
import Home from './components/Home/home'
import Register from './components/Register/register'
import { BrowserRouter, Route } from 'react-router-dom';
import axios from "axios";
import UserContext from "./context/UserContext";
// axios.defaults.withCredentials = true;

function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLogin = async () => {
      let token = localStorage.getItem('auth-token');
      if (token === null) {
        localStorage.setItem('auth-token', "");
        token = "";
      }
      const tokenRes = await axios.post("http://localhost:4000/app/tokenValid", null,
        {
          headers: { "x-auth-token": token }
        });
      if (tokenRes.data) {
        const userRes = await axios.get("http://localhost:4000/app/", { headers: { "x-auth-token": token } });

        setUserData({
          token,
          user: userRes.data
        });
      }
    }

    checkLogin();

  }, []);



  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Nav />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
        </UserContext.Provider>
      </BrowserRouter>

    </div>
  )



}

export default App;
