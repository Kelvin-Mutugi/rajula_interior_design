import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav_bar";
import Hero from "./components/hero_section";
import Services from "./components/services_section";
import ServiceDetailPage from "./components/service_detail_page";
import RecentProjects from "./components/recent_projects";
import AboutUs from "./components/about_us";
import ContactSection from "./components/contact_section";
import Footer from "./components/footer_section";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <RecentProjects />
      <AboutUs />
      {/* <ContactSection /> */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/services/:slug" element={<ServiceDetailPage />} />
    </Routes>
  );
}

export default App;
