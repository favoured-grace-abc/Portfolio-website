import { Code, Layout, GitBranch, Terminal, Cpu, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Engineering",
    description:
      "Building fast, dynamic, and state-driven web applications using modern React and JavaScript.",
  },
  {
    icon: Layout,
    title: "UI/UX Implementation",
    description:
      "Translating design structures into pixel-perfect, fully responsive Tailwind CSS user interfaces.",
  },
  {
    icon: GitBranch,
    title: "Version Control & Git Workflow",
    description:
      "Managing clean repository branches, code updates, and structured version control workflows.",
  },
  {
    icon: Terminal,
    title: "Component Architecture",
    description:
      "Designing modular, reusable, and easily maintainable React component structures.",
  },
  {
    icon: Cpu,
    title: "Performance Optimization",
    description:
      "Streamlining asset loading, rendering efficiency, and smooth interactive application performance.",
  },
  {
    icon: Sparkles,
    title: "Interactive Web Interfaces",
    description:
      "Adding dynamic user feedback, micro-interactions, and fluid transitions across screen sizes.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 px-6 max-w-5xl mx-auto border-t border-borderDark/40"
    >
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-2">
          What I can offer for Your Organization
        </h2>
        <p className="text-textMuted text-sm md:text-base">
          Core frontend development and software engineering capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-cardDark border border-borderDark/80 p-6 rounded-2xl hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-bgDark border border-borderDark flex items-center justify-center text-textMuted group-hover:text-zinc-900 group-hover:border-zinc-600 transition-colors mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-textMuted leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
