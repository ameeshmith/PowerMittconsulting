import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './hooks/useScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PageLoader from './components/PageLoader/PageLoader';

// Lazy-loaded route components for optimal performance & code splitting
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Services = lazy(() => import('./pages/Services/Services'));
const PowerSystems = lazy(() => import('./pages/PowerSystems/PowerSystems'));
const EnergyTransitionService = lazy(() => import('./pages/EnergyTransitionService/EnergyTransitionService'));
const CarbonCapture = lazy(() => import('./pages/CarbonCapture/CarbonCapture'));
const IndustrialInfrastructure = lazy(() => import('./pages/IndustrialInfrastructure/IndustrialInfrastructure'));
const OwnersEngineering = lazy(() => import('./pages/OwnersEngineering/OwnersEngineering'));
const Industries = lazy(() => import('./pages/Industries/Industries'));
const OilGas = lazy(() => import('./pages/OilGas/OilGas'));
const MiningResources = lazy(() => import('./pages/MiningResources/MiningResources'));
const EnergyUtilities = lazy(() => import('./pages/EnergyUtilities/EnergyUtilities'));
const Industrial = lazy(() => import('./pages/Industrial/Industrial'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Insights = lazy(() => import('./pages/Insights/Insights'));
const InsightDetail = lazy(() => import('./pages/InsightDetail/InsightDetail'));
const Admin = lazy(() => import('./pages/Admin/Admin'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
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
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/energy-transition" element={<Navigate to="/services/energy-transition" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
