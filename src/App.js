import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import GeoLocation from './components/GeoLocation';
import PullutionDetail from './components/PollutionDetail';

function App() {
  return (
    <div className="parent-container">
      <Nav />
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
