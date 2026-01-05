export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row md:space-x-6 bg-gray-100 p-4">
      <a href="#" className="hover:text-blue-600">Home</a>
      <a href="#" className="hover:text-blue-600">Features</a>
      <a href="#" className="hover:text-blue-600">Contact</a>
    </nav>
  );
}
