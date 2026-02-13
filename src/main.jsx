import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [formData, setFormData] = useState({ tipo: 'donacion' });

  // Colores fijos para asegurar que se vea oscuro
  const colors = {
    bg: '#0a0a0b',
    card: '#14151a',
    accent: '#d97706', // Amber-600
    textMain: '#ffffff',
    textMuted: '#9ca3af'
  }

  return (
    <div style={{ backgroundColor: colors.bg, color: colors.textMain, minHeight: '100vh' }} className="font-sans">
      {/* Tailwind CDN */}
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />

      {/* NAV */}
      <nav className="fixed w-full z-50 px-8 py-5 flex justify-between items-center border-b border-white/5" style={{ backgroundColor: 'rgba(10, 10, 11, 0.95)' }}>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter">PROYECTO CATAMARCA</span>
          <span className="text-[9px] tracking-[0.3em] font-bold" style={{ color: colors.accent }}>DE OBJETO A SUJETO DE DERECHO</span>
        </div>
        <div className="hidden md:flex space-x-10 text-[11px] font-bold tracking-[0.2em] uppercase">
          <a href="#quienes" className="hover:text-amber-500 transition">Nosotros</a>
          <a href="#ejes" className="hover:text-amber-500 transition">Ejes</a>
          <a href="#contacto" style={{ backgroundColor: colors.accent }} className="text-white px-6 py-2 rounded-sm shadow-lg">Sumate</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative h-screen flex items-center px-8 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516655855035-d5215bc56041?q=80&w=2070" 
            className="w-full h-full object-cover opacity-20" 
            alt="Catamarca"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${colors.bg}, transparent)` }}></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
            De Objeto a <br/>
            <span style={{ color: colors.accent }}>Sujeto de Derecho</span>
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-10" style={{ color: colors.textMuted }}>
            ¿Cómo podríamos lograr que la comunidad se transforme en sujetos de derecho a pesar de su aislamiento y marginación histórica?
          </p>
          <a href="#contacto" style={{ backgroundColor: colors.accent }} className="inline-block text-white px-10 py-4 font-bold uppercase tracking-widest hover:opacity-90 transition">
            Iniciar Transformación
          </a>
        </div>
      </header>

      {/* QUIENES SOMOS (Texto del PDF) */}
      <section id="quienes" className="py-24 px-8 md:px-20" style={{ backgroundColor: '#111216' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Nuestra Misión</h2>
            <div>
              <p className="font-bold uppercase tracking-widest text-xs mb-2" style={{ color: colors.accent }}>El primero:</p>
              <p className="text-lg leading-relaxed text-gray-400">
                Legetimar y amplificar los reclamos de la comunidad, para que dejen de ser invisibles y pasen a formar parte de la agenda pública.
              </p>
            </div>
            <div>
              <p className="font-bold uppercase tracking-widest text-xs mb-2" style={{ color: colors.accent }}>El segundo</p>
              <p className="text-lg leading-relaxed text-gray-400">
                Cubrir necesidades básicas urgentes que hoy el estado no está garantizando.
              </p>
            </div>
          </div>
          <div className="p-10 flex flex-col justify-center border-l-4 shadow-2xl" style={{ backgroundColor: colors.bg, borderColor: colors.accent }}>
            <p className="text-2xl font-medium leading-relaxed italic">
              "La transformación requiere pasar de la asistencia pasiva a la participación vinculante en las decisiones que afectan su territorio."
            </p>
            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: colors.textMuted }}>
              Juliana Tentor • Juan M. Llanez • Martina Yannone • Lucia Ponce de Leon • Alejandro Gorosito
            </p>
          </div>
        </div>
      </section>

      {/* EJES DE GESTIÓN */}
      <section id="ejes" className="py-24 px-8 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-gray-500 font-bold tracking-[0.4em] uppercase text-xs mb-16">Ejes de Gestión</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["SALUD", "JUSTICIA", "ELECTRICIDAD", "EDUCACION", "AGUA Y CLOACAS"].map((eje) => (
              <div key={eje} style={{ backgroundColor: '#1a1b20' }} className="border border-white/5 p-8 group hover:border-amber-600 transition">
                <div className="h-1 w-8 bg-amber-600 mx-auto mb-6 group-hover:w-full transition-all"></div>
                <span className="font-black tracking-widest text-sm">{eje}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="contacto" className="py-24 px-8 md:px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 shadow-2xl" style={{ backgroundColor: '#111216' }}>
          <div className="p-12 md:p-16 flex flex-col justify-between bg-black">
            <h2 className="text-5xl font-black mb-6 tracking-tighter italic">SUMATE</h2>
            <p className="font-bold text-xl leading-tight" style={{ color: colors.accent }}>
              TU LUGAR DE NACIMIENTO NO DEBERÍA DEFINIR TUS DERECHOS.
            </p>
            <div className="mt-12 text-gray-600 text-xs font-mono">
              📍 CATAMARCA, ARGENTINA
            </div>
          </div>
          
          <div className="p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="NOMBRE COMPLETO" className="w-full bg-black border border-white/10 p-4 text-xs outline-none focus:border-amber-600" />
              <input type="email" placeholder="EMAIL" className="w-full bg-black border border-white/10 p-4 text-xs outline-none focus:border-amber-600" />
              <textarea placeholder="MENSAJE" className="w-full bg-black border border-white/10 p-4 text-xs h-32 outline-none focus:border-amber-600"></textarea>
              <button style={{ backgroundColor: colors.accent }} className="w-full text-white py-5 font-bold uppercase tracking-[0.2em] text-xs">
                {formData.tipo === 'donacion' ? 'Enviar Donación' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);