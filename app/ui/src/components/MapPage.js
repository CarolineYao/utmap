import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Map from './Map';
import SearchBar from './SearchBar';
import '../styles/MapPage.css';
import { Col, Grid, Row } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class MapPage extends Component {
  constructor() {
    super();
    this.state = {
      mainLocation: '',
      mainName: '',
      Loc1: 'Gerstein Library' ,
      Loc2: 'Medical Science Building',
      Loc3: 'Robarts',
      Loc4:'Bahen Center',
      Loc1Loc: { lat: 43.6622, lng: -79.3940 },
      Loc2Loc: { lat: 43.6609, lng: -79.3937 },
      Loc3Loc: { lat: 43.6645, lng: -79.3997 },
      Loc4Loc: { lat: 43.659724, lng: -79.396774},
      showLoc1: 'null' ,
      showLoc2: 'null',
      showLoc3: 'null',
      showLoc4: 'null',
      showFav: 'null',
      showMain: 'null',
      centerlocation: { lat: 43.6629, lng: -79.3957 },
      markerlocation: { lat: 43.6629, lng: -79.3957 }
    };
  }

  handleShow1 = () => {
    this.setState( {
      showLoc1 : 'info' ,
      showLoc2 : 'null',
      showLoc3 : 'null',
      showLoc4 : 'null',
      showFav: 'null',
      showMain: 'null',
      markerlocation:  this.state.Loc1Loc
    });
  }
  handleShow2 = () => {
    this.setState( {
      showLoc1 : 'null' ,
      showLoc2 : 'info',
      showLoc3 : 'null',
      showLoc4 : 'null',
      showFav: 'null',
      showMain: 'null',
      markerlocation:  this.state.Loc2Loc
    });
  }
  handleShow3 = () => {
    this.setState( {
      showLoc1 : 'null' ,
      showLoc2 : 'null',
      showLoc3 : 'info',
      showLoc4 : 'null',
      showFav: 'null',
      showMain: 'null',
      markerlocation:  this.state.Loc3Loc
    });
  }
  handleShow4 = () => {
    this.setState( {
      showLoc1 : 'null' ,
      showLoc2 : 'null',
      showLoc3 : 'null',
      showLoc4 : 'info',
      showFav: 'null',
      showMain: 'null',
      markerlocation: this.state.Loc4Loc
    });
  }
  handleShowFav = () => {
    console.log(this.props.favLoc);
    this.setState( {
      showLoc1 : 'null' ,
      showLoc2 : 'null',
      showLoc3 : 'null',
      showLoc4 : 'null',
      showFav: 'info',
      showMain: 'null',
      markerlocation: this.props.favLoc
    });
  }

  handleShowMain = () => {
    this.setState( {
      showLoc1 : 'null' ,
      showLoc2 : 'null',
      showLoc3 : 'null',
      showLoc4 : 'null',
      showFav: 'null',
      showMain: 'info',
      markerlocation: this.state.mainLocation
    });
  }

  handleSearch = (abb)=> {
    console.log(abb);
    // this.setState({debug:abb});
    var abbBuff = '&abb=';
    var abbfinal = abbBuff.concat(abb);
    var urlBuff = '/locations?';
    var url = urlBuff.concat(abbfinal);
    fetch(url,{method:'GET'})
      .then(function(response) {
      if (!response.ok) {
        throw Error();
      }
      return response;
    })
    .then(res => res.json())
    .then(res => this.setState({
      mainName: res.name,
      mainLocation: {lat:res.lat, lng:res.lng},
      Loc1: res.firstName,
      Loc1Loc: {lat: res.firstLat, lng: res.firstLog},
      Loc2: res.secondName,
      Loc2Loc: {lat: res.secondLat, lng: res.secondLog},
      Loc3: res.thirdName,
      Loc3Loc: {lat: res.thirdLat, lng: res.thirdLog},
      Loc4: res.fourthName,
      Loc4Loc: {lat: res.fourthLat, lng: res.fourthLog},

      showLoc1: 'null' ,
      showLoc2: 'null',
      showLoc3: 'null',
      showLoc4: 'null',

      markerlocation: { lat: res.lat, lng: res.lng }
    }))
    // .then(this.props.passLoginIndicator(true, this.state.usernameLogInBuf))
    .catch(error => this.setState({isLoginNotSuccessful : true, logSuccessfulInfo: "Password or Username is wrong. Please try again"}) )
    console.log(this.state.mainName);
  //  this.props.passLoginIndicator(true, this.state.usernameLogInBuf)
  }


  render(){
    return(
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={8}>
              <Map isMarkerShown
                markerLocation = { this.state.markerlocation }
                centerLocation = { this.state.centerlocation }
                // labelLocation = {this.state.mainLocation}
                id = "Gmap"
              />
            </Col>
            <Col xs={12} sm={4}>
              <SearchBar passAbb = {this.handleSearch}/>
              <div id = "LV">
                <ListGroup>
                <ListGroupItem
                    header="Favorite Place"
                    bsStyle = { this.state.showFav }
                    onClick = { this.handleShowFav }>

                    {this.props.favName}
                  </ListGroupItem>
                <ListGroupItem
                    header= "Searched Place"
                    bsStyle = { this.state.showMain }
                    onClick = { this.handleShowMain }>
      
                    {this.state.mainName}
                  </ListGroupItem>
                  <ListGroupItem
                    header={this.state.Loc1}
                    bsStyle = { this.state.showLoc1 }
                    onClick = { this.handleShow1 }>

                    {this.state.Loc1}
                  </ListGroupItem>
                  <ListGroupItem
                    header={this.state.Loc2}
                    href="#"
                    bsStyle = { this.state.showLoc2 }
                    onClick = { this.handleShow2 }>
                    {this.state.Loc2}
                  </ListGroupItem>
                  <ListGroupItem
                    header={this.state.Loc3}
                    bsStyle = { this.state.showLoc3 }
                    onClick = {this.handleShow3}>
                    {this.state.Loc3}
                  </ListGroupItem>
                  <ListGroupItem
                    header={this.state.Loc4}
                    bsStyle = { this.state.showLoc4 }
                    onClick = {this.handleShow4}>
                    {this.state.Loc4}
                  </ListGroupItem>
                </ListGroup>;
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

MapPage.propTypes = {
  favLoc: PropTypes.object.isRequired,
  favName: PropTypes.string.isRequired
};

export default MapPage;