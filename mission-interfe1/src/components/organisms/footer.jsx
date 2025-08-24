import { useState } from "react";
import Logo from "../atoms/logo";
import panah from "../../assets/images/Panah.png";
import linkedin from "../../assets/images/linkedin.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import Facebook from "../../assets/images/facebook.png";

function Footer() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <footer className="bg-white border-t text-gray-700 px-6 pt-8">
      <div className="max-w-6xl mx-auto">
        {/* === Desktop Footer === */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {/* Kiri: Logo + Deskripsi */}
          <div>
            <Logo />
            <p className="mt-2 text-md font-poppins font-semibold">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id
            </p>
            <p className="mt-2 text-sm font-poppins">
              Jl. Usman Effandi No. 50 Lowokwaru, Malang <br />
              +62-877-7123-1234
            </p>
          </div>

          {/* Kategori */}
          <div>
            <p className="font-semibold mb-2 font-poppins font-semibold">
              Kategori
            </p>
            <ul className="space-y-1 text-sm">
              <li>Digital & Teknologi</li>
              <li>Pemasaran</li>
              <li>Manajemen Bisnis</li>
              <li>Pengembangan Diri</li>
              <li>Desain</li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <p className="font-semibold mb-2 font-poppins font-semibold">
              Perusahaan
            </p>
            <ul className="space-y-1 text-sm">
              <li>Tentang Kami</li>
              <li>FAQ</li>
              <li>Kebijakan Privasi</li>
              <li>Ketentuan Layanan</li>
              <li>Bantuan</li>
            </ul>
          </div>

          {/* Komunitas */}
          <div>
            <p className="font-semibold mb-2 font-poppins font-semibold">
              Komunitas
            </p>
            <ul className="space-y-1 text-sm">
              <li>Tips Sukses</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>

      {/* === Batas bawah (garis + copyright) === */}
      {/* Wrapper biar sejajar */}
      <div className="w-full max-w-6xl mx-auto px-1 pb-2.5">
        {/* Garis */}
        <hr className="border-t border-gray-300 w-full mb-4 mt-4" />

        {/* Baris bawah: copyright kiri + sosmed kanan */}
        <div className="flex justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            ©2023 Gerobak Sayur All Rights Reserved.
          </p>

          {/* Sosial Media */}
          <div className="flex space-x-3">
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            <img src={Facebook} alt="Facebook" className="w-6 h-6" />
            <img src={twitter} alt="Twitter" className="w-6 h-6" />
            <img src={instagram} alt="Instagram" className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* === Mobile Footer === */}
      <div className="md:hidden mt-8">
        <div>
          <Logo />
          <p className="mt-2 text-sm font-poppins font-semibold">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </p>
          <p className="mt-2 text-sm font-poppins">
            Jl. Usman Effandi No. 50 Lowokwaru, Malang <br />
            +62-877-7123-1234
          </p>
        </div>

        {/* Accordion Menu */}
        <div className="mt-6 space-y-2">
          {/* Perusahaan */}
          <div>
            <button
              className="w-full flex justify-between items-center py-2 font-poppins font-semibold"
              onClick={() => toggleMenu("perusahaan")}
            >
              Perusahaan
              <span>
                {openMenu === "perusahaan" ? (
                  ""
                ) : (
                  <img src={panah} alt="panah" />
                )}
              </span>
            </button>
            {openMenu === "perusahaan" && (
              <ul className="pl-4 space-y-1 text-sm">
                <li>Tentang Kami</li>
                <li>FAQ</li>
                <li>Kebijakan Privasi</li>
                <li>Ketentuan Layanan</li>
                <li>Bantuan</li>
              </ul>
            )}
          </div>

          {/* Kategori */}
          <div>
            <button
              className="w-full flex justify-between items-center py-2 font-poppins font-semibold"
              onClick={() => toggleMenu("kategori")}
            >
              Kategori
              <span>
                {openMenu === "kategori" ? (
                  "−"
                ) : (
                  <img src={panah} alt="panah" />
                )}
              </span>
            </button>
            {openMenu === "kategori" && (
              <ul className="pl-4 space-y-1 text-sm">
                <li>Digital & Teknologi</li>
                <li>Pemasaran</li>
                <li>Manajemen Bisnis</li>
                <li>Pengembangan Diri</li>
                <li>Desain</li>
              </ul>
            )}
          </div>

          {/* Komunitas */}
          <div>
            <button
              className="w-full flex justify-between items-center py-2 font-poppins font-semibold"
              onClick={() => toggleMenu("komunitas")}
            >
              Komunitas
              <span>
                {openMenu === "komunitas" ? (
                  "−"
                ) : (
                  <img src={panah} alt="panah" />
                )}
              </span>
            </button>
            {openMenu === "komunitas" && (
              <ul className="pl-4 space-y-1 text-sm">
                <li>Tips Sukses</li>
                <li>Blog</li>
              </ul>
            )}
          </div>
        </div>

        {/* Garis panjang + Sosmed bawah */}
        <hr className="border-t border-gray-300 mt-6" />
        <div className="flex flex-col py-4 space-y-3">
          {/* Sosial Media */}
          <div className="flex space-x-3">
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            <img src={Facebook} alt="Facebook" className="w-6 h-6" />
            <img src={twitter} alt="Twitter" className="w-6 h-6" />
            <img src={instagram} alt="Instagram" className="w-6 h-6" />
          </div>
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            ©2023 Gerobak Sayur All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
