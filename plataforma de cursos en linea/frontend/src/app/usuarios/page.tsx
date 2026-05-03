"use client"; // Esto permite que el formulario sea interactivo

export default function CrearUsuarioPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-zinc-800 mb-2">👤 Gestión de Usuarios</h1>
      <p className="text-zinc-500 mb-8">Registra un nuevo usuario en la plataforma.</p>

      <form className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Nombre Completo</label>
            <input type="text" className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Ej: Juan Pérez" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Correo Electrónico</label>
            <input type="email" className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="juan@ejemplo.com" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Rol del Usuario</label>
          <select className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Estudiante</option>
            <option>Instructor</option>
            <option>Administrador</option>
          </select>
        </div>

        <div className="pt-4">
          <button type="submit" className="w-full bg-zinc-900 text-white py-3 rounded-lg font-semibold hover:bg-zinc-800 transition-colors">
            Guardar Usuario
          </button>
        </div>
      </form>
    </div>
  );
}