import MainLayout from "../components/Layout/mainLayout";

function Home() {
  return (
    <MainLayout>
      <div className="bg-[#fffdf3] min-h-screen">
        {/* HERO SECTION */}
        <section className="relative w-[370px] md:w-[1300px] h-auto md:h-[450px] rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] mx-auto my-7">
          <img
            src="/hero-bg.jpg"
            alt="hero"
            className="absolute top-0 left-0 w-full h-full object-cover brightness-[.2]"
          />
          <div className="relative z-10 p-8 text-white flex flex-col items-center text-center">
            <h1 className="text-2xl md:text-[40px] font-bold mb-4 px-5 md:px-[230px] pt-5">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
              Interaktif!
            </h1>
            <p className="text-sm md:text-base mb-6 px-5 md:px-[200px] leading-relaxed">
              Temukan ilmu-ilmu yang relevan dan dibutuhkan untuk mendukung
              perkembangan karirmu.
            </p>
            <button className="bg-[#3ecf4c] text-white rounded-lg px-6 py-3 w-full md:w-[368px] hover:bg-green-600 transition">
              Temukan Video Course untuk Diawali!
            </button>
          </div>
        </section>

        {/* CARD LIST SECTION */}
        <section className="max-w-[1300px] mx-auto py-10 px-5">
          <h2 className="text-[28px] font-semibold text-[#333] mb-8 text-center">
            Pilihan Course Populer
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={`/course-${item}.jpg`}
                  alt={`course-${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#333] mb-2">
                    Course {item}
                  </h3>
                  <p className="text-sm text-[#555] mb-4">
                    Deskripsi singkat course {item}, sangat cocok untuk kamu
                    yang ingin belajar cepat.
                  </p>
                  <button className="bg-[#3ecf4c] text-white rounded-lg px-4 py-2 hover:bg-green-600 transition">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NEWSLETTER SECTION */}
        <section className="max-w-[1300px] mx-auto py-16 px-5">
          <div className="bg-[#3ecf4c] rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between p-8 md:p-12 text-white">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-[28px] font-semibold mb-3">
                Jangan Ketinggalan Update!
              </h2>
              <p className="text-sm md:text-base">
                Daftarkan emailmu untuk mendapatkan berita terbaru seputar
                course dan promo menarik.
              </p>
            </div>
            <form className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Masukkan email kamu"
                className="w-full md:w-[300px] px-4 py-2 rounded-l-lg text-[#333] outline-none"
              />
              <button
                type="submit"
                className="bg-[#2ea63a] px-6 py-2 rounded-r-lg hover:bg-green-700 transition"
              >
                Daftar
              </button>
            </form>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
export default Home;
