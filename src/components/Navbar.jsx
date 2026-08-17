export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-bgDark/80 border-b border-borderDark/50 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-zinc-900 hover:opacity-80 transition-opacity"
        >
          Grace<span className="text-zinc-500">.</span>
        </a>
        <nav className="hidden md:flex items-center space-x-1 bg-cardDark/80 border border-borderDark rounded-full px-4 py-1.5 text-sm text-textMuted">
          <a
            href="#about"
            className="px-3 py-1 hover:text-zinc-900 transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className="px-3 py-1 hover:text-zinc-900 transition-colors"
          >
            Services
          </a>
          <a
            href="#projects"
            className="px-3 py-1 hover:text-zinc-900 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-3 py-1 hover:text-zinc-900 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
