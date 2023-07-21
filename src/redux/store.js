import { configureStore } from '@reduxjs/toolkit';
import geolocationReducer from './features/geolocations/geolocationSlice';
import pollutionDetailsReducer from './features/pollutionDetails/pollutionDetailsSlice';

export default configureStore({
  reducer: {
    geolocation: geolocationReducer,
    airpollution: pollutionDetailsReducer,
  },
});
