import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchPollutionData } from '../redux/features/pollutionDetails/pollutionDetailsSlice';

function PollutionDetail() {
  const location = useLocation();
  const { name, latitude, longitude } = location.state.location;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPollutionData({ latitude, longitude }));
  }, []);

  const { list, isLoading, error } = useSelector((storeState) => storeState.airpollution);
  const airQualityIndex = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

  if (isLoading) { return (<div>geoLocations data is loading...</div>); }
  if (error) { return (<div>Something went wrong...!</div>); }

  return (
    <div>
      <h2>
        Pollution Detail of:
        {name}
      </h2>
      <ul>
        {list.map((item) => (
          <li key={1}>
            Air Quality Index is :
            {item.main.aqi}
            {' '}
            or,
            {airQualityIndex[item.main.aqi - 1]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PollutionDetail;
