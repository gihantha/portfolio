import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = {
    "Core Languages": ["JavaScript", "TypeScript", "PHP", "SQL", "Dart"],
    Frontend: ["React", "Bootstrap", "Material UI", "Tailwind CSS"],
    "Backend & APIs": [
      "Node.js",
      "Express",
      "Laravel",
      "CodeIgniter",
      "REST APIs",
    ],
    "Databases & Realtime": ["MySQL", "MongoDB", "Firebase", "Socket.IO"],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "Swagger",
      "Figma",
      "Jira",
      "Crystal Reports",
    ],
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full-Stack Software Engineer with hands-on experience building
              production-grade web applications, real-time systems, and
              enterprise platforms. Comfortable working across frontend and
              backend layers — from responsive React interfaces to secure APIs,
              databases, and system integrations. Experienced in role-based
              systems, REST API design, and working with live production data.
              Passionate about clean architecture, performance, and building
              software that solves real operational problems.
            </p>

            <div className="m-6">
              <span
                className="inline-block m-4 px-4 py-2 rounded-lg 
    bg-white/5 text-gray-300 text-sm border border-white/10"
              >
                🧩 End-to-end ownership: UI → API → Database → Deployment
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(skills).map((category) => (
                <div
                  key={category}
                  className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 transition-all"
                >
                  <h3 className="text-xl font-bold mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills[category].map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    B.Sc. (Hons) in Computing & Information Systems
                  </strong>
                  <br />
                  Sabaragamuwa University of Sri Lanka (2017 – 2022)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Associate Software Engineer – Koombiyo IT (2024 – Present)
                  </h4>
                  <p>
                    Building and maintaining enterprise web systems, developing
                    REST APIs, optimizing SQL queries, and collaborating with QA
                    and product teams to deliver stable production releases.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Associate Implementation Engineer – SPIL Labs (2023)
                  </h4>
                  <p>
                    Delivered enterprise deployments, built Crystal Reports, and
                    optimized SQL Server queries while providing remote
                    technical support.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Intern Software Engineer – Vattz (2021)
                  </h4>
                  <p>
                    Developed full-stack applications using React, Node.js, and
                    Firebase, focusing on clean UI components and REST APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
