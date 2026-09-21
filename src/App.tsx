import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Space from './pages/Space';
import Floor1 from './pages/space/Floor1';
import Floor2 from './pages/space/Floor2';
import Floor3 from './pages/space/Floor3';
import KidsSpace from './pages/KidsSpace';
import PoolPlay from './pages/PoolPlay';
import Stay from './pages/Stay';
import Guide from './pages/Guide';
import HouseRules from './pages/guide/HouseRules';
import ReservationGuide from './pages/guide/ReservationGuide';
import Cancellation from './pages/guide/Cancellation';
import FAQ from './pages/guide/FAQ';
import PoolGuide from './pages/guide/PoolGuide';
import BBQGuide from './pages/guide/BBQGuide';
import Location from './pages/Location';
import Reservation from './pages/Reservation';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/space" element={<Space />} />
        <Route path="/space/1f" element={<Floor1 />} />
        <Route path="/space/2f" element={<Floor2 />} />
        <Route path="/space/3f" element={<Floor3 />} />
        <Route path="/kids-space" element={<KidsSpace />} />
        <Route path="/pool-play" element={<PoolPlay />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/guide/house-rules" element={<HouseRules />} />
        <Route path="/guide/reservation" element={<ReservationGuide />} />
        <Route path="/guide/cancellation" element={<Cancellation />} />
        <Route path="/guide/faq" element={<FAQ />} />
        <Route path="/guide/pool" element={<PoolGuide />} />
        <Route path="/guide/bbq" element={<BBQGuide />} />
        <Route path="/location" element={<Location />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
