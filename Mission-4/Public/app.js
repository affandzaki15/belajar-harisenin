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

