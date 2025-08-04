function updateWaktu() {
  const hariList = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const tanggal = new Date();

  const hari = hariList[tanggal.getDay()];
  const tanggalNum = tanggal.getDate();
  const bulan = tanggal.toLocaleString('id-ID', { month: 'long' });
  const tahun = tanggal.getFullYear();

  const jam = tanggal.getHours().toString().padStart(2, '0');
  const menit = tanggal.getMinutes().toString().padStart(2, '0');
  const detik = tanggal.getSeconds().toString().padStart(2, '0');

  document.getElementById('tanggal').textContent = `${hari}, ${tanggalNum} ${bulan} ${tahun}`;
  document.getElementById('jam').textContent = `${jam}:${menit}:${detik}`;
}

setInterval(updateWaktu, 1000);
updateWaktu();
