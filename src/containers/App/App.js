import React from 'react';
import AutocompleteBox from '../AutocompleteBox/AutocompleteBox';
import Modal from '../../components/Modal/Modal';
import Maps from '../../components/Maps/Maps';
import { GoogleURL } from '../../config/config';
import { connect } from 'react-redux';

import './App.css';

export class App extends React.Component {
  state = {};

  handleMarkerClick = (lat, lng) => {
    this.setState({modalIsOpen : true});
  }
  closeModal = () => {
    this.setState({modalIsOpen : false}); 
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          lat={this.props.lat}
          lng={this.props.lng}
        />
        <div className='headerDiv'>
          <h3 className='title'>Weather Prediction App</h3>
        </div>
        <AutocompleteBox />
        <Maps
          onMarkerClick={this.handleMarkerClick}
          isMarkerShown
          googleMapURL={GoogleURL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `800px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          lat={this.props.lat}
          lng={this.props.lng}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lat: state.weather.lat,
  lng: state.weather.lng
});

export default connect(mapStateToProps)(App)
