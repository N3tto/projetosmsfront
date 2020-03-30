import React from 'react';
import './App.css';
import Login from './views/login/Login'
import Register from './views/register/Register'
import Form from './components/Form'
import Chat from './views/chat/Chat'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = '/login' component = {Login}/>
          <Route path = '/register' component = {Register}/>
          <Route path = '/form' component = {Form}/>
          <Route path = '/chat' component = {Chat}/>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
