
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav/nav'
import Login from './components/Login/Login'
import Home from './components/Home/home'
import MapGame from './components/MapGame/mapgame'
import Buy from './components/Buy/buy'
import Setting from './components/Setting/setting'
import Register from './components/Register/register'
import { BrowserRouter, Route } from 'react-router-dom';
import axios from "axios";
import UserContext from "./context/UserContext";


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
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/buy" component={Buy} />
            <Route path="/setting" component={Setting} />
          </div>
        </UserContext.Provider>

      </BrowserRouter>
      {/* Check if User Log in Show the MapGame */}
      {
        userData.user ? (
          <>

            <MapGame user={userData.user.userName} />

          </>
        ) : ""
      }


    </div>

  );

}

export default App;
