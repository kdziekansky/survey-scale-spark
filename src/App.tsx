
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { useFont } from '@/hooks/use-font';

// Importowanie stron
import Index from './pages/Index';
import SurveyPage from './pages/SurveyPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import PrivacyPage from './pages/PrivacyPage';
import RulesPage from './pages/RulesPage';
import SecurityPage from './pages/SecurityPage';
import ThankYouPage from './pages/ThankYouPage';
import PaymentPage from './pages/PaymentPage';
import SecretAIPage from './pages/SecretAIPage';
import NotFound from './pages/NotFound';
import AboutUsPage from './pages/AboutUsPage';
import ZasadyPage from './pages/ZasadyPage';

// Importowanie komponentów administracyjnych
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminOrders from './pages/admin/AdminOrders';
import AdminLayout from './components/admin/AdminLayout';
import ProtectedAdminRoute from './components/admin/ProtectedAdminRoute';

// Importowanie kontekstów
import { AdminAuthProvider } from '@/contexts/AdminAuthContext';
import { SurveyProvider } from '@/contexts/SurveyContext';

// Importowanie komponentu przewijania do góry
import ScrollToTop from './components/ScrollToTop';

// Inicjalizacja klienta react-query
const queryClient = new QueryClient();

// Dodaj import dla nowego komponentu
import FirstAdminSetup from './pages/admin/FirstAdminSetup';

function App() {
  // Użyj niestandardowego hooka do obsługi czcionek
  const fontVariables = useFont();

  return (
    <div className={`app min-h-screen flex flex-col ${fontVariables}`}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Router>
            <AdminAuthProvider>
              <SurveyProvider>
                <main className="flex-1">
                  <ScrollToTop />
                  <Toaster />
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/ankieta" element={<SurveyPage />} />
                    <Route path="/kontakt" element={<ContactPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/prywatnosc" element={<PrivacyPage />} />
                    <Route path="/regulamin" element={<RulesPage />} />
                    <Route path="/bezpieczenstwo" element={<SecurityPage />} />
                    <Route path="/potwierdzenie" element={<ThankYouPage />} />
                    <Route path="/platnosc" element={<PaymentPage />} />
                    <Route path="/secretai" element={<SecretAIPage />} />
                    <Route path="/o-nas" element={<AboutUsPage />} />
                    <Route path="/zasady" element={<ZasadyPage />} />
                    <Route path="/spe43al-adm1n-p4nel" element={<AdminLogin />} />
                    <Route path="/spe43al-adm1n-p4nel/setup" element={<FirstAdminSetup />} />
                    <Route path="/spe43al-adm1n-p4nel/dashboard" element={
                      <ProtectedAdminRoute>
                        <AdminLayout>
                          <AdminDashboard />
                        </AdminLayout>
                      </ProtectedAdminRoute>
                    } />
                    <Route path="/spe43al-adm1n-p4nel/orders" element={
                      <ProtectedAdminRoute>
                        <AdminLayout>
                          <AdminOrders />
                        </AdminLayout>
                      </ProtectedAdminRoute>
                    } />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </SurveyProvider>
            </AdminAuthProvider>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
