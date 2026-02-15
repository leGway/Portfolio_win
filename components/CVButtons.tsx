export default function CVButtons() {
  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-4">
      <a
        href="/cv-fr.pdf"
        download
        className="px-5 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition"
      >
        Télécharger CV (FR)
      </a>
      <a
        href="/cv-en.pdf"
        download
        className="px-5 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition"
      >
        Download CV (EN)
      </a>
    </div>
  );
}
