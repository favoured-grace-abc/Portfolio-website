import { ArrowUpRight } from "lucide-react";
import whatsappPic from "../assets/WhatsApp 17_08_2026 14_32_50.png";

export default function Hero() {
  return (
    <section id="about" className="pt-12 pb-20 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="relative">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-borderDark bg-transparent">
            <img
              src={whatsappPic}
              alt="Grace Amarachi"
              className="w-full h-full object-cover block"
              style={{ objectPosition: "center 22%", transform: "scale(1.18)" }}
            />
          </div>
        </div>

        <div className="space-y-4 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
            Hi I'm Grace Amarachi, Frontend Engineer
          </h1>
          <p className="text-base md:text-lg text-textMuted leading-relaxed">
            I construct clean, performant, and dynamic web interfaces.
            Specialized in React, JavaScript, and Tailwind CSS to build robust,
            component-driven user experiences.
          </p>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white font-medium px-5 py-2.5 rounded-full hover:bg-zinc-700 transition-all group text-sm"
            >
              Get in touch
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
