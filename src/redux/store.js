import { configureStore } from '@reduxjs/toolkit';
import geolocationReducer from './features/geolocations/geolocationSlice';

export default configureStore({
  reducer: {
    geolocation: geolocationReducer,
  },
});
