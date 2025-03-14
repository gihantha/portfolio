import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> EZShopper E-commerce</h3>
              <p className="text-gray-400 mb-4">Laravel E Commerce</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Laravel", "Blade", "Js", "PHP"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/gihantha/EZShopper_ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />{" "}
                  {/* GitHub icon */}
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                School Management System
              </h3>
              <p className="text-gray-400 mb-4">
                School Management System with PHP, CodeIgniter and MySQL
                Resources
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Codeigniter", "Bootstrap", "Js", "PHP"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/gihantha/School-Management-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />{" "}
                  {/* GitHub icon */}
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Altruzi</h3>
              <p className="text-gray-400 mb-4">
                A simple flutter app that suggests random acts of kindness for
                users to perform daily.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Dart"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/gihantha/altruzi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />{" "}
                  {/* GitHub icon */}
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Car Service Website </h3>
              <p className="text-gray-400 mb-4">
                Car Service Website using CodeIgniter, PHP, bootstrap, Ajax, JS
                and MySQL
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Codeigniter", "Js", "Ajax", "MySQL", "PHP"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/gihantha/Car-Service-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />{" "}
                  {/* GitHub icon */}
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> React To DO</h3>
              <p className="text-gray-400 mb-4">About Simple react js todo</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/gihantha/react-todo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />{" "}
                  {/* GitHub icon */}
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Lullabyye E Commerce</h3>
              <p className="text-gray-400 mb-4">
                E Commerce Website that created using React, MongoDB, Express
                and Node js
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Mongo DB", "Express", "Node.Js"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/gihantha/E-Commerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />{" "}
                  {/* GitHub icon */}
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Chat App</h3>
              <p className="text-gray-400 mb-4">
                Real time chat application build with react and firebase
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Firebase", "Js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/gihantha/chatApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />{" "}
                  {/* GitHub icon */}
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Memory</h3>
              <p className="text-gray-400 mb-4">
                A diary type Web application that created using React, MongoDB,
                Express and Node js
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Mongo DB", "Express", "Node.Js"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/gihantha/Memory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />{" "}
                  {/* GitHub icon */}
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Movie App</h3>
              <p className="text-gray-400 mb-4">
                Movie rating web application using React Js, Filtering movie
                details from external API
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/gihantha/Movie-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />{" "}
                  {/* GitHub icon */}
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
