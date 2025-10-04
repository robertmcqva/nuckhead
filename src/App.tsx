import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout.tsx'
import { ScrollToTop } from './components/ScrollToTop.tsx'
import { ComingSoonWrapper } from './components/ComingSoonWrapper.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { AboutPage } from './pages/AboutPage.tsx'
import { ServicesPage } from './pages/ServicesPage.tsx'
import { PricingPage } from './pages/PricingPage.tsx'
import { ContactPage } from './pages/ContactPage.tsx'
import { BlogPage } from './pages/BlogPage.tsx'
import { DocsPage } from './pages/DocsPage.tsx'
import { LoginPage } from './pages/auth/LoginPage.tsx'
import { RegisterPage } from './pages/auth/RegisterPage.tsx'
import { Dashboard } from './pages/dashboard/Dashboard.tsx'
import { ProfilePage } from './pages/profile/ProfilePage.tsx'
import { ProjectsPage } from './pages/projects/ProjectsPage.tsx'
import { AnalyticsPage } from './pages/analytics/AnalyticsPage.tsx'
import { AdminPanel } from './pages/admin/AdminPanel.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'
import { ProtectedRoute } from './components/ProtectedRoute.tsx'
import { AdminRoute } from './components/AdminRoute.tsx'
// MccHub Leximius Library Pages
import { LibraryOverviewPage } from './pages/library/LibraryOverviewPage.tsx'
import { ComponentsPage } from './pages/library/ComponentsPage.tsx'
import { ComponentDetailPage } from './pages/library/ComponentDetailPage.tsx'
import { GettingStartedPage } from './pages/library/GettingStartedPage.tsx'
import { PlaygroundPage } from './pages/library/PlaygroundPage.tsx'
// Legal Pages
import { PrivacyPolicyPage } from './pages/legal/PrivacyPolicyPage.tsx'
import { TermsOfServicePage } from './pages/legal/TermsOfServicePage.tsx'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/docs" element={<DocsPage />} />
          
          {/* Coming Soon Route */}
          <Route path="/coming-soon" element={<ComingSoonWrapper />} />
          
          {/* Legal Routes */}
          <Route path="/legal/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/legal/terms" element={<TermsOfServicePage />} />
          
          {/* MccHub Leximius Library Routes */}
          <Route path="/library" element={<LibraryOverviewPage />} />
          <Route path="/library/getting-started" element={<GettingStartedPage />} />
          <Route path="/library/components" element={<ComponentsPage />} />
          <Route path="/library/playground" element={<PlaygroundPage />} />
          <Route path="/library/components/:componentName" element={<ComponentDetailPage componentName="Button" />} />
          
          {/* Auth Routes */}
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          
          {/* Protected User Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="/projects" element={
            <ProtectedRoute>
              <ProjectsPage />
            </ProtectedRoute>
          } />
          <Route path="/analytics" element={
            <ProtectedRoute>
              <AnalyticsPage />
            </ProtectedRoute>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin/*" element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          } />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App