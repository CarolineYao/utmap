import React from 'react';
// import ReactDOM from 'react-dom';
import { compose, withProps } from 'recompose';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const Map = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDIO0xcN6Qj9IFwv-KPcNOgC4xWexH48Lk&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={16} defaultCenter=  { props.centerLocation }>
    {props.isMarkerShown && (
      <Marker position={ props.markerLocation } />
    )}
  </GoogleMap>
));

Map.propTypes = {
  centerLocation: PropTypes.object.isRequired,
  markerLocation: PropTypes.object.isRequired
};

export default Map;
