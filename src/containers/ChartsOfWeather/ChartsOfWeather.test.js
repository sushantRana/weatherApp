import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import ChartsOfWeather from './ChartsOfWeather';
import { weatherAPIURL, APPID } from '../../config/config';

jest.mock('axios', () => {
  const receivedData = {
    data: {"list":[{"dt":1531310400,"main":{"temp":301.41,"temp_min":298.633,"temp_max":301.41,"pressure":1013.56,"sea_level":1014.27,"grnd_level":1013.56,"humidity":100,"temp_kf":2.77},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":8.62,"deg":247.501},"rain":{"3h":6.605},"sys":{"pod":"d"},"dt_txt":"2018-07-11 12:00:00"}]}
  };
  
  return {
    get: jest.fn(() => Promise.resolve(receivedData)),
  };
});
const props = {
	lat: 19.0759837,
	lng: 72.8776559
}
const lat= 19.0759837;
const lng= 72.8776559;
const charts = shallow(<ChartsOfWeather {...props}/>);
it('fetch data on #componentDidMount of ChartsOfWeather', () => {
	
  const url = `${weatherAPIURL}lat=${lat}&lon=${lng}&appid=${APPID}`;
  charts.instance().componentDidMount();
  expect(axios.get).toHaveBeenCalled();
  expect(axios.get).toHaveBeenCalledWith(url);

});
it ('renders without crashing', () => {
    expect(charts).toMatchSnapshot();
})