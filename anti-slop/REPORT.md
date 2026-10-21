# Pemeriksaan antislop

## Arah dan hasil

- Design Read: landing page satu layar untuk pemesan halaman ucapan personal, memakai bentuk kartu cetak, biru dari logo, dan satu contoh alamat yang berubah sesuai nama.
- Dials: ENERGY 2 / RHYTHM 2 / MOTION 1.
- Arah taste-skill: The page is the object, seed 1680048538. Bentuk kartu dipertahankan, sementara susunan multi-section dan kebutuhan foto tidak dipakai karena brief meminta satu layar tanpa scroll.
- Ide: alamat subdomain khusus menjadi alamat yang dicetak pada kartu contoh.
- Interaksi: nama yang diketik mengubah alamat dan sapaan contoh secara lokal.
- Kritik visual, putaran akhir: yang terlihat pertama adalah judul dan kartu; bentuk halaman adalah kartu lipat dengan area baca dan contoh. Skor desain 6.5, kegunaan 8.5, kreativitas 7.5, konten 7.5, total 7.4. Batas desain berasal dari tidak adanya empat foto nyata dan motion yang sengaja dibatasi. Keduanya tidak sesuai dengan batas satu layar dan aset yang diberikan.
- Sisa batas prototipe: kartu hanya contoh konten dan tidak membuat subdomain sungguhan.
- taste-skill lint: 0 FAIL, 1 WARN. Outfit dipertahankan karena bentuk huruf geometrisnya sejalan dengan logo. Inspector berbasis Chrome tidak dapat dijalankan karena Chrome, Edge, atau Chromium tidak tersedia di lingkungan CLI; QA dilakukan di browser aplikasi.

## Delivery Gate

### Hard Gate

- R-02 PASS: teks halaman tidak memakai em dash.
- R-03 PASS: lebar dan tinggi dokumen sama dengan viewport pada 320×640, 375×667, 667×375, 768×1024, 1024×768, dan 1440×900.
- R-17 PASS: tidak ada statistik.
- R-18 PASS: tidak ada testimoni.
- R-23 PASS: logo berasal dari pengguna; contoh nama memakai placeholder yang diberi label.
- R-24 PASS: tidak ada navigasi palsu.
- R-25 PASS: kontras minimum yang dihitung adalah 4.85:1 untuk putih di biru; teks lain yang diuji 4.88:1 atau lebih.
- R-26 PASS: kolom nama memperbarui contoh; tautan pemesanan berhasil membuka tataweb.id.
- R-27 PASS: halaman statis tidak memiliki data asinkron sehingga tidak memerlukan status loading atau error.
- R-28 PASS: tidak ada FAQ generik.
- R-32 PASS: Tab mencapai kolom nama lalu CTA dengan fokus terlihat.
- R-33 PASS: perilaku ditulis di dist/script.js, tanpa injeksi skrip eksternal.
- R-34 PASS: tidak ada toggle tema; desain memakai tema terang tunggal.
- R-35 PASS: halaman dijalankan di browser, kolom nama dan CTA diuji.
- R-36 PASS: tidak ada klaim keamanan, performa, pelanggan, atau kepatuhan.
- R-37 PASS: arah dan dials dinyatakan sebelum revisi.
- R-38 PASS: kartu dan subdomain ditandai sebagai contoh, tanpa identitas pelanggan fiktif.

### Purpose Gate

- R-01 PASS: tidak ada gradien atau glow buatan pada halaman; gradien di logo adalah aset merek asli.
- R-04 PASS: tidak ada ikon dekoratif generik.
- R-06 PASS: Outfit mengikuti bentuk logo; DM Sans digunakan untuk paragraf yang mudah dibaca.
- R-07 PASS: tidak ada grid latar.
- R-08 PASS: CTA tidak memakai panah dekoratif.
- R-09 PASS: tidak ada badge atau eyebrow.
- R-10 PASS: tidak ada glassmorphism.
- R-12 PASS: tidak ada bayangan pada elemen diam.
- R-13 PASS: tidak ada glow.
- R-14 PASS: tidak ada kartu fitur berulang.
- R-19 PASS: MOTION 1 hanya memakai transisi hover, press, dan fokus.
- R-22 PASS: visual utama adalah contoh halaman ucapan, terkait langsung dengan layanan.

### Liveliness

- Dials PASS: ENERGY 2 / RHYTHM 2 / MOTION 1 tertulis dan diterapkan.
- Konsistensi PASS: satu layar memuat area baca dan kartu contoh, tanpa section pengisi.
- Focal point PASS: judul utama di kiri, kartu contoh mendukungnya.
- Whitespace PASS: ruang kosong mengikuti proporsi kartu cetak.
- Accent PASS: biru merek berada pada panel contoh dan CTA.
- Motif PASS: alamat subdomain diulang pada input dan kartu.
- Design Read PASS: arah dinyatakan sebelum perubahan sumber.

### Craftsmanship

- C-1 PASS: warna, bentuk kartu, dan tipografi memiliki alasan yang tertulis.
- C-2 PASS: kedua kontrol berfungsi.
- C-3 PASS: hanya pengantar dan contoh yang dibutuhkan untuk satu layar.
- C-4 PASS: rentang ukuran layar dan keyboard diuji.
- C-5 PASS: tidak ada statistik atau testimoni buatan.
- R-05 PASS: tidak ada rangkaian section template.
- R-11 PASS: input, CTA, dan kartu tidak dibuat pill seragam.
- R-15 PASS: CTA menyebut destinasi tataweb.id.
- R-16 PASS: tidak ada jargon pemasaran generik.
- R-20 PASS: alamat subdomain sebagai kartu contoh memberi identitas khusus.
- R-21 PASS: tema terang dipilih untuk bentuk kartu cetak.
- R-29 PASS: palet terdiri dari kertas netral, tinta gelap, dan biru logo.
- R-30 PASS: tidak meniru shell atau komponen produk populer.
- R-31 PASS: keputusan utama dapat dijelaskan lewat konsep kartu dan alamat.
