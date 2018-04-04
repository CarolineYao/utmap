import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/Header.css';
import Header from './Header';
import About from './About';
import LoginPage from './LoginPage';
import AccountPage from './AccountPage';
import MapPage from './MapPage';
import {
  BrowserRouter,
  Route,
  Redirect
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favName:'',
      favLat: '', 
      favLng: '',
      isLoggedIn: false,
      name:''
    }
  }

  handleLoggedIn = (indicator,  place, lat, lng) => {
    this.setState({isLoggedIn:indicator});
    this.setState({favName:place, favLat: lat, favLng: lng});
  }

  handleName = (userName) => {
    console.log(userName);
    this.setState({name:userName});
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact = {true} path="/" render={() => (
            <MapPage favLoc={{lat: this.state.favLat, lng: this.state.favLng}} favName={this.state.favName} />
          )}/>
          <Route path="/about" component={About}/>
          <Route path="/account" render={() => (
            this.state.isLoggedIn ? (
              <AccountPage fav={this.state.favName} name={this.state.name} passLoginIndicator={this.handleLoggedIn} />
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
          <Route path="/login" 
          // component={LoginPage} />
          render={() => (
            this.state.isLoggedIn ? (
              <Redirect to="/account"/>
            ) : (
              <LoginPage passInfo={this.handleLoggedIn} passName = {this.handleName}/>
            // )}/>
          ))} />        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
