import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPollutionData = createAsyncThunk(
  'airPollution/fetchPollutionData',
  async (latlong) => {
    try {
      const { latitude, longitude } = latlong;
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=c8dceae3958b15e8f8e38d827f810487`);
      return response.data.list;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  list: [],
  isLoading: false,
  error: undefined,
};

export const pollutionDetailsSlice = createSlice({
  name: 'aplist',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchPollutionData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPollutionData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchPollutionData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default pollutionDetailsSlice.reducer;
