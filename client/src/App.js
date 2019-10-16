import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Admin from './component/admin/Admin';
function App() {

  return (
    <div className="App">
      <Switch>
        <Route exect path="/admin" component={Admin}/>
      </Switch>
    </div>
  );
}

export default App;
