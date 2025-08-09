function updateWaktu() {
  const tanggal = new Date();

  const hari = tanggal.toLocaleString('us-US', { weekday: 'long' });
  const tanggalNum = tanggal.getDate();
  const bulan = tanggal.toLocaleString('us-US', { month: 'long' });
  const tahun = tanggal.getFullYear();

  const jam = tanggal.getHours().toString().padStart(2, '0');
  const menit = tanggal.getMinutes().toString().padStart(2, '0');
  const detik = tanggal.getSeconds().toString().padStart(2, '0');

  document.getElementById('tanggal').textContent = `${hari}, ${tanggalNum} ${bulan} ${tahun}`;
  document.getElementById('jam').textContent = `${jam}:${menit}:${detik}`;
}

setInterval(updateWaktu, 1000);
updateWaktu();

// Open/Close Modal
function openModal() {
  document.getElementById('modal').classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeModal(){
  document.getElementById('modal').classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}
document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target.id === 'modal') {
    closeModal();
  }
});



// Ambil elemen penting
const addTaskForm = document.getElementById("add-task-form");
const taskInput = document.getElementById("task-input");
const levelSelect = document.getElementById("level-select");
const dateInput = document.getElementById("date-input");

const highTaskContainer = document.getElementById("high-task");
const mediumTaskContainer = document.getElementById("medium-task");
const lowTaskContainer = document.getElementById("low-task");

const highCount = document.getElementById("high-count");
const mediumCount = document.getElementById("medium-count");
const lowCount = document.getElementById("low-count");
const overdueCount = document.getElementById("overdue-count");

// Fungsi buka & tutup modal

// Fungsi buat elemen task
function createTaskElement(text, date, level) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("bg-white", "p-3", "rounded", "shadow", "flex", "justify-between", "items-center", "mb-2");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("mr-2");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            taskCard.classList.add("line-through", "opacity-50");
        } else {
            taskCard.classList.remove("line-through", "opacity-50");
        }
    });

    // Teks & tanggal
    const infoDiv = document.createElement("div");
    const taskText = document.createElement("p");
    taskText.textContent = text;
    const taskDate = document.createElement("small");
    taskDate.textContent = date;
    taskDate.classList.add("text-gray-500", "block");

    infoDiv.appendChild(taskText);
    infoDiv.appendChild(taskDate);

    // Tombol hapus
    const deleteBtn = document.createElement("button");

    deleteBtn.classList.add("ml-2");
    deleteBtn.addEventListener("click", () => {
        taskCard.remove();
        updateCounts();
    });

    taskCard.appendChild(checkbox);
    taskCard.appendChild(infoDiv);
    taskCard.appendChild(deleteBtn);

    return taskCard;
}

// Fungsi update counter
function updateCounts() {
    highCount.textContent = highTaskContainer.children.length;
    mediumCount.textContent = mediumTaskContainer.children.length;
    lowCount.textContent = lowTaskContainer.children.length;

    // Hitung overdue
    const today = new Date().toISOString().split("T")[0];
    let overdue = 0;
    document.querySelectorAll(".task-container small").forEach(dateEl => {
        if (dateEl.textContent < today) {
            overdue++;
        }
    });
    overdueCount.textContent = overdue;
}

// Event submit form
addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = taskInput.value.trim();
    const level = levelSelect.value;
    const date = dateInput.value;

    if (!text || !date) {
        alert("Tolong isi semua field!");
        return;
    }

    const taskElement = createTaskElement(text, date, level);

    if (level === "high") {
        highTaskContainer.appendChild(taskElement);
    } else if (level === "medium") {
        mediumTaskContainer.appendChild(taskElement);
    } else {
        lowTaskContainer.appendChild(taskElement);
    }

    updateCounts();
    closeModal();
    addTaskForm.reset();
});
