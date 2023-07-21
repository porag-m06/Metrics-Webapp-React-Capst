import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchGeoLocations } from '../redux/features/geolocations/geolocationSlice';

function GeoLocation() {
  const { locations, isLoading, error } = useSelector((storeState) => storeState.geolocation);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (locations.length === 0) { dispatch(fetchGeoLocations()); }
  }, [locations, dispatch]);

  if (isLoading) { return (<div>geoLocations data is loading...</div>); }
  if (error) { return (<div>Something went wrong...!</div>); }

  return (
    <div>
      GEOLOCATIONS :
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            <button
              type="button"
              onClick={() => {
                navigate('/city-pollution-info', { state: { location } });
              }}
            >
              <div className="card">
                <h2>{location.name}</h2>
                <h5>{location.country}</h5>
                <p>{`Latitude: ${location.latitude}\nLongitude: ${location.longitude}`}</p>
                <h3>{`Population: ${location.population / 100000} Millions`}</h3>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GeoLocation;
