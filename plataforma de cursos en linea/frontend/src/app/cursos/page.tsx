"use client";
export default function CrearCurso() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-zinc-800 mb-6">📚 Crear Nuevo Curso</h1>
      <form className="grid grid-cols-2 gap-6 bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Título del Curso</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Ej: Master en React desde Cero" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Categoría</label>
          <select className="w-full p-2 border rounded-md">
            <option>Programación</option>
            <option>Diseño</option>
            <option>Negocios</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Precio (USD)</label>
          <input type="number" className="w-full p-2 border rounded-md" placeholder="29.99" />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Imagen de Portada (URL)</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="https://..." />
        </div>
        <button className="col-span-2 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700">Publicar Curso</button>
      </form>
    </div>
  );
}