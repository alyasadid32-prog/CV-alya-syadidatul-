
$(document).ready(function () {

    // Animasi hide dan show menggunakan jQuery
    $("#profileButton").click(function () {

        $("#profil .profile-text").fadeToggle(800);

    });

    // Animasi fade saat halaman dibuka
    $(".cv-container").hide().fadeIn(1200);

    // Efek hover pada bagian CV
    $(".cv-section h4").hover(
        function () {
            $(this).css("color", "#a35e80");
        },
        function () {
            $(this).css("color", "#713b59");
        }
        
// =====================================
// DATABASE RIWAYAT PENDIDIKAN SQLITE
// =====================================

let db;

async function initDatabase() {
    try {
        const SQL = await initSqlJs({
            locateFile: file => `./${file}`
        });

        const response = await fetch("./riwayat.db");

        if (!response.ok) {
            throw new Error("File riwayat.db tidak ditemukan");
        }

        const buffer = await response.arrayBuffer();
        db = new SQL.Database(new Uint8Array(buffer));

        tampilkanRiwayat();

        console.log("Database berhasil terhubung!");
    } catch (error) {
        console.error("Database gagal:", error);
    }
}

// Menampilkan data pendidikan
function tampilkanRiwayat() {
    const hasil = db.exec(
        "SELECT * FROM riwayat ORDER BY tahun_masuk ASC"
    );

    if (hasil.length === 0) return;

    const data = hasil[0];
    const tbody = document.querySelector("#tabel-riwayat tbody");

    if (!tbody) {
        console.error("Tabel #tabel-riwayat tidak ditemukan");
        return;
    }

    tbody.innerHTML = "";

    data.values.forEach(row => {
        const tr = document.createElement("tr");

        row.forEach(nilai => {
            const td = document.createElement("td");
            td.textContent = nilai ?? "-";
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
}

// Jalankan database
document.addEventListener("DOMContentLoaded", initDatabase);

    );

});
