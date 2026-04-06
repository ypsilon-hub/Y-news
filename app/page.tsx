'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Chiudi menu cliccando fuori
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Barra blu */}
      <div
        className="relative h-18 rounded-r-full flex items-center justify-center"
        style={{ backgroundColor: '#016E8F', marginRight: '10px' }}
      >
        {/* Menu centrale */}
        <nav className="flex space-x-10 text-white font-bold text-lg">
          {['HOME', 'CHI SIAMO', 'CONTATTI'].map((item) => (
            <a
              key={item}
              href="#"
              className="transition-all duration-200 hover:text-[#dadf02] hover:scale-105"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Cerchio giallo */}
      <div
        className="absolute top-1/2 h-16 w-16 rounded-full"
        style={{
          backgroundColor: '#dadf02',
          right: '20px',
          transform: 'translateY(-52%)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
        }}
      />

      {/* Hamburger */}
      {!menuOpen && (
        <div
          className="absolute top-4 left-4 w-8 h-8 flex flex-col justify-between cursor-pointer z-50"
          onClick={() => setMenuOpen(true)}
        >
          <span className="block h-1 w-full bg-black rounded" />
          <span className="block h-1 w-full bg-black rounded" />
          <span className="block h-1 w-full bg-black rounded" />
        </div>
      )}

      {/* Sidebar */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-3xl font-bold">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-4xl font-bold text-gray-600 hover:text-black leading-none"
          >
            ×
          </button>
        </div>

        {/* Contenuto menu */}
        <div className="p-6 space-y-6 text-lg font-bold">
          <ul className="space-y-4">
            {['News', 'Tendenze', 'Preferiti'].map((item) => (
              <li key={item}>
                <a className="block transition-all duration-200 hover:text-[#dadf02] hover:scale-105">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <hr />

          <ul className="space-y-4">
            {[
              'Cronaca',
              'Politica',
              'Economia',
              'Esteri',
              'Cultura',
              'Tecnologia',
              'Sport',
            ].map((item) => (
              <li key={item}>
                <a className="block transition-all duration-200 hover:text-[#dadf02] hover:scale-105">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ================= ARTICOLO DI PROVA ================= */}
      <main className="max-w-4xl mx-auto mt-12 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Immagine articolo */}
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
            alt="Immagine articolo"
            className="w-full h-56 object-cover"
          />

          {/* Titolo */}
          <div className="p-6">
            <h3 className="text-2xl font-bold">
              Titolo del primo articolo di prova
            </h3>
          </div>
        </div>
      </main>
      {/* ===================================================== */}
    </div>
  );
}
