import React from 'react';
import '../styles/App.css';
import '../styles/Header.css';
import Header from './Header';
import Home from './Home';
import AccountPage from './AccountPage';
import MapPage from './MapPage';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact = {true} path="/" component={Home}/>
        <Route path="/map" component={MapPage}/>
        <Route path="/account" component={AccountPage}/>
      </div>
    </BrowserRouter>
  );
};

export default App;
