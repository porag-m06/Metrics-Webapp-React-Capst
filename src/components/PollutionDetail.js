import React, { useEffect } from 'react';
import '../style/pollutionDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';
import { RiSettings5Fill } from 'react-icons/ri';
import { fetchPollutionData } from '../redux/features/pollutionDetails/pollutionDetailsSlice';

function PollutionDetail() {
  const { list, isLoading, error } = useSelector((storeState) => storeState.airpollution);

  const location = useLocation();
  const { name, latitude, longitude } = location.state?.location || {};

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPollutionData({ latitude, longitude }));
  }, []);

  const airQualityIndex = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

  if (isLoading) { return (<div>airpollution data is loading...</div>); }
  if (error) { return (<div>Something went wrong...!</div>); }

  return (
    <>
      <header className="nav-container">
        <div className="logo">
          <button
            className="back-btn"
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoIosArrowBack className="react-icon" />
            .
          </button>
        </div>
        <div className="search">
          <span>air pollution index view</span>
        </div>
        <div>
          <BsFillMicFill className="react-icon" />
          <RiSettings5Fill className="react-icon" />
        </div>
      </header>

      <div className="detail-container">
        <h2>
          City :
          {' '}
          {name}
        </h2>
        <ul>
          {list.map((item) => (
            <li className="index-list" key={1}>
              Pollution Index :
              {' '}
              {item.main.aqi}
              {' '}
              {' '}
              <br />
              Air Quality :
              {' '}
              {airQualityIndex[item.main.aqi - 1]}
              <div className="pollutants">
                <h3>Pollutant concentration in μg/m3:</h3>
                <ul className="pollutants-list">
                  {Object.keys(item.components).map((key) => (
                    <li key={key}>{`${(key).toUpperCase()} : ${item.components[key]}`}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PollutionDetail;