import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiNijaCityUrl = 'https://api.api-ninjas.com/v1/city?min_population=5000000&limit=30';
const apiKey = '/YeVAlnqFdBB70E8aGovGA==fjN5mk2cXRLs5vHK';

export const fetchGeoLocations = createAsyncThunk(
  'locations/fetchGeoLocations',
  async () => {
    try {
      const response = await axios.get(apiNijaCityUrl, {
        headers: {
          'X-Api-Key': apiKey,
        },
      });
      return response.data;
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

export default geolocationSlice.reducer;
