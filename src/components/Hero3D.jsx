import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

const SocialLink = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition hover:scale-[1.02] hover:bg-white/10"
  >
    {children}
  </a>
);

export default function Hero3D() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8Y8UjG3Eyt6KijYE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for readability (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 text-white">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider">
          <Rocket className="h-4 w-4" />
          Interaktif • Portofolio
        </div>
        <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
          Halo, saya <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">Profesional Kreatif</span>
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Membangun pengalaman digital yang halus, cepat, dan berkesan — memadukan estetika, performa, dan interaksi.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <SocialLink href="mailto:you@example.com" label="Email">
            <Mail className="h-4 w-4" />
            Hubungi Saya
          </SocialLink>
          <SocialLink href="https://github.com" label="GitHub">
            <Github className="h-4 w-4" />
            GitHub
          </SocialLink>
          <SocialLink href="https://linkedin.com" label="LinkedIn">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </SocialLink>
        </div>
      </div>
    </section>
  );
}
