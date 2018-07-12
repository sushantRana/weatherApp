import { SET_LAT_LNG } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case SET_LAT_LNG:
      return {
        ...state,
        lat: action.payload.lat,
        lng: action.payload.lng
      };

    default:
      return {
    	...state,
    	lat: 19.0759837,
    	lng: 72.8776559
      }
  }
}