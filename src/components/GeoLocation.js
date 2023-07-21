import React, { useEffect } from 'react';
import '../style/geolocations.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchGeoLocations } from '../redux/features/geolocations/geolocationSlice';
import worldmap from '../assets/worldmap.png';

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
      <div className="hero">
        <img src={worldmap} alt="worldmap" />
        <div className="hero-right">
          <div className="herotext">
            <h2>POLLUTION INDEX</h2>
            <p>82 major cities</p>
          </div>
        </div>
      </div>
      <p>STATS BY CITIES</p>
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
