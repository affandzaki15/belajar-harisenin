import Logo from "../atoms/logo";
import { Link } from "react-router-dom";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <Logo />
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700">Beranda</Link>
          <Link to="/login" className="text-gray-700">Login</Link>
          <Link to="/register" className="text-gray-700">Register</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-[#fdf8f2]">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 text-sm px-6 py-8 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="font-bold text-orange-500">videobelajar</p>
            <p>© 2025 Semua Hak Dilindungi</p>
          </div>
          <div>
            <p className="font-semibold">Kategori</p>
            <ul>
              <li>Teknologi</li>
              <li>Bisnis</li>
              <li>Desain</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Perusahaan</p>
            <ul>
              <li>Tentang Kami</li>
              <li>Karir</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Ikuti Kami</p>
            <div className="flex space-x-2">
              <a href="#">FB</a>
              <a href="#">IG</a>
              <a href="#">YT</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default MainLayout;
