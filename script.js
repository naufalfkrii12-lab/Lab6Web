// Dibungkus DOMContentLoaded agar aman walaupun script dimuat sebelum HTML selesai.
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const form = document.getElementById("formWorkshop");
  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const sesi = document.getElementById("sesi");
  const hitungNama = document.getElementById("hitungNama");
  const pesanStatus = document.getElementById("pesanStatus");
  const tombolReset = document.getElementById("tombolReset");

  const errNama = document.getElementById("errNama");
  const errEmail = document.getElementById("errEmail");
  const errSesi = document.getElementById("errSesi");

  const rNama = document.getElementById("rNama");
  const rEmail = document.getElementById("rEmail");
  const rSesi = document.getElementById("rSesi");

  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(input, elemenError, teks) {
    elemenError.textContent = teks;
    input.classList.toggle("invalid", teks !== "");
    return teks === "";
  }

  function cekNama() {
    const v = nama.value.trim();
    if (v === "") return setError(nama, errNama, "Nama wajib diisi.");
    if (v.length < 3) return setError(nama, errNama, "Nama minimal 3 karakter.");
    return setError(nama, errNama, "");
  }
  function cekEmail() {
    const v = email.value.trim();
    if (v === "") return setError(email, errEmail, "Email wajib diisi.");
    if (!polaEmail.test(v)) return setError(email, errEmail, "Format email tidak valid.");
    return setError(email, errEmail, "");
  }
  function cekSesi() {
    if (sesi.value === "") return setError(sesi, errSesi, "Pilih salah satu sesi workshop.");
    return setError(sesi, errSesi, "");
  }

  function perbaruiRingkasan() {
    rNama.textContent = nama.value.trim() || "-";
    rEmail.textContent = email.value.trim() || "-";
    rSesi.textContent = sesi.value || "-";
  }

  /* Fungsi interaktif 1: penghitung karakter + ringkasan langsung (event input) */
  nama.addEventListener("input", function () {
    hitungNama.textContent = nama.value.length;
    perbaruiRingkasan();
  });
  email.addEventListener("input", perbaruiRingkasan);

  /* Fungsi interaktif 2: event change pada dropdown sesi */
  sesi.addEventListener("change", function () {
    perbaruiRingkasan();
    cekSesi();
  });

  /* Validasi saat meninggalkan kolom */
  nama.addEventListener("blur", cekNama);
  email.addEventListener("blur", cekEmail);

  /* Fungsi interaktif 3: validasi submit dengan pesan error/sukses */
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const valid = [cekNama(), cekEmail(), cekSesi()].every(Boolean);

    if (!valid) {
      pesanStatus.className = "gagal";
      pesanStatus.textContent = "Pendaftaran gagal. Periksa kembali isian Anda.";
      return;
    }
    pesanStatus.className = "sukses";
    pesanStatus.textContent =
      "Terima kasih, " + nama.value.trim() + "! Anda terdaftar pada sesi: " + sesi.value + ".";
    /* ringkasan tetap menampilkan data yang didaftarkan */
    perbaruiRingkasan();
    form.reset();
    hitungNama.textContent = "0";
  });

  /* Fungsi interaktif 4: tombol reset (event click) */
  tombolReset.addEventListener("click", function () {
    form.reset();
    hitungNama.textContent = "0";
    [[nama, errNama], [email, errEmail], [sesi, errSesi]].forEach(function (p) {
      setError(p[0], p[1], "");
    });
    pesanStatus.className = "";
    pesanStatus.textContent = "";
    perbaruiRingkasan();
  });
});
