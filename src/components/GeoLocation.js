import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGeoLocations } from '../redux/features/geolocations/geolocationSlice';

function GeoLocation() {
  const { locations, isLoading, error } = useSelector((storeState) => storeState.geolocation);
  const dispatch = useDispatch();

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
            {`Location: ${location.name} \nLatitude: ${location.latitude}\nLongitude: ${location.longitude}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GeoLocation;
