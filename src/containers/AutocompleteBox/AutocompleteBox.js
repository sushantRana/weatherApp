import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLatLng } from '../../actions/index';

class AutocompleteBox extends React.Component {
	state = {
	    address: '',
	  };

	handleSelect = address => {
      geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);
        this.props.setLatLng({
          lat: latLng.lat,
          lng: latLng.lng
        });
      })
      .catch(error => console.error('Error', error));
  	};
  	handleChange = address => {
    	this.setState({ address });
  	};

	render () {
		return (
		<PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              {suggestions.length > 0 && (
                <div className="app__autocomplete-container">
                  {suggestions.map(suggestion => {
                    const className = 'app__suggestion-item';
                    return (
                      /* eslint-disable react/jsx-key */
                      <div
                        {...getSuggestionItemProps(suggestion, { className })}
                      >
                        <strong>
                          {suggestion.formattedSuggestion.mainText}
                        </strong>{' '}
                        <small>
                          {suggestion.formattedSuggestion.secondaryText}
                        </small>
                      </div>
                    );
                    /* eslint-enable react/jsx-key */
                  })}
                </div>
              )}
            </div>
          )}
        </PlacesAutocomplete>
		)
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setLatLng }, dispatch);
}
export default connect(null, mapDispatchToProps)(AutocompleteBox);

