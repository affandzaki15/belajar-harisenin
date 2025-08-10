function updateWaktu() {
  const tanggal = new Date();

  const hari = tanggal.toLocaleString("us-US", { weekday: "long" });
  const tanggalNum = tanggal.getDate();
  const bulan = tanggal.toLocaleString("us-US", { month: "long" });
  const tahun = tanggal.getFullYear();

  const jam = tanggal.getHours().toString().padStart(2, "0");
  const menit = tanggal.getMinutes().toString().padStart(2, "0");
  const detik = tanggal.getSeconds().toString().padStart(2, "0");

  document.getElementById(
    "tanggal"
  ).textContent = `${hari}, ${tanggalNum} ${bulan} ${tahun}`;
  document.getElementById("jam").textContent = `${jam}:${menit}:${detik}`;
}

setInterval(updateWaktu, 1000);
updateWaktu();

// Open/Close Modal
function openModal() {
  document.getElementById("modal").classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}
document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target.id === "modal") {
    closeModal();
  }
});

// semua task disimpan di sini
const allTasks = [];

// Fungsi simpan data ke localStorage
function saveTasksToStorage() {
  localStorage.setItem("tasks", JSON.stringify(allTasks));
}

// Fungsi load data dari localStorage dan render ke DOM
function loadTasksFromStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    const tasks = JSON.parse(storedTasks);
    tasks.forEach(task => {
      allTasks.push(task);
      renderTask(task);
    });
    updateOverviewCounts();
  }
}

// Fungsi buat dan masukkan task ke DOM
function renderTask(task) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = new Date(task.date).toLocaleDateString("id-ID", options);

  let levelColor;
  if (task.level === "High") {
    levelColor = "bg-[#ef4444] text-black";
  } else if (task.level === "Medium") {
    levelColor = "bg-[#f59e0b] text-black";
  } else if (task.level === "Low") {
    levelColor = " bg-[#10b981] text-black";
  } else {
    levelColor = "bg-gray-400 text-black";
  }

  const newTask = document.createElement("div");
  newTask.innerHTML = `
  <div class="bg-[#343541] p-4 rounded-lg mt-2 relative complete-lists" data-date="${task.date}">
     <button class="absolute top-2 right-3 p-1 rounded-full delete-btnnn">
          <img src="images/delete_6861362.png" alt="Delete" class="w-6 h-6 delete-btn">
        </button>

        <span
          class="px-4 py-1 top-0 left-0 absolute mb-4 rounded-tr-none rounded-tl-lg rounded-br-lg font-poppins text-center font-semibold text-black ${levelColor}">${task.level}</span>

    <div class="mt-8">
      <label class="flex items-center gap-2 justify-between">
        <span class="task-text text-[#ffaa7a] font-poppins font-bold">${task.desc}</span>
        <input type="checkbox" class="form-checkbox h-6 w-6 accent-[#ffaa7a] complete-checkbox" ${task.completed ? "checked" : ""}>
      </label>
      <span class=" taks-date text-[#ffaa7a] text-xs font-poppins font-bold">
        ${formattedDate}
      </span>
    </div>
  </div>
  `;

  if (task.completed) {
    document.getElementById("completed-list").appendChild(newTask.firstElementChild);
  } else {
    document.getElementById("task-list").appendChild(newTask.firstElementChild);
  }
}

// load data saat halaman dimuat
window.addEventListener("load", loadTasksFromStorage);

// Tangkap form submit
document
  .getElementById("add-task-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // mencegah reload

    const taskDesc = document.getElementById("task-input").value.trim();
    const taskLevel = document.getElementById("level-select").value;
    const taskDate = document.getElementById("date-input").value;

    if (!taskDesc || !taskLevel || !taskDate) {
      alert("Harap isi semua field");
      return;
    }

    // Buat objek task baru
    const newTaskObj = {
      desc: taskDesc,
      level: taskLevel,
      date: taskDate,
      completed: false,
    };
    allTasks.push(newTaskObj);

    renderTask(newTaskObj);
    updateOverviewCounts();
    saveTasksToStorage();

    // Reset form & tutup modal
    e.target.reset();
    closeModal();
  });

// Event listener untuk filter date
document.getElementById("filter-date").addEventListener("change", function() {
  const filterValue = this.value; // format yyyy-mm-dd
  const tasks = document.querySelectorAll("#task-list > div");

  tasks.forEach(task => {
    const taskDate = task.getAttribute("data-date");
    if (filterValue === "" || taskDate === filterValue) {
      task.style.display = "block";  // tampilkan
    } else {
      task.style.display = "none";   // sembunyikan
    }
  });
});

// Event listener untuk checkbox (pindah + garis coret + update array + simpan)
document.addEventListener("change", function (e) {
  if (e.target.classList.contains("complete-checkbox")) {
    const taskCard = e.target.closest(".complete-lists");
    const taskText = taskCard.querySelector(".task-text");
    const desc = taskText.textContent;
    const level = taskCard.querySelector("span").textContent.trim();
    const date = taskCard.getAttribute("data-date");

    const task = allTasks.find(t => t.desc === desc && t.level === level && t.date === date);
    if (!task) return;

    if (e.target.checked) {
      task.completed = true;
      taskText.classList.add("line-through");
      document.getElementById("completed-list").appendChild(taskCard);
    } else {
      task.completed = false;
      taskText.classList.remove("line-through");
      document.getElementById("task-list").appendChild(taskCard);
    }

    saveTasksToStorage();
    updateOverviewCounts();
  }
});

// Event listener untuk delete button (hapus dari DOM + array + simpan)
document.addEventListener("click", function (e) {
  if (e.target.closest(".delete-btnnn")) {
    const taskCard = e.target.closest(".complete-lists");

    const desc = taskCard.querySelector(".task-text").textContent;
    const level = taskCard.querySelector("span").textContent.trim();
    const date = taskCard.getAttribute("data-date");

    // hapus dari array allTasks
    const idx = allTasks.findIndex(t => t.desc === desc && t.level === level && t.date === date);
    if (idx > -1) {
      allTasks.splice(idx, 1);
      saveTasksToStorage();
      updateOverviewCounts();
    }

    // hapus dari DOM
    taskCard.remove();
  }
});

// Delete all completed tasks
document.getElementById("delete-all-completed").addEventListener("click", function() {
  const completedTasks = document.querySelectorAll("#completed-list > div");
  if (completedTasks.length === 0) {
    alert("Tidak ada task selesai yang bisa dihapus.");
    return;
  }

  if (confirm("Apakah kamu yakin ingin menghapus semua task selesai?")) {
    completedTasks.forEach(task => {
      const desc = task.querySelector(".task-text").textContent;
      const level = task.querySelector("span").textContent.trim();
      const date = task.getAttribute("data-date");

      const idx = allTasks.findIndex(t => t.desc === desc && t.level === level && t.date === date);
      if (idx > -1) allTasks.splice(idx, 1);

      task.remove();
    });
    saveTasksToStorage();
    updateOverviewCounts();
  }
});

// overview
function updateOverviewCounts() {
  let overdueCount = 0;
  let highCount = 0;
  let mediumCount = 0;
  let lowCount = 0;

  const now = new Date();
  now.setHours(0, 0, 0, 0); // reset jam ke awal hari

  allTasks.forEach(task => {
    if (task.completed) return; // skip task yang sudah selesai

    const dueDate = new Date(task.date);
    dueDate.setHours(0, 0, 0, 0);

    if (dueDate < now) {
      // Kalau overdue, cuma tambah overdueCount saja
      overdueCount++;
    } else {
      // Kalau belum overdue, baru hitung berdasarkan level
      if (task.level === "High") highCount++;
      else if (task.level === "Medium") mediumCount++;
      else if (task.level === "Low") lowCount++;
    }
  });

  document.getElementById("overdue-count").textContent = overdueCount;
  document.getElementById("high-count").textContent = highCount;
  document.getElementById("medium-count").textContent = mediumCount;
  document.getElementById("low-count").textContent = lowCount;
}
