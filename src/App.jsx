import React from 'react';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { User } from 'lucide-react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white">
            <User className="h-4 w-4" />
          </span>
          <span>Profil</span>
        </a>
        <nav className="hidden gap-6 text-sm text-gray-700 md:flex">
          <a href="#about" className="hover:text-gray-900">Tentang</a>
          <a href="#projects" className="hover:text-gray-900">Proyek</a>
          <a href="#contact" className="hover:text-gray-900">Kontak</a>
        </nav>
        <a href="#contact" className="rounded-full bg-gray-900 px-4 py-2 text-sm text-white hover:bg-black">Hubungi</a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen w-full bg-white text-gray-900">
      <Navbar />
      <Hero3D />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} • Dibuat dengan rasa dan detail.
      </footer>
    </div>
  );
}
