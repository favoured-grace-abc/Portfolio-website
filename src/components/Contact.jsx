import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-6 max-w-5xl mx-auto border-t border-borderDark/40"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Callout Card */}
        <div className="bg-cardDark border border-borderDark p-8 rounded-2xl flex flex-col justify-between min-h-[280px]">
          <div>
            <span className="text-xs text-textMuted uppercase tracking-wider font-semibold">
              Get in touch
            </span>
            <h2 className="text-3xl font-semibold text-zinc-900 mt-2 mb-4">
              Have Something Cool in Mind?
            </h2>
            <p className="text-textMuted text-sm leading-relaxed">
              This can be the start of something great. Available for frontend
              engineering roles, freelance collaborations, and project
              development.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="mailto:favouramaraci@gmail.com"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all"
            >
              Let's talk
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-cardDark border border-borderDark p-8 rounded-2xl">
          <h3 className="text-lg font-medium text-zinc-900 mb-4">
            Send a Message
          </h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-bgDark border border-borderDark text-zinc-900 placeholder-textMuted text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-zinc-500 transition-colors"
              />
            </div>
            <div>
              <textarea
                rows="3"
                placeholder="Your message..."
                className="w-full bg-bgDark border border-borderDark text-zinc-900 placeholder-textMuted text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-zinc-900 hover:bg-zinc-700 text-white font-medium py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 border border-transparent"
            >
              <span>Send Message</span>
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
