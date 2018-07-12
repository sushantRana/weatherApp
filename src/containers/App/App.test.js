import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import Root from '../../Root';
import Maps from '../../components/Maps/Maps';
import Modal from '../../components/Modal/Modal';

import { mount } from 'enzyme';
import moxios from 'moxios';

import { shallow } from 'enzyme';

describe('App', () => {
  const props = {
	lat: 19.0759837,
	lng: 72.8776559,
    weather: {}
}
  const wrapped = mount(
	  <Root>
	    <App />
	  </Root>
	);
  const app = shallow(<App {...props} />);
  it ('renders without crashing', () => {
    expect(app).toMatchSnapshot();
  });

  it('Shows a Maps', () => {
    expect(app.find(Maps).length).toEqual(1);
  });
  it('can fetch a list of places and display them on map', (done) => {
	  wrapped.find('PlacesAutocomplete').simulate('select', 'Bangalore');
	  moxios.wait(() => {
	      wrapped.update();
	      expect(wrapped.find(Maps).length).toEqual(1);
	      done();
	      wrapped.unmount();
	  });
   });
});
