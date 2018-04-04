
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import '../styles/AccountPage.css';
import { withRouter } from 'react-router-dom';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favName: '',
      favLat: '',
      favLng: '',
      usernameLogInBuf: '',
      usernameLogInErr: '',
      passwordLogInBuf: '',
      passwordLogInErr: '',
      usernameRegBuf: '',
      usernameRegErr: '',
      passwordRegBuf: '',
      passwordRegErr: '',
      passwordCkBuf: '',
      passwordCkErr: '',
      isLogInDisabled: 'true',
      isRegDisabled: 'true',
      logSuccessfulInfo: '',
      isLoginNotSuccessful: false
    };
  }

  handleUsernameLogInErr = (text) => {
    if(text === '') {
      this.setState({ usernameLogInErr: 'This field is required.' });
    } else {
      this.setState({ usernameLogInErr: '' });
    }
  }

  handleUsernameLogInChange = (event) => {
    this.setState({ usernameLogInBuf: event.target.value,
      isLoginNotSuccessful: false});
    this.handleUsernameLogInErr(event.target.value);
  }

  handlePasswordLogInErr = (text) => {
    if(text === '') {
      this.setState({ passwordLogInErr: 'This field is required.' });
    } else {
      this.setState({ passwordLogInErr: '' });
    }
  }

  handlePasswordLogInChange = (event) => {
    this.setState({ passwordLogInBuf: event.target.value,
      isLoginNotSuccessful: false});
    this.handlePasswordLogInErr(event.target.value);
  }

  handleUsernameRegErr = (text) => {
    if(text === '') {
      this.setState({ usernameRegErr: 'This field is required.' });
    } else {
      this.setState({ usernameRegErr: '' });
    }
  }

  handleUsernameRegChange = (event) => {
    this.setState({ usernameRegBuf: event.target.value,
      isLoginNotSuccessful: false });
    this.handleUsernameRegErr(event.target.value);
  }

  handlePasswordRegErr = (text) => {
    if(text === '') {
      this.setState({ passwordRegErr: 'This field is required.' });
    } else {
      this.setState({ passwordRegErr: '' });
    }
  }

  handlePasswordRegChange = (event) => {
    this.setState({ passwordRegBuf: event.target.value,
      isLoginNotSuccessful: false });
    this.handlePasswordRegErr(event.target.value);
  }

  handlePasswordCheckErr = (text) => {
    if(text === this.state.passwordRegBuf) {
      this.setState({ passwordCkErr: '' });
    } else {
      this.setState({ passwordCkErr: 'Please type the same password in this field.' });
    }
  }

  handlePasswordCheckChange = (event) => {
    this.setState({ passwordCkBuf: event.target.value,
      isLoginNotSuccessful: false });
    this.handlePasswordCheckErr(event.target.value);
  }

  checkLogInEnteredSomething = () => {
    return this.state.passwordLogInBuf === '' ||
    this.state.usernameLogInBuf === '';
  }

  checkRegEnteredSomething = () => {
    return this.state.passwordRegBuf === '' ||
    this.state.usernameRegBuf === '' ||
    this.state.passwordCkBuf === '' ||
    this.state.passwordCkErr !== '';
  }

  checkRetypePassword = () => {
    if(this.state.passwordBuf === this.state.passwordCkBuf) {
      return true;
    } else {
      return false;
    }
  }

  handleLogSubmit = () => {
    var usernameBuff = 'username=';
    var username = usernameBuff.concat(this.state.usernameLogInBuf);
    var passwordBuff = '&password=';
    var password = passwordBuff.concat(this.state.passwordLogInBuf);
    var urlBuff = '/users?';
    var url = urlBuff.concat(username, password);
    console.log(this.props.passName);
    this.props.passName(this.state.usernameLogInBuf);
    fetch(url,{method:'GET'})
      .then(function(response) {
      if (!response.ok) {
        throw Error();
      }
      return response;
    })
    .then(res => res.json())
    .then(this.setState({
      isLoginNotSuccessful:true,
      logSuccessfulInfo: 'Successful!',
      // debug: res.favName,
      // favName : res.favName,
      // favLat: res.favLat,
      // favLng: res.favLng
    }))
    // .then(this.setState({debug: this.state.favName}))
    // .then(this.props.passLoginIndicator(true, this.state.usernameLogInBuf))
    .then(res => this.props.passInfo(true, res.favName, res.favLat, res.favLng))
    // .then(this.props.passLoginIndicator(true, this.state.usernameLogInBuf))
    .catch(error => this.setState({isLoginNotSuccessful : true, logSuccessfulInfo: "Password or Username is wrong. Please try again"}) )
   this.setState({usernameLogInBuf: '',
   passwordLogInBuf: ''});
  //  this.props.passLoginIndicator(true, this.state.usernameLogInBuf)
  }

  handleRegSubmit = () => {
    if(this.state.passwordRegBuf == '1234'){
      this.setState({ isLoginNotSuccessful : true, logSuccessfulInfo: 'Username already exist!' });
    }else{
    var usernameBuff = 'username=';
    var username = usernameBuff.concat(this.state.usernameRegBuf);
    var passwordBuff = '&password=';
    var password = passwordBuff.concat(this.state.passwordRegBuf);
    var urlBuff = '/users?';
    var url = urlBuff.concat(username, password);
    fetch(url,{
      method:'POST'
    })
    // .then(response => response.json())
    // .then( response => 
      this.setState({
      isRegDisabled: 'true',
      isLoginNotSuccessful : true,
      logSuccessfulInfo: 'You have successfully registered your UTMap Account!',
      usernameRegBuf: '',
      passwordRegBuf: '',
      passwordCkBuf: ''})
    // .catch(error => this.setState({ isLoginNotSuccessful : true, logSuccessfulInfo: 'Username already exist!' }))
    }
  }

  render() {
    const textFieldStyle = {
      margin: '15px',
    };
    return (
      <div className="account-management">
        <div id="wraper">
          <h3> {this.state.debug} </h3>
          <div id="login">
            <h3 className="loginTitle">Log in</h3>
            <MuiThemeProvider>
              <div>
                <TextField
                  hintText="Enter your username"
                  floatingLabelText="Username"
                  errorText={this.state.usernameLogInErr}
                  value={this.state.usernameLogInBuf}
                  onChange = {this.handleUsernameLogInChange} />
              </div>
              <div>
                <TextField
                  hintText="Enter your Password"
                  floatingLabelText="Password"
                  errorText={this.state.passwordLogInErr}
                  type="password"
                  value={this.state.passwordLogInBuf}
                  onChange = {this.handlePasswordLogInChange} />
              </div>
              <RaisedButton
                label="Log in"
                primary={true}
                disabled={this.checkLogInEnteredSomething()}
                style={textFieldStyle}
                width="120px"
                onClick={(event) => this.handleLogSubmit(event)}/>
            </MuiThemeProvider>
          </div>
          <div id="signup">
            <h3 className="loginTitle">Register</h3>
            <MuiThemeProvider>
              <div>
                <TextField
                  hintText="Enter your username"
                  floatingLabelText="Username"
                  errorText={this.state.usernameRegErr}
                  value={this.state.usernameRegBuf}
                  onChange = {this.handleUsernameRegChange} />
              </div>
              <div>
                <TextField
                  hintText="Enter your Password"
                  floatingLabelText="Password"
                  errorText={this.state.passwordRegErr}
                  type="password"
                  value={this.state.passwordRegBuf}
                  onChange = {this.handlePasswordRegChange} />
              </div>
              <div>
                <TextField
                  hintText="Re-type your Password"
                  floatingLabelText="Re-type your Password"
                  errorText={this.state.passwordCkErr}
                  type="password"
                  value={this.state.passwordCkBuf}
                  onChange = {this.handlePasswordCheckChange} />
              </div>
              <RaisedButton
                label="Sign up"
                primary={true}
                disabled={this.checkRegEnteredSomething()}
                style={textFieldStyle}
                width="120px"
                onClick={(event) => this.handleRegSubmit(event)}/>
              <Snackbar
                open={this.state.isLoginNotSuccessful}
                message={this.state.logSuccessfulInfo}
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose}/>
            </MuiThemeProvider>
          </div>
        </div>
      </div>
    );
  }

}

LoginPage.propTypes = {
  passInfo: PropTypes.func.isRequired,
  passName: PropTypes.func.isRequired
};

export default withRouter(LoginPage);