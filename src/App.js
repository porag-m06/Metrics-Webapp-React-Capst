import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import GeoLocation from './components/GeoLocation';

function App() {
  return (
    <div className="parent-container">
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<GeoLocation />} />
          {/* <Route path="/details" element={<Missions />} />
          <Route path="/about" element={<Profile />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
