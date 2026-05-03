"use client";
export default function GenerarCertificado() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-zinc-800 mb-6">🎓 Generador de Certificados</h1>
      <div className="bg-zinc-50 border-2 border-dashed border-zinc-300 p-10 rounded-2xl text-center mb-8">
        <div className="text-5xl mb-4">🏆</div>
        <h2 className="text-xl font-serif">Certificado de Finalización</h2>
        <p className="italic text-zinc-400 mt-2">Se otorgará automáticamente al completar el 100%</p>
      </div>
      <form className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm space-y-4">
        <label className="block text-sm font-medium">Firma Digital del Instructor</label>
        <input type="text" className="w-full p-2 border rounded-md" placeholder="Nombre que aparecerá en la firma" />
        <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-pink-700">Configurar Certificación</button>
      </form>
    </div>
  );
}