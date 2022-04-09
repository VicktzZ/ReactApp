import React from 'react';
import './App.css';
import Header from './components/Header';
import Config from './components/Config';
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import { Route, Switch } from 'react-router-dom'



function App() {
  return (
    <>
      <Switch>
          <Route exact path='/'component={HomePage} />
          <Route path='/:id' component={UserPage}/>
      </Switch>
    </>
  );
}
export default App;