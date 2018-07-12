export const SET_LAT_LNG = 'SET_LAT_LNG';

export function setLatLng(latLng) {
	console.log('setLatLng', latLng);
  return {
    type: SET_LAT_LNG,
    payload: latLng
  };
}
