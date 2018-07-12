import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export class Mapsfunction extends React.Component {
    render() {
      const { lat, lng, isMarkerShown, onMarkerClick } = this.props;
      return (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: lat, lng: lng }}
          center={{ lat: lat, lng: lng }}
        >
          {isMarkerShown && 
          	<Marker 
          		position={{ lat: lat, lng: lng }} 
          		onClick={() => onMarkerClick(lat, lng)}
          	/>
          }
        </GoogleMap>
      )
    }
};

const Maps = withScriptjs(withGoogleMap(Mapsfunction));

export default Maps;