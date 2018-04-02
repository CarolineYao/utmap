import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from 'prop-types';
import '../styles/AccountPage.css';
import { withRouter } from 'react-router-dom';

class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameBuf: '',
      firstNameErr: '',
      lastName: '',
      lastNameErr: '',
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
      isLoginNotSuccessful: false,
      isRegNotSuccessful: false
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
      isLoginNotSuccessful: false,
      isRegNotSuccessful: false });
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
      isLoginNotSuccessful: false,
      isRegNotSuccessful: false });
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
      isRegNotSuccessful: false,
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
      isRegNotSuccessful: false,
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
      isRegNotSuccessful: false,
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
    this.state.passwordCkErr !== '' ||
    this.state.firstNameBuf === '' ||
    this.state.lastNameBuf === '';
  }

  checkRetypePassword = () => {
    if(this.state.passwordBuf === this.state.passwordCkBuf) {
      return true;
    } else {
      return false;
    }
  }

  handleLogSubmit = () => {
    const user = this.props.users.find((user) => {
      return user.username === this.state.usernameLogInBuf;
    });
    this.setState({ isLoginNotSuccessful: true });
    if(user === null || user === undefined) {
      this.setState({ logSuccessfulInfo: 'No such username!' });
    } else {
      // password here is sure to be not null because username exists
      if(this.props.users.find((user) => {
        return user.username === this.state.usernameLogInBuf;
      }).userPassword !== this.state.passwordLogInBuf) {
        this.setState({ logSuccessfulInfo: 'Wrong password!' });
      } else {
        const username = this.state.usernameLogInBuf;
        this.props.login(username);
        this.setState({ logSuccessfulInfo: 'Successful!',
          usernameLogInBuf: '',
          passwordLogInBuf: ''
        });
        this.props.history.push('/');
      }
    }
  }

  handleRegSubmit = () => {
    const user = this.props.users.find((user) => {
      return user.username === this.state.usernameRegBuf;
    });
    this.setState({ isRegNotSuccessful: true });
    if(user === undefined || user === null) {
      const newUser = { firstName: this.state.firstNameBuf,
        lastName: this.state.lastNameBuf,
        username: this.state.usernameRegBuf,
        password: this.state.passwordRegBuf };
      this.setState({ isRegDisabled: 'true',
        logSuccessfulInfo: 'You have successfully registered your UTMap Account!' });
      this.props.addUser(newUser.firstName, newUser.lastName, newUser.username, newUser.password);
    } else {
      this.setState({ logSuccessfulInfo: 'Username has already exist!' });
    }
    this.setState({
      usernameRegBuf: '',
      passwordRegBuf: '',
      passwordCkBuf: '',
      firstNameBuf: '',
      lastNameBuf: ''
    });
  }

  handleFirstNameChange = (event) => {
    this.setState({ firstNameBuf: event.target.value,
      isRegNotSuccessful: false,
      isLoginNotSuccessful: false });
    this.handleFirstNameCheckErr(event.target.value);
  }

  handleFirstNameCheckErr = (text) => {
    if(text === '') {
      this.setState({ firstNameErr: 'This field is required!' });
    } else {
      this.setState({ firstNameErr: '' });
    }
  }

  handleLastNameChange = (event) => {
    this.setState({ lastNameBuf: event.target.value,
      isRegNotSuccessful: false,
      isLoginNotSuccessful: false });
    this.handleLastNameCheckErr(event.target.value);
  }

  handleLastNameCheckErr = (text) => {
    if(text === '') {
      this.setState({ lastNameErr: 'This field is required!' });
    } else {
      this.setState({ lastNameErr: '' });
    }
  }

  render() {
    const textFieldStyle = {
      margin: '15px',
    };
    return (
      <div className="account-management">
        <div id="wraper">
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
                  hintText="Enter your First Name"
                  floatingLabelText="First Name"
                  errorText={this.state.firstNameErr}
                  value={this.state.firstNameBuf}
                  onChange = {this.handleFirstNameChange} />
              </div>
              <div>
                <TextField
                  hintText="Enter your Last Name"
                  floatingLabelText="Last Name"
                  errorText={this.state.lastNameErr}
                  value={this.state.lastNameBuf}
                  onChange = {this.handleLastNameChange} />
              </div>
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
              <Snackbar
                open={this.state.isRegNotSuccessful}
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
AccountPage.propTypes = {
  addUser: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  history: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    userPassword: PropTypes.string.isRequired,
  })).isRequired
};

export default withRouter(AccountPage);