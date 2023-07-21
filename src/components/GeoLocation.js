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
    <div className="home-container">
      <div className="hero">
        <img src={worldmap} alt="worldmap" />
        <div className="hero-right">
          <div>
            <h2>POLLUTION INDEX</h2>
            <p>82 major cities</p>
          </div>
        </div>
      </div>
      <p className="middle">STATS BY CITIES</p>
      <ul className="ulist">
        {locations.map((location) => (
          <li key={location.id}>
            <button
              type="button"
              onClick={() => {
                navigate('/city-pollution-info', { state: { location } });
              }}
            >
              <div className="card">
                <h3>{(location.name).toUpperCase()}</h3>
                <h5>{(location.country).toUpperCase()}</h5>
                <h6>{`Latitude: ${(location.latitude).toFixed(2)}`}</h6>
                <h6>{`Longitude: ${(location.longitude).toFixed(2)}`}</h6>
                <h4>{`Population: ${(location.population / 1000000).toFixed(2)} M`}</h4>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GeoLocation;
