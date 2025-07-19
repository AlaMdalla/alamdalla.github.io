import { Github, ExternalLink } from "lucide-react";
import problemSolvingMicroservice from "../../public/img/problem-solving-microservice.jpg";
import avanti from "../../public/img/avanti.png";
import marimex from "../../public/img/marimex.png";
import eventPlanner from "../../public/img/event-planner.png";
import timeJumper from "../../public/img/time-jumper.jpg";
import Image from "next/image";

const projects = [
  {
    title: "Problem-Solving Microservice",
    description:
      "Microservice for problem creation, submission, and evaluation. SOLID, Dockerized.",
    tech: ["Java", "Spring Boot", "Docker"],
    github: "#",
    demo: "#",
    image: problemSolvingMicroservice,
  },
  {
    title: "marimex",
    description:
      "◦ Dynamic Website Development: Built a full-stack web application using Angular, Node.js, and MongoDB, enhancing the company’s digital presence",
    tech: ["Angular", "Node.js", "MongoDB"],
    github: "#",
    demo: "https://marimexste.com/",
    image: marimex,
  },
  {
    title: "Avanti",
    description:
      "Dynamic website with Bootstrap, HTML, CSS, JS, PHP, MySQL.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "#",
    demo: "#",
    image: avanti,
  },
  {
    title: "Event Planner",
    description:
      "Qt desktop app with MySQL in C++.",
    tech: ["C++", "Qt", "MySQL"],
    github: "#",
    demo: "#",
    image: eventPlanner,
  },
  {
    title: "The Time Jumper",
    description:
      "2D platformer game in C/SDL, custom assets.",
    tech: ["C", "SDL", "Photoshop"],
    github: "#",
    demo: "#",
    image: timeJumper,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-3xl py-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="border rounded-xl bg-card shadow p-5 flex flex-col gap-3 hover:shadow-lg transition-shadow"
          >
            <div className="w-full h-32 bg-muted rounded mb-2 flex items-center justify-center">
              <Image src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-lg">{proj.title}</h3>
            <p className="text-sm text-muted-foreground">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {proj.tech.map((t) => (
                <span key={t} className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline text-sm hover:text-primary"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline text-sm hover:text-primary"
              >
                <ExternalLink className="w-4 h-4" /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 