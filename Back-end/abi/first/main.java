// allert untuk poopup
// alert("halo")

// Console.log untuk berpindah halaman
// console.log("hallo");

// prompt untuk memunculkan poopup dan meminta menginput data
// prompt("masukan usia anda?");

// VARIABEL // untuk wadah menampung sesuatu

// var usia = 30; // bisa dirubah
// const x = 1  // tidak bisa diubah
// let y = 2  // bisa dirubah

// let usia = prompt("berapakah usiamu?");
// alert("usiamu adalah" + usia);

// TIPE DATA //
// let nama = "abi"; // tipenya string
// let usia = 30; // tipenya integer number
// let tinggiBadan = 162.3; // TIPE DOUBLE / FLOAT
// let beratBadan; // kosong

// beratBadan = 50;

// let pacar = null; // kosong

// memakai ifelse
// if (pacar == null) {
//   pacar = "belum punya";
// } else {
//   pacar = "sudah punya";
// }

// menggunakan switch
// let pacar = 1;

// switch (pacar) {
//   case 1:
//     pacar = "punya 1 aja";
//     break;
//   case 2:
//     pacar = "gila";
//     break;
// }

// alert(`nama saya ${nama} usia saya ${usia} tinggi badan saya ${tinggiBadan}
//     berat badan saya ${beratBadan} dan pacar saya ${pacar}`);

// OPERATOR + - * /
// let saldoAwal = 250000;
// let saldoTambahan = 50000;
// const saldoAkhir = saldoAwal + saldoTambahan;

// alert(
//   `saldo awal saya adalah ${saldoAwal} kemudian ditambah ${saldoTambahan}
//     maka saldo saya sekarang ${saldoAkhir}`
// );

////// ARRAY ///

// let namaGuru = ["yazid", "puter", "titi"];

// alert(namaGuru[0]); // panggil urutan 1 dimulai dari 0 dst

// namaGuru.push("ab", "pirta"); // push untuk menambahkan array
// alert(namaGuru);

// namaGuru.shift(); // shift untuk menghapus urutan 1
// namaGuru.pop();  // pop untuk menghapus urutan terakhir
// alert(namaGuru);

// let namaGuru = [];

// namaGuru[0] = "lala";
// namaGuru[1] = "lali";
// namaGuru[2] = "lalu";

// alert(namaGuru);

/// LOOP ///
// 3 statement
// - untuk inisialisasi variabel
// - perkondisiannya
// - yang dilakukan

// for (let i = 0; i <= 10; i = i + 1) {
//   console.log('halo');  // melooping halo sebanyak 11 kali
// }

// const nama = ["yana", "yini", "yunu"];
// console.log(nama.length); // mengetahui jumlah data array
// alert + array dengan for
// for (let i = 0; i < nama.length; i = i + 1) {
//   // i1 = 0
//   // i2 = 1
//   // i3 = 2
//   // i4 = 3

//   console.log(nama[i]);
// }

// loop dengan  WHILE
// let i = 0;
// while (i < 20) {
//   i++;
//   console.log("hallo");
// }

// // loop dengan do while
// do {
//   i++;
//   console.log("hallo bang");
// } while (i < 10);

// perbedaan while dengan do while
// while akan mengerjakan kodisinya terlebih dahulu dan
// tidak akan mengeksekusi loop kecuali kondisinya cocok
// do while mau kondisi apapun dia akan mengeksekusi terlebih dahulu
// 1x lalu akan berpindah ke kondisinya

// let saldoAwal = Number(prompt("masukkan saldo anda?"));
// let saldoTambah = Number(prompt("masukkan saldo tambahan anda"));
// const saldoAkhir = saldoAwal + saldoTambah;
// alert(`saldo akhir kamu adalah ${saldoAkhir}`);



let date = new Date().getDay();
let hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
let harike = hari[date];
console.log(`hari ini hari ${harike}`);

////// ARRAY ///

// let namaGuru = ["yazid", "puter", "titi"];

// alert(namaGuru[0]); // panggil urutan 1 dimulai dari 0 dst

// namaGuru.push("ab", "pirta"); // push untuk menambahkan array
// alert(namaGuru);

// namaGuru.shift(); // shift untuk menghapus urutan 1
// namaGuru.pop();  // pop untuk menghapus urutan terakhir
// alert(namaGuru);

// let namaGuru = [];

// namaGuru[0] = "lala";
// namaGuru[1] = "lali";
// namaGuru[2] = "lalu";

// alert(namaGuru);
