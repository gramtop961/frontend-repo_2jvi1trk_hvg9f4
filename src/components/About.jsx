import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Tentang Saya
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            Saya berfokus pada pengembangan antarmuka yang intuitif dan performa tinggi. Berpengalaman membangun
            produk digital end-to-end dari konsep, desain, hingga implementasi.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">Front‑End</h3>
            <p className="mt-2 text-sm text-gray-600">
              React, TypeScript, Tailwind, Performance optimization, Accessibility.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">Back‑End</h3>
            <p className="mt-2 text-sm text-gray-600">Node, FastAPI, MongoDB, REST API, Authentication.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">Desain & Interaksi</h3>
            <p className="mt-2 text-sm text-gray-600">Prototyping, Motion, Micro‑interactions, Sistem desain.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
