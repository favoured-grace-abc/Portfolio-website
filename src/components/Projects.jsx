import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 18 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const projects = [
  {
    title: "Countries Information Hub",
    description:
      "An interactive platform for exploring country data including population, capital, region, languages, and more.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://countries-information-hub.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Girlie App",
    description:
      "A beauty and hair-braiding services mobile web application featuring intuitive booking, catalog navigation, and service visualizers.",
    tags: ["React", "Tailwind CSS", "UI/UX"],
    demoUrl: "https://girlie-app12.vercel.app",
    githubUrl: "#",
  },
  {
    title: "Meeting App",
    description:
      "A meeting scheduling application for organizing events, coordinating attendees, and managing meeting details.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://meeting-app-one-orcin.vercel.app",
    githubUrl: "#",
  },
  {
    title: "MEDTRUST AFRICA",
    description:
      "A logistics management web application deployed on Firebase for tracking shipments and streamlining delivery operations.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    demoUrl: "https://logistics-32d01.web.app",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-6 max-w-5xl mx-auto border-t border-borderDark/40"
    >
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-2">
          Featured Applications
        </h2>
        <p className="text-textMuted text-sm md:text-base">
          Recent web development projects built with React and modern frontend
          tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cardDark border border-borderDark/80 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-700 hover:bg-zinc-100 transition-all group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium text-zinc-900">
                  {proj.title}
                </h3>
                <div className="flex gap-2 text-textMuted">
                  <a
                    href={proj.githubUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-zinc-900 transition-colors"
                    title="View Code"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <span
                    className="hover:text-zinc-900 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </span>
                </div>
              </div>
              <p className="text-sm text-textMuted leading-relaxed mb-6">
                {proj.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {proj.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs bg-zinc-900 text-white px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
    </div>
    </section>
  );
}
