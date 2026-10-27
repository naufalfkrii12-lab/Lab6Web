# Lab6Web — Praktikum 6: JavaScript DOM dan Event Handling

**Nama** : Naufal Fikri
**NIM** : 312510350
**Mata Kuliah** : Pemrograman Web (Pertemuan 7)

## Tujuan
1. Memahami DOM sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
2. Memilih elemen dengan id, class, dan selector CSS.
3. Mengubah teks, atribut, kelas CSS, dan gaya elemen melalui JavaScript.
4. Menangani event pengguna dengan `addEventListener()`.
5. Membuat validasi form dan menampilkan pesan sesuai kondisi input.
6. Membuat halaman interaktif dengan minimal tiga fungsi yang berjalan benar.

## Struktur File
```
Lab6Web/
├── README.md
├── lab6_dom_event/            # Latihan 1–6 + eksperimen mandiri
│   ├── index.html
│   ├── style.css
│   └── script.js
├── mini_project_workshop/     # Mini project: form pendaftaran workshop
│   ├── index.html
│   ├── style.css
│   └── script.js
└── screenshots/               # Letakkan screenshot hasil di sini
```

## Cara Menjalankan
1. Ekstrak file ZIP.
2. Buka `lab6_dom_event/index.html` atau `mini_project_workshop/index.html` di browser modern (Chrome/Firefox/Edge).
3. Buka Developer Tools (F12) > Console untuk memeriksa error.

## Langkah Kerja
| Latihan | Isi | Konsep |
|---|---|---|
| 1 | Mengubah judul dan paragraf | `getElementById`, `textContent` |
| 2 | Tombol menampilkan waktu klik | `addEventListener("click")`, `Date` |
| 3 | Ubah gaya paragraf | `classList.toggle` |
| 4 | Penghitung karakter | event `input` |
| 5 | Validasi form (nama, email, usia) | `submit`, `preventDefault`, regex |
| 6 | To-do list | `createElement`, `append`, `classList` |
| Mini project | Form workshop: validasi nama/email/sesi, ringkasan langsung, pesan error/sukses, tombol reset | `input`, `change`, `click`, `submit` |

### Eksperimen Mandiri
1. Tombol **Hapus** per item pada To-do List (Latihan 6).
2. Validasi nama minimal 3 karakter (Latihan 5 dan mini project).
3. Event `change` pada dropdown sesi workshop menampilkan sesi terpilih di ringkasan.
4. Tombol sembunyikan/tampilkan paragraf dengan class `.hidden`.
5. Script tanpa `defer` di `<head>`: JavaScript berjalan sebelum HTML selesai di-parse, sehingga `getElementById()` mengembalikan `null` dan muncul error `Cannot set properties of null`. Atribut `defer` menunda eksekusi hingga dokumen selesai diparse.

### Skenario Pengujian Form
- Semua input kosong → pesan "Nama wajib diisi."
- Nama kosong / kurang dari 3 karakter → pesan nama.
- Email tidak valid (mis. `abc@`) → pesan email.
- Usia di bawah 17 → pesan usia.
- Semua input valid → pesan sukses.

## Screenshot
Tambahkan screenshot ke folder `screenshots/` (kondisi valid dan tidak valid) lalu tautkan di sini:

- `screenshots/latihan1.png` ... `screenshots/latihan6.png`
- `screenshots/form_tidak_valid.png`, `screenshots/form_valid.png`
- `screenshots/mini_project.png`

## Jawaban Pertanyaan Evaluasi (ringkas)
1. **DOM**: representasi dokumen HTML berbentuk pohon objek yang dapat dibaca/diubah JavaScript.
2. `getElementById()` memilih satu elemen berdasarkan id; `querySelector()` elemen pertama yang cocok dengan selector CSS; `querySelectorAll()` semua elemen yang cocok (NodeList).
3. `addEventListener()` menghubungkan event dengan fungsi; contoh event: `click`, `input`, `submit`.
4. `preventDefault()` mencegah halaman dimuat ulang sehingga validasi dapat dilakukan dulu.
5. `textContent` menampilkan teks biasa (aman); `innerHTML` mengurai markup HTML sehingga berisiko XSS bila memuat input pengguna.
6. `classList.toggle()` menambah kelas jika belum ada dan menghapusnya jika sudah ada, sehingga tampilan berganti dengan satu perintah.
7. Skenario: input kosong, email tidak valid, usia di luar rentang, semua input valid.
