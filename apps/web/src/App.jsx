
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import ProtectedRoute from '@/components/ProtectedRoute.jsx';
import HomePage from '@/pages/HomePage.jsx';
import ServicesPage from '@/pages/ServicesPage.jsx';
import ServiceDetailPage from '@/pages/ServiceDetailPage.jsx';
import CorporatePage from '@/pages/CorporatePage.jsx';
import HumanResourcesPage from '@/pages/HumanResourcesPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import AdminDashboard from '@/pages/AdminDashboard.jsx';
import FulfillmentB2CPage from '@/pages/FulfillmentB2CPage.jsx';
import FloatingContact from '@/components/FloatingContact.jsx';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/corporate" element={<CorporatePage />} />
          <Route path="/human-resources" element={<HumanResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/fulfillment/b2c" element={<FulfillmentB2CPage />} />
          <Route path="/fulfillment/b2b" element={<FulfillmentB2CPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <FloatingContact />
        <Toaster />
      </AuthProvider>
    </Router>
  );
}

export default App;
