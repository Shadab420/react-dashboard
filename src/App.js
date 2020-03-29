import React from 'react';
import './App.css';

//components
import Authentication from './components/Authentication/Authentication';
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Auth, { useAuth, AuthContextProvider } from './myHooks/useAuth';
import Appbar from './components/Menus/Appbar';
import Dashboard from './components/Dashboard/Dashboard';



function App() {
  
  return (
    <AuthContextProvider>
    <div className="App">
      
        <Router>

            <Switch>
              <Route path="/authentication">
                <Authentication/>
              </Route>
              <Route path="/dashboard">
                <Dashboard/>
              </Route>
              <Route path="/">
                <Authentication/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>


        </Router>
        
    </div>
    </AuthContextProvider>
  );
}

export default App;
