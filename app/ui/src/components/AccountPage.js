import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Row, Button } from 'react-bootstrap';
import SearchBar from './SearchBar'
import '../styles/AccountPage.css';
import { withRouter } from 'react-router-dom';

class AccountPage extends Component {
  constructor(){
    super();
    this.state = {
      newFav : ''
    }
  }

  handleLogOut = () => {
    this.props.passLoginIndicator(false);
  }

  handleChange = (abb) => {
    this.setState({newFav: abb});
    
    var usernameBuff = 'username=';
    var username = usernameBuff.concat(this.props.name);
    var abbBuff = '&fav=';
    var abbfinal = abbBuff.concat(abb);
    var urlBuff = '/users?';
    var url = urlBuff.concat(username, abbfinal);
    fetch(url,{method:'PUT'})
      .then(function(res) {
      if (!res.ok) {
        throw Error();
      }
      return res;
    })
    .then(res => res.json())
    .then(res => this.setState({
      newFav:res.favName
      // debug: res.favName,
      // favName : res.favName,
      // favLat: res.favLat,
      // favLng: res.favLng
    }))
    // .then(console.log(this.status.newFav))
    .catch(error => console.log(url))
    // .then(this.setState({debug: this.state.favName}))
    // .then(this.props.passLoginIndicator(true, this.state.usernameLogInBuf))
    // .then(this.props.passLoginIndicator(true, this.state.usernameLogInBuf))
  }

  render() {
    const textFieldStyle = {
      margin: '15px',
    };
    return (
      <div>
        <h1 id = "userGreeting"> Hello {this.props.name} </h1>
        <h3 id = "userfav">Your favorite place is '{this.props.fav}'</h3>
        <h3 id = "userfavChange">To change your favorite place, please select</h3> 
        <div id = "searchsearch">
          <SearchBar passAbb = {this.handleChange}/>
        </div>
        <div id = "logoutbutton">
        <Button onClick={this.handleLogOut}>
          Log Out
        </Button>
        </div>
      </div>
    );
  }

}

AccountPage.propTypes = {
  fav: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  passLoginIndicator: PropTypes.func.isRequired,
  changeFav: PropTypes.func.isRequired
};

export default withRouter(AccountPage);