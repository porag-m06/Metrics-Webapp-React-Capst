import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PollutionDetail from '../components/PollutionDetail';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('PollutionDetail component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      airpollution: {
        list: [],
        isLoading: false,
        error: undefined,
      },
    });
  });

  test('POLLUTIONDETAILS TEST 1: renders loading message when data is being fetched', () => {
    store = mockStore({
      airpollution: {
        list: [],
        isLoading: true,
        error: undefined,
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <PollutionDetail />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('airpollution data is loading...')).toBeInTheDocument();
  });

  test('POLLUTIONDETAILS TEST 2: renders error message when data fetch fails', () => {
    store = mockStore({
      airpollution: {
        list: [],
        isLoading: false,
        error: 'Something went wrong',
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <PollutionDetail />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Something went wrong...!')).toBeInTheDocument();
  });

});
