import React from "react";

import {  Switch, Route, BrowserRouter } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext"
import Chats from "./Chats";
import Login from "./Login";


function App() {
 
  return (
    <div style={{ fontFamily: 'Avenir' }}>
 
      <BrowserRouter>
         <AuthProvider> 
          <Switch>
            <Route path="/chats" exact component = { Chats } />
            <Route path="/"  exact component = { Login } /> 
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App