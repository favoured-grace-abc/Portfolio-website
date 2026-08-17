import Navbar from "./components/Navbar";
import FloatingSocials from "./components/FloatingSocials";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bgDark relative overflow-x-clip">
      <Navbar />
      <FloatingSocials />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
