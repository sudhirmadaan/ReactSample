import React, { useState } from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Preference from '../components/Preference/Preference';
import Login from './Login/Login';

function RouterHome() {
    const [token, setToken] = useState();

    // if(!token) {
    //     return <Login setToken={setToken} />
    //   }
      
    return (
        <div className="wrapper">
          <h1>Application</h1>
          <BrowserRouter>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/preference">
                <Preference />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      );
}

export default RouterHome;