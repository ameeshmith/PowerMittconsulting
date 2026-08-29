import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './hooks/useScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import PowerSystems from './pages/PowerSystems/PowerSystems';
import EnergyTransitionService from './pages/EnergyTransitionService/EnergyTransitionService';
import CarbonCapture from './pages/CarbonCapture/CarbonCapture';
import IndustrialInfrastructure from './pages/IndustrialInfrastructure/IndustrialInfrastructure';
import OwnersEngineering from './pages/OwnersEngineering/OwnersEngineering';
import Industries from './pages/Industries/Industries';
import OilGas from './pages/OilGas/OilGas';
import MiningResources from './pages/MiningResources/MiningResources';
import EnergyUtilities from './pages/EnergyUtilities/EnergyUtilities';
import Industrial from './pages/Industrial/Industrial';
import Projects from './pages/Projects/Projects';
import EnergyTransition from './pages/EnergyTransition/EnergyTransition';
import Contact from './pages/Contact/Contact';

import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/power-systems" element={<PowerSystems />} />
        <Route path="/services/energy-transition" element={<EnergyTransitionService />} />
        <Route path="/services/carbon-capture" element={<CarbonCapture />} />
        <Route path="/services/industrial-infrastructure" element={<IndustrialInfrastructure />} />
        <Route path="/services/owners-engineering" element={<OwnersEngineering />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/oil-gas" element={<OilGas />} />
        <Route path="/industries/mining-resources" element={<MiningResources />} />
        <Route path="/industries/energy-utilities" element={<EnergyUtilities />} />
        <Route path="/industries/industrial" element={<Industrial />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/energy-transition" element={<EnergyTransition />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
