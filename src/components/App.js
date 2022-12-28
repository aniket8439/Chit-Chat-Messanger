import React from "react";

import { Router, Switch, Route } from "react-router-dom"
import { createBrowserHistory } from 'history';
import { AuthProvider } from "../contexts/AuthContext"
import Chats from "./Chats";
import Login from "./Login";


function App() {
  const history = createBrowserHistory();
  return (
    <div style={{ fontFamily: 'Avenir' }}>
 
      <Router history={history}>
         <AuthProvider> 
          <Switch>
            <Route  exact path="/chats" component={Chats} />
            <Route  exact path="/"  component={Login} /> 
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App