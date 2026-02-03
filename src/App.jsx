// App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import "./index.css";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/Experience";

// Import all images
import adminDashboard from "./assets/projects/admin-chat/dashboard.png";
import adminPanel from "./assets/projects/admin-chat/admin-panel.png";
import shopifyDashboard from "./assets/projects/shopify-app/shopify-app-dashboard.png";
import shopifyShipping from "./assets/projects/shopify-app/shopify-app-shipping.png";
import shopifyTimeline from "./assets/projects/shopify-app/shopify-app-timeline.png";
import wpDashboard from "./assets/projects/wordpress-plugin/plugin-dashboard.png";
import wpPickup from "./assets/projects/wordpress-plugin/plugin-request-pickup.png";
import wpTracking from "./assets/projects/wordpress-plugin/plugin-tracking-order.png";
import invDashboard from "./assets/projects/inventory-system/inv-dashboard.png";
import invVendor from "./assets/projects/inventory-system/inv-vendor.png";
import invOrders from "./assets/projects/inventory-system/inv-orders.png";
import invManageInventory from "./assets/projects/inventory-system/inv-manage-inventory.png";

const allImages = [
  adminDashboard,
  adminPanel,
  shopifyDashboard,
  shopifyShipping,
  shopifyTimeline,
  wpDashboard,
  wpPickup,
  wpTracking,
  invDashboard,
  invVendor,
  invOrders,
  invManageInventory,
];

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload critical images
    const preloadImages = async () => {
      const promises = allImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Don't fail on error
        });
      });

      await Promise.all(promises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  const handleLoadingComplete = () => {
    // Add small delay to ensure images are loaded
    setTimeout(() => setIsLoaded(true), 200);
  };

  return (
    <>
      {(!isLoaded || !imagesLoaded) && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded && imagesLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-200`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;