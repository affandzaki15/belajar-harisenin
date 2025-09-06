import React from "react";
import Logo from "../atoms/Logo";
import avatar from "../../assets/images/icon-kanan.png";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-[20px_10px_40px_rgba(62,67,74,0.31)] relative w-full h-[74px] md:pl-20 md:shadow-none px-6 py-4 flex justify-between items-center">
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
          <details className="relative pr-20">
            <summary className="list-none cursor-pointer">
              <img
                src={avatar}
                alt="Profile"
                className="w-10 h-10 rounded-lg border border-gray-300"
              />
            </summary>
          </details>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-[#fdf8f2]">{children}</main>
    </div>
  );
}
