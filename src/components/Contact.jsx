import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Terkirim! Terima kasih, saya akan segera menghubungi kembali.');
  };

  return (
    <section id="contact" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Mari Berkolaborasi</h2>
          <p className="mt-3 text-gray-600">Saya terbuka untuk proyek freelance, kolaborasi, atau peluang kerja penuh waktu.</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Nama</label>
              <input type="text" required className="w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:ring-gray-900" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <input type="email" required className="w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:ring-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">Pesan</label>
            <textarea rows="4" required className="w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:ring-gray-900" />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-white transition hover:bg-black">
              <Send className="h-4 w-4" />
              Kirim Pesan
            </button>
            {status && <span className="text-sm text-green-600">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
