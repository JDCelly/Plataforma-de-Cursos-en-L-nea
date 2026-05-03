export default function HomePage() {
  // Aquí definimos tus 5 historias de usuario
  const historias = [
    { nombre: "Usuarios", desc: "Gestión de perfiles, roles de alumnos y profesores.", icono: "👤", color: "bg-blue-100" },
    { nombre: "Cursos", desc: "Administración del catálogo, precios y categorías.", icono: "📚", color: "bg-green-100" },
    { nombre: "Lecciones", desc: "Gestión de contenido multimedia, videos y textos.", icono: "📖", color: "bg-purple-100" },
    { nombre: "Inscripciones", desc: "Control de alumnos matriculados y progreso.", icono: "📝", color: "bg-yellow-100" },
    { nombre: "Certificados", desc: "Generación automática de diplomas al finalizar.", icono: "🎓", color: "bg-pink-100" },
  ];

  return (
    <div className="p-8">
      {/* Título Principal */}
      <header className="mb-10 border-b pb-6">
        <h1 className="text-3xl font-bold text-zinc-800">🚀 Panel de Control</h1>
        <p className="text-zinc-500 mt-2">Bienvenido a tu Plataforma de Cursos Online</p>
      </header>

      {/* Rejilla de Historias (Tarjetas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {historias.map((h) => (
          <div key={h.nombre} className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className={`w-12 h-12 ${h.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
              {h.icono}
            </div>
            <h2 className="text-xl font-semibold text-zinc-800">{h.nombre}</h2>
            <p className="text-zinc-500 mt-2 text-sm leading-relaxed">{h.desc}</p>
            <div className="mt-6 flex items-center text-sm font-medium text-blue-600">
              Ver detalles <span className="ml-1">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}