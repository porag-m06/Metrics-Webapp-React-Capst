import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGeoLocations = createAsyncThunk(
  'locations/fetchGeoLocations',
  async () => {
    try {
      const promises = [];
      for (let i = 0; i < 90; i += 10) {
        const promise = axios.get(`http://geodb-free-service.wirefreethought.com/v1/geo/places?limit=10&offset=${i}&types=CITY&minPopulation=7000000&sort=name`);
        promises.push(promise);
      }
      const responses = await Promise.all(promises);
      const responseData = responses.flatMap((response) => response.data.data);
      return responseData;
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
