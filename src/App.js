import { Route, Routes } from 'react-router-dom';
import GeoLocation from './components/GeoLocation';
import PullutionDetail from './components/PollutionDetail';

function App() {
  return (
    <div className="parent-container">
      <div className="container">
        <Routes>
          <Route path="/" element={<GeoLocation />} />
          <Route path="/city-pollution-info" element={<PullutionDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
