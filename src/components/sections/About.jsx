import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = {
    "Programming Languages": ["JavaScript", "PHP", "SQL"],
    "Frameworks / Libraries": [
      "React JS",
      "Node JS",
      "Express JS",
      "Laravel",
      "Bootstrap",
      "Material UI",
      "Tailwind",
      "CodeIgniter",
    ],
    "Web Technologies": ["HTML", "CSS", "SASS", "REST"],
    "Database Management Systems": ["MySQL", "MongoDB", "Firebase"],
    "Design and Productivity Tools": [
      "Figma",
      "Jira",
      "Creately",
      "Crystal Reports",
    ],
  };
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Dedicated full-stack developer with a passion for building
              scalable web applications and crafting innovative solutions that
              elevate user experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(skills).map((category) => (
                <div
                  key={category}
                  className="rounded-xl p-6 hover:-translate-y-1 transition-all"
                >
                  <h3 className="text-xl font-bold mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills[category].map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
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
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    {" "}
                    B.S. Honours in Computing and Information Systems{" "}
                  </strong>{" "}
                  - Sabaragamuwa University of Sri lanka (2016-2023)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Associate Software Engineer at Koombiyo IT (2020 - Present)
                  </h4>
                  <p>
                    Developed and maintained full-stack web applications,
                    collaborating with cross-functional teams to define project
                    requirements and ensure performance, quality, and
                    responsiveness.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Associate Implementation Engineer (12/2023 - 05/2023)
                  </h4>
                  <p>
                    Provided remote customer support for SPIL products,
                    conducted installations, designed Crystal Reports, and
                    managed technical issues. Continuously improved skills in
                    SQL Server and query processing.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Intern Software Engineer (09/2021 - 03/2021)
                  </h4>
                  <p>
                    Specialized in full-stack development using ReactJS, Sass,
                    Material UI, Bootstrap, Tailwind, MYSQL, Node.js, and
                    Firebase for seamless web application integration.
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
