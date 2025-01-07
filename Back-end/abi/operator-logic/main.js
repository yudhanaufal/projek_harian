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

