import React, { useState, useEffect } from "react";

export default function Home() {
  // Dummy data awal
  const initialCourses = [
    {
      id: 1,
      title: "Big 4 Auditor Financial Analyst",
      teacher: "Jenna Ortega",
      job: "Senior Accountant",
      img: "https://media.licdn.com/dms/image/v2/D5612AQHsWSDK2Q2fDg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1656418449777?e=2147483647&v=beta&t=AJx9gL3CWuN8hevHK9zzz0kcVqt_FkC-wecsbBsutoQ",

      profile:
        "https://www.shutterstock.com/image-photo/portrait-beautiful-young-business-woman-600nw-2481341233.jpg",
    },
    {
      id: 2,
      title: "Fullstack Web Developer",
      teacher: "John Doe",
      job: "Software Engineer",
      img: "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/04/full-stack%20web%20development_1681290664.png",
      profile:
        "https://www.shutterstock.com/image-photo/happy-middle-aged-business-man-600nw-2516789507.jpg",
    },
  ];

  // Ambil dari localStorage atau gunakan dummy data
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem("courses");
    return saved ? JSON.parse(saved) : initialCourses;
  });

  const [title, setTitle] = useState("");
  const [teacher, setTeacher] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Simpan ke localStorage setiap courses berubah
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  // Fungsi konversi file ke Base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle upload gambar
  const handleImageChange = async (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await fileToBase64(file);
      if (type === "course") setImage(base64);
      if (type === "profile") setProfileImg(base64);
    }
  };

  // Tambah course baru
  const addCourse = () => {
    if (!title || !teacher || !job || !image || !profileImg) {
      alert("Isi semua field!");
      return;
    }
    const newCourse = {
      id: Date.now(),
      title,
      teacher,
      job,
      img: image,
      profile: profileImg,
    };
    setCourses((prev) => [...prev, newCourse]);
    resetForm();
  };

  // Update course
  const updateCourse = () => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === editingId
          ? { ...c, title, teacher, job, img: image, profile: profileImg }
          : c
      )
    );
    resetForm();
  };

  // Hapus course
  const deleteCourse = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  // Edit course
  const editCourse = (course) => {
    setEditingId(course.id);
    setTitle(course.title);
    setTeacher(course.teacher);
    setJob(course.job);
    setImage(course.img);
    setProfileImg(course.profile);
  };

  // Reset form
  const resetForm = () => {
    setTitle("");
    setTeacher("");
    setJob("");
    setImage("");
    setProfileImg("");
    setEditingId(null);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto font-poppins">
      <h1 className="text-3xl font-extrabold mb-4 justify-center flex font-poppins text-amber-950"> CRUD Course Card</h1>

      {/* FORM */}
      <div className="mb-6 p-4  rounded-lg shadow-xl bg-white space-y-2 font-poppins">
        <input
          type="text"
          placeholder="Judul Course"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="Nama Pengajar"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="Jabatan"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          className="border p-2 w-full rounded"
        />

        {/* Upload gambar course */}

        <div className="py-2">
          <label htmlfor="gambar" className="pb-1 block font-poppins">
            Upload Gambar Course <span className="text-red-500">*</span>
          </label>

          <input
            type="file"
            onChange={(e) => handleImageChange(e, "course")}
            className="w-full bg-amber-700 text-white px-4 py-2 rounded font-poppins hover:bg-amber-800"
          />
        </div>
        {image && (
          <img
            src={image}
            alt=""
            className="w-24 h-24 mt-2 object-cover rounded"
          />
        )}

        {/* Upload gambar profile */}
        <div className="py-2">
          <label Htmlfor="gambar" className="pb-1 block font-poppins">
            Upload Icon Profile <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            onChange={(e) => handleImageChange(e, "profile")}
            className="w-full bg-amber-500 text-white px-4 py-2 rounded font-poppins hover:bg-amber-600"
          />
        </div>
        {profileImg && (
          <img
            src={profileImg}
            alt="preview"
            className="w-16 h-16 mt-2 object-cover rounded-full"
          />
        )}

        {/* Buttons */}
        {editingId ? (
          <div className="flex gap-2">
            <button
              onClick={updateCourse}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Update
            </button>
            <button
              onClick={resetForm}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Batal
            </button>
          </div>
        ) : (
          <button
            onClick={addCourse}
            className="bg-amber-900 text-white px-4 py-2 rounded mt-2 hover:bg-amber-950"
          >
            Tambah
          </button>
        )}
      </div>

      {/* CARD LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-10">
        {courses.length === 0 && (
          <p className="text-gray-500">Belum ada course.</p>
        )}

        {courses.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white border border-gray-200 rounded-xl p-4 w-full max-w-[450px] mx-auto shadow-md transition hover:shadow-lg"
          >
            <div className="flex gap-4">
              <img
                src={item.img}
                alt="content"
                className="w-[100px] h-[100px] rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex flex-col justify-center gap-2 flex-1">
                <p className="text-base font-bold text-gray-900 line-clamp-2">
                  {item.title}
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src={item.profile}
                    alt="profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{item.teacher}</span>
                    <p className="text-[11px] text-gray-500">{item.job}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => editCourse(item)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteCourse(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
