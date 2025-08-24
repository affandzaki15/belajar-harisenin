import MainLayout from "../components/Layout/mainLayout";
import bege from "../assets/images/content-four.jpg";
import ratingImg from "../assets/images/Rating.png";
import newsletterBg from "../assets/images/newsletter.jpg";

import content1 from "../assets/images/content-one.jpg";
import content2 from "../assets/images/content-two.jpg";
import content3 from "../assets/images/content-three.jpg";
import content4 from "../assets/images/content-four.jpg";
import content5 from "../assets/images/content-five.jpg";
import content6 from "../assets/images/content-six.jpg";
import content7 from "../assets/images/content-seven.jpg";
import content8 from "../assets/images/content-eight.jpg";
import content9 from "../assets/images/content-nine.jpg";

import profile1 from "../assets/images/cowok-abu.png";
import profile2 from "../assets/images/orang-pink.png";
import profile3 from "../assets/images/orang-biru.png";

const contents = [
  { id: 1, img: content1, profile: profile1 },
  { id: 2, img: content2, profile: profile2 },
  { id: 3, img: content3, profile: profile3 },
  { id: 4, img: content4, profile: profile1 },
  { id: 5, img: content5, profile: profile2 },
  { id: 6, img: content6, profile: profile3 },
  { id: 7, img: content7, profile: profile1 },
  { id: 8, img: content8, profile: profile2 },
  { id: 9, img: content9, profile: profile3 },
];


function Home() {
  return (
    <MainLayout>
      <div className="w-[450px] relative rounded-xl overflow-hidden shadow-lg text-white mx-auto my-7 md:w-min-[800px]  xl:w-[1300px] xl:h-[400px]">
        {/* Card */}
        <img
          src={bege}
          alt="background"
          className="absolute w-full h-full object-cover top-0 left-0 brightness-[0.2] z-0"
        />
        <div className="relative z-10 p-8">
          <h1 className="text-4xl font-poppins font-bold mb-4 text-center xl:text-5xl xl:px-48 pt-6">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p className="text-sm font-normal mb-6 leading-relaxed text-center font-poppins md:px-12 xl:px-32">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg w-full text-sm font-medium transition md:w-full xl:w-[368px] xl:mx-auto flex items-center justify-center">
            Temukan Video Course untuk Dipelajari!
          </button>
        </div>
      </div>


       {/* Header Navbar */}
      <div className="mt-5 px-5 mx-auto xl:mx-20">
        <div className="text-left">
          <h1 className="text-2xl font-semibold text-black mb-2 leading-tight">
            Koleksi Video Pembelajaran Unggulan
          </h1>
          <p className="text-sm font-medium text-gray-700 mb-6">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        <div className="flex gap-10 overflow-x-auto h-[52px]">
          <a
            href="#"
            className="relative text-[15.5px] font-medium text-[#f64920] after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[62px] after:border-b-[6px] after:border-[#f64920] after:bottom-[10px]"
          >
            Semua kelas
          </a>
          <a
            href="#"
            className="text-[15.5px] font-medium text-gray-800 hover:text-[#f64920]"
          >
            Pemasaran
          </a>
          <a
            href="#"
            className="text-[15.5px] font-medium text-gray-800 hover:text-[#f64920]"
          >
            Desain
          </a>
          <a
            href="#"
            className="text-[15.5px] font-medium text-gray-800 hover:text-[#f64920]"
          >
            Pengembangan Diri
          </a>
          <a
            href="#"
            className="text-[15.5px] font-medium text-gray-800 hover:text-[#f64920]"
          >
            Bisnis
          </a>
        </div>
      </div>

     {/* Card Section */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:mx-28 gap-6 py-10">
  {contents.map((item) => (
    <div
      key={item.id}
      className="flex flex-col bg-white border border-gray-200 rounded-xl p-4 w-full max-w-[450px] mx-auto shadow-md transition hover:shadow-lg"
    >
      {/* Mobile Layout (gambar kiri, teks kanan) */}
      <div className="flex sm:hidden gap-4">
        <img
          src={item.img}
          alt="content"
          className="w-[100px] h-[100px] rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex flex-col justify-center gap-2 flex-1">
          <p className="text-base font-bold font-poppins text-gray-900 line-clamp-2">
            Big 4 Auditor Financial Analyst
          </p>
          <div className="flex items-center gap-2">
            <img
              src={item.profile}
              alt="profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">Jenna Ortega</span>
              <p className="text-[11px] text-gray-500">Senior Accountant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (gambar atas, deskripsi bawah) */}
      <div className="hidden sm:flex flex-col gap-3">
        <img
          src={item.img}
          alt="content"
          className="w-full h-[180px] rounded-lg object-cover"
        />

        <p className="text-lg font-bold font-poppins text-gray-900">
          Big 4 Auditor Financial Analyst
        </p>
        <p className="text-sm  font-poppins text-[#333333]">
          Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...
        </p>



        <div className="flex items-center gap-3">
          <img
            src={item.profile}
            alt="profile"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-base font-medium">Jenna Ortega</span>
            <p className="text-sm text-gray-500">
              Senior Accountant di <span className="text-[#333333] font-poppins "> Gojek</span>
            </p>
          </div>
        </div>
      </div>

      {/* Rating & Price (sama untuk mobile & desktop) */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-2">
          <img src={ratingImg} alt="rating" className="w-[80px] md:w-[90px]" />
          <p className="text-xs md:text-sm text-gray-500 underline">3.5 (86)</p>
        </div>
        <div className="text-base md:text-lg font-bold text-green-500">Rp 300K</div>
      </div>
    </div>
  ))}
</div>

     <div className="relative w-full max-w-7xl mx-auto my-10 rounded-xl overflow-hidden shadow-lg text-white">
      {/* Background */}
      <img
        src={newsletterBg}
        alt="background"
        className="absolute w-full h-full object-cover top-0 left-0 brightness-[0.2] z-0"
      />

      {/* Overlay content */}
      <div className="relative z-10 p-10 md:p-16 flex flex-col items-center text-center">
        <p className="text-sm font-bold text-gray-300 tracking-wider mb-2">
          NEWSLETTER
        </p>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Mau Belajar Lebih Banyak?
        </h1>
        <p className="text-sm md:text-base max-w-md mb-6">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.id
        </p>

        {/* Input + Button */}
        {/* Input + Button dalam 1 baris */}
        <div className="w-full max-w-md bg-white rounded-lg flex overflow-hidden">
          <input
            type="email"
            placeholder="Masukkan Emailmu"
            className="flex-1 px-4 py-3 text-gray-900  font-poppins text-sm focus:outline-none"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium text-sm px-5 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    
    </MainLayout>
  );
}
export default Home;
