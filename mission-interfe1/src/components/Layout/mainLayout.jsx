import { useState } from "react";
import Logo from "../atoms/logo";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/icon-kanan.png";
import Footer from "../organisms/footer";

function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-[20px_10px_40px_rgba(62,67,74,0.31)] relative w-full h-[74px] md:pl-10 md:shadow-none px-6 py-4 flex justify-between items-center">
        {/* Logo di kiri */}
        <Logo />
        {/* Desktop Menu (hidden di hp) */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Kategori */}
          <details className="relative">
            <summary className="cursor-pointer text-gray-700 font-medium hover:text-orange-500 list-none">
              Kategori
            </summary>
          </details>

          {/* Foto profil */}
          <details className="relative">
            <summary className="list-none cursor-pointer">
              <img
                src={avatar}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
            </summary>
            <ul className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
             
              <li><Link to="/login" className="block px-4 py-2 hover:bg-orange-100">Login</Link></li>
              <li><Link to="/register" className="block px-4 py-2 hover:bg-orange-100">Register</Link></li>
            </ul>
          </details>
        </div>

        {/* Hamburger (muncul di hp) */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </header>

      {/* Mobile Menu (hanya muncul kalau isOpen true) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-4">
          <div>
            <ul className="pl-4">
              <li><Link to="/login" className="block py-1 hover:text-orange-500">Login</Link></li>
              <li><Link to="/register" className="block py-1 hover:text-orange-500">Register</Link></li>
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow bg-[#fdf8f2]">{children}</main>

       {/* Footer */}
       <Footer />
    </div>
  );
}

export default MainLayout;
