import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, useLocation, HashRouter, BrowserRouter } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import AboutSection from "./landing_page/about/AboutSection";
import MenuSection from "./landing_page/menu/MenuSection";
import ServicesPage from "./landing_page/services/ServicesPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import Whatsapp from "./landing_page/Whatsapp";
import Veg from "./landing_page/menu/Veg";
import NonVeg from "./landing_page/menu/NonVeg";
import ScrollToTop from "./ScrollToTop";
import Popup from "./landing_page/PopUp";
import Birthday from "./landing_page/services/Birthday";
import Corporate from "./landing_page/services/Corporate";
import Cultural from "./landing_page/services/Cultural";
import House from "./landing_page/services/House";
import Wedding from "./landing_page/services/Wedding";
import ServicePage from "./landing_page/services/ServicesPage";
import AdminLogin from "./Admin/AdminLogin";
import Admin from "./Admin/Orders";
import Orders from "./Admin/Orders";
import GalleryPage from "./landing_page/gallery/galleryPage";
import Privacy from "./landing_page/privacy";
import Page from "./landing_page/Page";




const App = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  // Check if the current route is an admin page
  const isAdminPage = location.pathname.startsWith("/admin");

  useEffect(() => {
    if (isAdminPage || showPopup) return; // Prevent showing popup on admin pages

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer); // Cleanup previous timer if pathname changes
  }, [location.pathname, isAdminPage]); // Runs only when pathname changes

  return (
    <div className="app-container">
      <ScrollToTop />

      {/* Conditionally Render Navbar */}
      {!isAdminPage && <Navbar />}

      {/* Conditionally Show Popup */}
      {!isAdminPage && showPopup && (
        <Popup message="You switched pages!" onClose={() => setShowPopup(false)} />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/menu" element={<MenuSection />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/menu/veg" element={<Veg />} />
        <Route path="/menu/nonveg" element={<NonVeg />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/birthday" element={<Birthday />} />
        <Route path="/services/corporate" element={<Corporate />} />
        <Route path="/services/cultural" element={<Cultural />} />
        <Route path="/services/house" element={<House />} />
        <Route path="/services/wedding" element={<Wedding />} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/privacy-policy" element={<Privacy/>} />
        <Route path="/license" element={<Page/>} />
        

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/orders" element={<Orders />} />

        {/* Catch-all Route for 404 Pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Conditionally Render Footer */}
      {!isAdminPage && <Footer />}

      {/* Conditionally Render WhatsApp */}
      {!isAdminPage && <Whatsapp />}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
    </HashRouter>
);
