import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import DonationPage from './pages/DonationPage';
import CommunityPage from './pages/CommunityPage';
import FundraisingPage from './pages/FundraisingPage';
import VisionPage from './pages/VisionPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/fundraising" element={<FundraisingPage />} />
        <Route path="/vision" element={<VisionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
