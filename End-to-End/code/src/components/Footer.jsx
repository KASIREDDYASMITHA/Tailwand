export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-gray-600">
        © {new Date().getFullYear()} Todos App. Built with React, Firebase, Tailwind, and shadcn/ui.
      </div>
    </footer>
  );
}
