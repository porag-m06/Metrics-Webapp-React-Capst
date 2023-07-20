import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const geoURLwithOffset = 'http://geodb-free-service.wirefreethought.com/v1/geo/places?offset=0&limit=10&offset=0&types=CITY&minPopulation=7000000&sort=name';

export const fetchGeoLocations = createAsyncThunk(
  'missions/fetchGeoLocations',
  async () => {
    try {
      const response = await axios.get(geoURLwithOffset);
      console.log('GEO', response.data.data);
      return response.data.data;
    } catch (error) {
      return error;
    }
  },
);
const initialState = {
  locations: [],
  isLoading: false,
  error: undefined,
};

export const geolocationSlice = createSlice({
  name: 'locations',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchGeoLocations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGeoLocations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.locations = action.payload;
      })
      .addCase(fetchGeoLocations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },

});

// export const { reserveMission, leaveMission } = missionsSlice.actions;
export default geolocationSlice.reducer;
