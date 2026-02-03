import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-4"
    >
      <RevealOnScroll>
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Gihantha Kaveen
          </h1>

          <p className="text-xl text-gray-300 mb-6">
            Full-Stack Software Engineer • Systems-Oriented • Production-Ready
          </p>

          <p className="text-gray-400 mb-10 leading-relaxed">
            I design and build end-to-end web applications — from clean,
            responsive user interfaces to secure, scalable backend systems.
            Experienced in enterprise software, real-time applications, REST
            APIs, and database-driven platforms, with a strong focus on
            maintainability and real-world business needs.
          </p>

          <p
            className="mt-4 mb-18 inline-block px-4 py-2 rounded-full 
  bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20"
          >
            🧩 End-to-end ownership: UI → API → Database → Deployment
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#experience"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition"
            >
              Professional Work
            </a>
            <a
              href="#projects"
              className="border border-blue-500/50 text-blue-400 py-3 px-6 rounded hover:bg-blue-500/10 transition"
            >
              Open-Source Projects
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
