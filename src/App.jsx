import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/layout";
import { Home, PortfolioPage, TermsOfService, PrivacyPolicy, AboutPage, ContactPage, ServicePage } from "./components/pages";

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={ <ServicePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} /> 
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
