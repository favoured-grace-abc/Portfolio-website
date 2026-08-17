export default function Footer() {
  return (
    <footer className="border-t border-borderDark/40 py-8 px-6 text-xs text-textMuted">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Grace Amarachi. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-zinc-900 transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-zinc-900 transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-zinc-900 transition-colors">
            Projects
          </a>
        </div>
      </div>
    </footer>
  );
}
