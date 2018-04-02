import React, { Component } from 'react';
import Map from './Map';
import SearchBar from './SearchBar';
import '../styles/MapPage.css';
import { Col, Grid, Row } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class MapPage extends Component {
  constructor() {
    super();
    this.state = {
      showLoc1: 'null' ,
      showLoc2: 'null',
      showLoc3: 'null',
      centerlocation: { lat: 43.6629, lng: -79.3957 },
      markerlocation: { lat: 43.6629, lng: -79.3957 }
    };
  }

  handleShow1 = () => {
    this.setState( {
      showLoc1 : 'info' ,
      showLoc2 : 'null',
      showLoc3 : 'null',
      markerlocation:  { lat: 43.6622, lng: -79.3940 }
    });
  }
  handleShow2 = () => {
    this.setState( {
      showLoc1 : 'null' ,
      showLoc2 : 'info',
      showLoc3 : 'null',
      markerlocation:  { lat: 43.6609, lng: -79.3937 }
    });
  }
  handleShow3 = () => {
    this.setState( {
      showLoc1 : 'null' ,
      showLoc2 : 'null',
      showLoc3 : 'info',
      markerlocation:  { lat: 43.6645, lng: -79.3997 }
    });
  }

  render(){
    return(
      <Grid>
        <Row>
          <Col xs={12} sm={8}>
            <Map isMarkerShown
              markerLocation = { this.state.markerlocation }
              centerLocation = { this.state.markerlocation }
              id = "Gmap"
            />
          </Col>
          <Col xs={12} sm={4}>
            <SearchBar />
            <div id = "LV">
              <ListGroup>
                <ListGroupItem
                  header="Gerstein"
                  bsStyle = { this.state.showLoc1 }
                  onClick = { this.handleShow1 }>

                  Gerstein Library
                </ListGroupItem>
                <ListGroupItem
                  header="Medical Science"
                  href="#"
                  bsStyle = { this.state.showLoc2 }
                  onClick = { this.handleShow2 }>
                  Medical Science Building
                </ListGroupItem>
                <ListGroupItem
                  header="Robarts"
                  bsStyle = { this.state.showLoc3 }
                  onClick = {this.handleShow3}>
                  Robarts
                </ListGroupItem>
              </ListGroup>;
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default MapPage;