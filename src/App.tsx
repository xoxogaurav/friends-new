import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProfileSelection from './pages/ProfileSelection';
import ProfilesDisplay from './pages/ProfilesDisplay';
import ExpandedProfile from './pages/ExpandedProfile';
import UnavailablePage from './pages/UnavailablePage';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsConditions from './pages/legal/TermsConditions';
import CookiePolicy from './pages/legal/CookiePolicy';
import ContactUs from './pages/support/ContactUs';
import SafetyTips from './pages/support/SafetyTips';
import FAQ from './pages/support/FAQ';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile-selection" element={<ProfileSelection />} />
          <Route path="/profiles" element={<ProfilesDisplay />} />
          <Route path="/profile/:id" element={<ExpandedProfile />} />
          <Route path="/unavailable" element={<UnavailablePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/safety" element={<SafetyTips />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;