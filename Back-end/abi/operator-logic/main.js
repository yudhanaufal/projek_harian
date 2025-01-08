/* 
    OPERATOR

    5 < 6 // evaluates to true
    5 > 6 // evaluates to false
    5 >= 6 // evaluates to false
    5 <= 6 // evaluates to true

    5 === 6 // evaluates to false
    5 !== 6 // evaluates to true

    5 == 6 // evaluates to false
    5 == '5' // evaluates to true

    5 != 6 // evaluates to true
    5 != '5' // evaluates to false


    OPERATOR LOGIC
    &&(Dan)
    ||(atau)
    !(bukan)
*/

// STUDY KASUS
// Soal 1: Penilaian Kelulusan
// Seorang siswa dinyatakan lulus jika:

// Nilai ujian teori minimal 70.
// Nilai ujian praktik minimal 80.
// Tidak ada kasus pelanggaran disiplin.
// Pertanyaan:
// Buat variabel isLulus yang memeriksa apakah siswa dinyatakan lulus.

/// membuat nilai dan kondisi siswa
const nilaiTeori = 70;
const nilaiPraktik = 80;
const pelanggaranDisiplin = false;
/// contoh kasus siswa
const nilaiTeoriSiswa = 60;
const nilaiPraktikSiswa = 90;
const pelanggaranSiswa = false;
// membuat logika kelulusan
const isLulus =
  nilaiTeori >= nilaiTeoriSiswa &&
  nilaiPraktik >= nilaiPraktikSiswa &&
  !pelanggaranSiswa;
console.log(`Siswa dinyatakan lulus : ${isLulus}`);

// Soal 2: Promosi Produk
// Sebuah produk mendapat label promo jika:

// Produk tersebut tersedia dalam stok.
// Produk memiliki rating minimal 4 bintang atau sedang ada diskon.
// Pertanyaan:
// Buat variabel isPromo yang memeriksa apakah produk tersebut mendapat label promo.
const stok = true;
const rating = 4;
// misal pada produk sabun
const stokSabun = true;
const ratingSabun = 4;
const isPromo = stok && ratingSabun !== rating;

console.log(`produk sabun memiliki promo: ${isPromo}`);

// Soal 3: Kelayakan Bekerja
// Seorang kandidat memenuhi syarat bekerja jika:

// Usia antara 20 hingga 35 tahun.
// Memiliki pengalaman kerja minimal 2 tahun.
// Atau memiliki gelar pendidikan terkait.
// Pertanyaan:
// Buat variabel isQualified untuk memeriksa apakah kandidat layak untuk bekerja.

// DATA KANDIDAT
const pengalaman = 2; // Dalam tahun
const usia = 50;
const pendidikan = "joki"; // Contoh gelar pendidikan

// LOGIKA
const isQualified =
  usia >= 20 && usia <= 35 && (pengalaman >= 2 || pendidikan === "joki");

if (isQualified) {
  console.log("Kandidat ini lolos");
} else {
  console.log("Jelas ra lolos");
}

/* 
    TERNARY OPERATOR

    Akar kata latin Ternary berarti "3", dan merupakan satu-satunya operator JavaScript yang menggunakan tiga operan.

    - Suatu kondisi diikuti oleh tanda tanya (?)
    - Ekspresi yang akan dieksekusi jika kondisinya benar diikuti oleh titik dua ( :)
    - Ekspresi yang akan dieksekusi jika kondisinya salah.
    - Operasi terner sangat bagus untuk kondisional baris tunggal yang kecil 
    
    const bobbyAge = 17
    const legalAge = 18
    
    const message = bobbyAge >= legalAge ? 'Bobby is an adult' : 'Bobby is not an adult'
    
    console.log(message)


*/

// STUDY KASUS //

/* Sistem Pemesanan Tiket Bioskop
Anda sedang membuat sistem pemesanan tiket bioskop online. Harga tiket bervariasi berdasarkan usia pelanggan:

Jika usia pelanggan di atas atau sama dengan 18 tahun, mereka dikenakan harga tiket dewasa (Rp50.000).
Jika usia pelanggan di bawah 18 tahun, mereka dikenakan harga tiket anak-anak (Rp30.000).
Untuk menentukan harga tiket, Anda ingin menggunakan operator ternary agar kode lebih singkat dan mudah dibaca.

*/

const umur = 20;
const hargaTiketAnak = 30000;
const hargaTiketDewasa = 50000;

const tiketPrice = umur >= 18 ? hargaTiketDewasa : hargaTiketAnak;
const message =
  umur >= 18 ? "anda dikenakan harga Dewasa" : "anda dikenakan harga Anak";

console.log(`harga tiket anda: ${tiketPrice}`);
console.log(message);

