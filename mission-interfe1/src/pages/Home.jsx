import MainLayout from "../components/Layout/mainLayout";

function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-white shadow p-8 mb-10 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
        </h1>
        <button className="bg-green-500 text-white px-6 py-3 rounded-md">
          Mulai Belajar
        </button>
      </section>

      {/* Video Cards */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Koleksi Video Pembelajaran Unggulan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1,2,3,4,5,6,7,8].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3">
              <img
                src={`https://via.placeholder.com/300x200?text=Video+${item}`}
                alt={`Video ${item}`}
                className="rounded-md mb-3"
              />
              <h3 className="text-sm font-medium">Kelas Belajar Fundamental {item}</h3>
              <p className="text-green-500 font-bold">Rp 300K</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 bg-black text-white text-center py-10">
        <h2 className="text-2xl mb-4">Mau Belajar Lebih Banyak?</h2>
        <button className="bg-green-500 text-white px-6 py-3 rounded-md">
          Lihat Semua Video
        </button>
      </section>
    </MainLayout>
  );
}
export default Home;
