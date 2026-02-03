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

// Remove all direct image imports

const allImages = [
  '/portfolio/Images/projects/admin-chat/dashboard.png',
  '/portfolio/Images/projects/admin-chat/admin-panel.png',
  '/portfolio/Images/projects/shopify-app/shopify-app-dashboard.png',
  '/portfolio/Images/projects/shopify-app/shopify-app-shipping.png',
  '/portfolio/Images/projects/shopify-app/shopify-app-timeline.png',
  '/portfolio/Images/projects/wordpress-plugin/plugin-dashboard.png',
  '/portfolio/Images/projects/wordpress-plugin/plugin-request-pickup.png',
  '/portfolio/Images/projects/wordpress-plugin/plugin-tracking-order.png',
  '/portfolio/Images/projects/inventory-system/inv-dashboard.png',
  '/portfolio/Images/projects/inventory-system/inv-vendor.png',
  '/portfolio/Images/projects/inventory-system/inv-orders.png',
  '/portfolio/Images/projects/inventory-system/inv-manage-inventory.png',
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