"use client";
export default function CrearLeccion() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-zinc-800 mb-6">📖 Subir Lección</h1>
      <form className="space-y-5 bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
        <div>
          <label className="block text-sm font-medium mb-1">Nombre de la Lección</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Ej: Introducción a los Hooks" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">URL del Video (Vimeo/YouTube)</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="https://youtube.com/..." />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Duración (minutos)</label>
          <input type="number" className="w-full p-2 border rounded-md" />
        </div>
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700">Subir Contenido</button>
      </form>
    </div>
  );
}