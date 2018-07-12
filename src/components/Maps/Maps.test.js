import React from 'react';
import { shallow } from 'enzyme';
import Mapsfunction from './Maps';
import { Marker } from "react-google-maps"
import { GoogleURL } from '../../config/config';

const props = {
  lat: '',
  lng: '',
  googleMapURL:GoogleURL,
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `800px` }} />,
  mapElement: <div style={{ height: `100%` }} />,
  isMarkerShown: true,
  onMarkerClick: jest.fn()
}
const map = shallow(<Mapsfunction {...props} />);

it("map renders correctly", () => {
  expect(map).toMatchSnapshot();
});
