
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav/nav'
import Login from './components/Login/Login'
import Home from './components/Home/home'
import Register from './components/Register/register'
import { BrowserRouter, Route } from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
          </div>
        </BrowserRouter>

      </div>
    )
  }


}

export default App;
