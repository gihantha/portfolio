import { RevealOnScroll } from "../RevealOnScroll";
import { ImageCarousel } from "../experience/ImageCarousel";

// Remove direct imports

const adminDashboard = '/portfolio/Images/projects/admin-chat/dashboard.png';
const adminPanel = '/portfolio/Images/projects/admin-chat/admin-panel.png';
const shopifyDashboard = '/portfolio/Images/projects/shopify-app/shopify-app-dashboard.png';
const shopifyShipping = '/portfolio/Images/projects/shopify-app/shopify-app-shipping.png';
const shopifyTimeline = '/portfolio/Images/projects/shopify-app/shopify-app-timeline.png';
const wpDashboard = '/portfolio/Images/projects/wordpress-plugin/plugin-dashboard.png';
const wpPickup = '/portfolio/Images/projects/wordpress-plugin/plugin-request-pickup.png';
const wpTracking = '/portfolio/Images/projects/wordpress-plugin/plugin-tracking-order.png';
const invDashboard = '/portfolio/Images/projects/inventory-system/inv-dashboard.png';
const invVendor = '/portfolio/Images/projects/inventory-system/inv-vendor.png';
const invOrders = '/portfolio/Images/projects/inventory-system/inv-orders.png';
const invManageInventory = '/portfolio/Images/projects/inventory-system/inv-manage-inventory.png';

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="glass-card p-8 rounded-xl border border-white/10 space-y-20">
            {/* ================= COMPANY ================= */}
            <div>
              <h3 className="text-xl font-bold">
                Associate Software Engineer — Koombiyo IT
              </h3>
              <p className="text-sm text-gray-500 mb-4">2024 – Present</p>

              <p className="text-gray-300 mb-4">
                Designing and maintaining end-to-end production systems,
                covering frontend interfaces, backend services, databases, and
                third-party integrations.
              </p>

              <p className="text-sm text-cyan-400 font-medium mb-12">
                🧩 End-to-end ownership: UI → API → Database → Deployment
              </p>

              {/* ================= ADMIN CHAT ================= */}
              <div className="space-y-6">
                <h4 className="font-semibold text-gray-200">
                  Admin Support Chat System (Customer Support Platform)
                </h4>

                <p className="text-gray-300">
                  Internal real-time support platform used by agents to handle
                  customer inquiries, shipments, and delivery timelines.
                </p>

                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Built real-time chat using Socket.IO</li>
                  <li>Designed agent assignment & session lifecycle</li>
                  <li>Integrated waybill lookup and shipment timelines</li>
                  <li>Developed admin tools for agent & role management</li>
                  <li>
                    Owned the system from architecture to production rollout
                  </li>
                </ul>

                <div className="text-sm text-gray-400">
                  <p>
                    <strong>Stack:</strong> React, Node.js, Express, Socket.IO,
                    MySQL
                  </p>
                </div>

                <ImageCarousel
                  images={[
                    {
                      src: adminDashboard,
                      alt: "Admin Chat Dashboard",
                      caption: "Real-time chat dashboard with shipment context",
                    },
                    {
                      src: adminPanel,
                      alt: "Admin Panel",
                      caption: "Agent & role management interface",
                    },
                  ]}
                />

                <p className="mb-10 text-sm text-yellow-400 italic">
                  🔒 Internal production system
                </p>
              </div>

              {/* ================= SHOPIFY APP ================= */}
              <div className="space-y-6">
                <h4 className="font-semibold text-gray-200">
                  Koombiyo Shopify Delivery App
                </h4>

                <p className="text-gray-300">
                  Custom Shopify app enabling merchants to manage deliveries,
                  pickups, and tracking directly from Shopify.
                </p>

                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Integrated Shopify orders with Koombiyo APIs</li>
                  <li>Implemented shipping, pickup, and tracking flows</li>
                  <li>Handled secure authentication and API communication</li>
                </ul>

                <div className="text-sm text-gray-400">
                  <p>
                    <strong>Stack:</strong> Shopify App, Node.js, REST APIs
                  </p>
                </div>

                <ImageCarousel
                  images={[
                    { src: shopifyDashboard, alt: "Shopify Dashboard" },
                    { src: shopifyShipping, alt: "Shipping Flow" },
                    { src: shopifyTimeline, alt: "Delivery Timeline" },
                  ]}
                />

                <p className="mb-10 text-sm text-yellow-400 italic">
                  🔒 Private Shopify app — production integration
                </p>
              </div>

              {/* ================= WORDPRESS PLUGIN ================= */}
              <div className="space-y-6">
                <h4 className="font-semibold text-gray-200">
                  Koombiyo Delivery WordPress Plugin
                </h4>

                <p className="text-gray-300">
                  WordPress plugin enabling vendors to create shipments, request
                  pickups, and track deliveries from their stores.
                </p>

                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Developed custom plugin using PHP</li>
                  <li>Integrated shipment creation & tracking</li>
                  <li>Connected WordPress stores with Koombiyo APIs</li>
                </ul>

                <div className="text-sm text-gray-400">
                  <p>
                    <strong>Stack:</strong> WordPress, PHP, REST APIs
                  </p>
                </div>

                <ImageCarousel
                  images={[
                    { src: wpDashboard, alt: "Plugin Dashboard" },
                    { src: wpPickup, alt: "Pickup Request" },
                    { src: wpTracking, alt: "Order Tracking" },
                  ]}
                />

                <p className="mb-10 text-sm text-yellow-400 italic">
                  🔒 Private plugin used by live customer websites
                </p>
              </div>

              <div className="mb-14">
                <h4 className="font-semibold text-gray-200 mb-2">
                  Inventory & Order Management System
                </h4>

                <p className="text-gray-300 mb-3">
                  A full-featured inventory and order management platform
                  handling vendors, suppliers, delivery workflows, and business
                  reporting.
                </p>

                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Developed using PHP (CodeIgniter) and MySQL</li>
                  <li>
                    Implemented product, batch, GRN, and barcode management
                  </li>
                  <li>Built order creation, packing, and delivery workflows</li>
                  <li>
                    Generated commission, vendor, delivery, and order reports
                  </li>
                  <li>Enabled XLS exports with dynamic filters</li>
                  <li>Used DataTables for scalable data handling</li>
                  <li>Applied JWT authentication and XSS protection</li>
                </ul>

                <div className="m-4 text-sm text-gray-400">
                  <p>
                    <strong>Tech Stack:</strong> PHP (CodeIgniter), MySQL,
                    Bootstrap, AJAX, JavaScript
                  </p>
                  <p>
                    <strong>Libraries:</strong> JWT, dompdf, DataTables, XSS
                    libraries
                  </p>


                </div>

                  <ImageCarousel
                    images={[
                      { src: invDashboard, alt: "Inventory Dashboard" },
                      { src: invVendor, alt: "Vendor" },
                      { src: invOrders, alt: "Order" },
                      { src: invManageInventory, alt: "Manage Inventory" },
                    ]}
                  />

                <p className="mb-10 text-sm text-yellow-400 italic mt-3">
                  🔒 Internal enterprise system
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
