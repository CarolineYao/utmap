import React ,{ Component } from 'react';
import FullScreen from 'react-fullscreen';
import Picture from '../images/uc.jpeg';
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div id = "home-con">
        <FullScreen>
          <img id = "home-img" src = {Picture} alt=""></img>
        </FullScreen>
        <a id="home-txt" href="/map">Welcome to UTMap</a>
      </div>
    );
  }
}

export default Home;
