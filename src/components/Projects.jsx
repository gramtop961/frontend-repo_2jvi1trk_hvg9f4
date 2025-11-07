import React from 'react';
import { Code2, Globe, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Platform Analitik',
    icon: Code2,
    description: 'Dashboard real‑time untuk metrik bisnis dengan visualisasi interaktif.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Situs Marketing',
    icon: Globe,
    description: 'Halaman cepat dan SEO‑friendly dengan animasi halus.',
    tags: ['Vite', 'Tailwind', 'SSR'],
    link: '#'
  },
  {
    title: 'Aplikasi Mobile Web',
    icon: Smartphone,
    description: 'PWA responsif dengan offline mode dan push notification.',
    tags: ['PWA', 'Workbox', 'UX'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Proyek Pilihan</h2>
            <p className="mt-3 max-w-2xl text-gray-600">Kumpulan pekerjaan yang menonjol dalam performa dan pengalaman pengguna.</p>
          </div>
          <a href="#contact" className="hidden rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-black md:inline-flex">Hubungi</a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map(({ title, description, tags, link, icon: Icon }) => (
            <a
              key={title}
              href={link}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700">{t}</span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-transparent transition group-hover:ring-gray-900/10" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
