"use client";

export default function CrearInscripcion() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      {/* Título con Icono */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">📝</span>
        <div>
          <h1 className="text-3xl font-bold text-zinc-800">Matricular Alumno</h1>
          <p className="text-zinc-500">Asigna un estudiante a un curso activo</p>
        </div>
      </div>

      {/* Formulario Profesional */}
      <form className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm space-y-6">
        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-2">
            Seleccionar Estudiante
          </label>
          <select className="w-full p-3 bg-zinc-50 border border-zinc-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all">
            <option value="">Seleccione un alumno de la lista...</option>
            <option value="1">Juan Pérez</option>
            <option value="2">María García</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-2">
            Curso de Destino
          </label>
          <select className="w-full p-3 bg-zinc-50 border border-zinc-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all">
            <option value="">Seleccione el curso...</option>
            <option value="react">Master en React Pro</option>
            <option value="node">Backend con Node.js</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Fecha de Inicio
            </label>
            <input type="date" className="w-full p-3 bg-zinc-50 border border-zinc-300 rounded-xl outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Tipo de Acceso
            </label>
            <select className="w-full p-3 bg-zinc-50 border border-zinc-300 rounded-xl outline-none">
              <option>Completo</option>
              <option>Solo Lectura</option>
              <option>Temporal (30 días)</option>
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-zinc-800 transition-transform active:scale-[0.98] shadow-lg shadow-zinc-200"
        >
          Confirmar Matrícula
        </button>
      </form>
    </div>
  );
}