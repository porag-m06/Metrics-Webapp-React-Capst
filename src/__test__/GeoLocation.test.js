import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import GeoLocation from '../components/GeoLocation';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('GeoLocation component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      geolocation: {
        locations: [],
        isLoading: false,
        error: undefined,
      },
    });
  });

  test('GEOLOCATION TEST 1: renders loading message when data is being fetched', () => {
    store = mockStore({
      geolocation: {
        locations: [],
        isLoading: true,
        error: undefined,
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <GeoLocation />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('geoLocations data is loading...')).toBeInTheDocument();
  });

  test('GEOLOCATION TEST 2: renders error message when data fetch fails', async () => {
    store = mockStore({
      geolocation: {
        locations: [],
        isLoading: false,
        error: 'Something went wrong',
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <GeoLocation />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Something went wrong...!')).toBeInTheDocument();
  });
});
