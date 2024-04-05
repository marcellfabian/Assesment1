// Array buku
let buku = [
    {"nama": "sherlock", "jumlah": 2},
    {"nama": "lupin", "jumlah": 2},
    {"nama": "aladin", "jumlah": 2}
];

// Fungsi untuk menangani form submit
document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Ambil nilai dari textfield dan select option
    let jumlah = parseInt(document.getElementById("jumlah").value);
    let bukuTerpilih = document.getElementById("buku").value;

    // Cek apakah textfield kosong
    if (isNaN(jumlah) || jumlah <= 0) {
        alert("Jumlah tidak valid.");
        return;
    }

    // Cari buku yang dipilih dalam array
    let bukuDitemukan = buku.find(item => item.nama === bukuTerpilih);

    // Jika buku tidak ditemukan
    if (!bukuDitemukan) {
        alert("Buku tidak ditemukan.");
        return;
    }

    // Jika jumlah buku yang diminta lebih banyak dari yang tersedia
    if (jumlah > bukuDitemukan.jumlah) {
        alert("Jumlah buku tidak tersedia.");
        return;
    }

    // Jika jumlah buku tersedia
    alert("Silahkan ambil buku Anda.");
});