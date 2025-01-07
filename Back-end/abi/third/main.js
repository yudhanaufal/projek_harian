// function
// // // PENGIRIMAN PAN PENANGKAPAN DATA
// // // ARGUMENT

// // // function addname() {
// // //   return "abi";
// // // }

// // // alert(addname());

// // // function addname(fullname) {
// // //   return fullname;
// // // }

// // // alert(addname("abi"));

// // // function addName(fullname, lastname) {
// // //   console.log(fullname, lastname);
// // // }

// // // addName("abi", "mumun");

// // // function addName(fullname, lastname) {
// // //   console.log("NAMA ", fullname, lastname);
// // //   console.log("NAMA CALON", lastname);
// // // }

// // // addName("abi", "mumun");

// // // function addName() {
// // //   console.log(arguments);
// // // }

// // // addName("abi", "mumun");

// // // function addName() {
// // //   for (let i = 0; i < arguments.length; i++) {
// // //     console.log("nama nya: ", arguments[i]);
// // //   }
// // // }

// // // addName("abi", "mumun", "AB");

// // // const fullname = function addName(firstname, lastname) {
// // //   console.log(firstname, lastname);
// // // };

// // // fullname("abi", "mumun");

// // // function addName(firstname, lastname) {
// // //   console.log(firstname, lastname);
// // // }

// // // const fullname = new Function(
// // //   "firstname",
// // //   "lastname",
// // //   "console.log(firstname, lastname)"
// // // );

// // // fullname("abi", "mumun");

// // // function addName(firstname, lastname) {
// // //   console.log(firstname, lastname);
// // // }

// // // const sum = new Function("x", "y", "console.log(x+y)");

// // // sum("1", "3");

// // // hero function
// // // function addName(firstname, lastname) {
// // //   console.log(firstname, lastname);
// // // }

// // // // cara 1
// // // const sum1 = new Function("x", "y", "console.log(x+y)");

// // // // cara 2
// // // function sum2(x, y) {
// // //   console.log(x + y);
// // // }

// // // // cara 3
// // // const sum3 = (x, y) => {
// // //   console.log(x + y);
// // // };

// // // sum1(3, 5);
// // // sum2(3, 5);
// // // sum3(3, 5);

// // //  hoisthing (variabel dapat dieksekusi sebelum di deklaraskan)

// // var data = 1;
// // console.log(data);

// // function addName(firstname, lastname) {
// //   console.log(firstname, lastname);
// // }

// // // cara 1
// // const sum1 = new Function("x", "y", "console.log(x+y)");

// // // // cara 2
// // // function sum2(x, y) {
// // //   console.log(x + y);
// // // }

// // // cara 2
// // function sum2(x, y) {
// //   if (x + y == 8) console.log("woww benar");
// // }

// // // // cara 3
// // // const sum3 = (x, y) => {
// // //   console.log(x + y);
// // // };

// // // cara 3 arrow function
// // const sum3 = (x, y) => {
// //   console.log(x + y);
// // };

// // function randomize() {
// //   const randomNumber = ~~(Math.random() * 1000);
// //   if (randomNumber > 200) {
// //     console.log("woww lebih dari 200", randomNumber);
// //   } else {
// //     console.log(randomNumber);
// //   }
// // }

// // randomize();

// // sum1(3, 5);
// // sum2(3, 5);
// // sum3(3, 5);

// MEMBUAT KALKULATOR

let currentCalculation = ""; // Menyimpan bentuk yang dipilih

// Menampilkan input untuk lingkaran
function showInputLingkaran() {
  currentCalculation = "lingkaran";
  const inputArea = document.getElementById("inputArea");
  inputArea.style.display = "block"; // Tampilkan area input
  document.getElementById("dynamicInputs").innerHTML = `
    <label for="jariJari">Masukkan Jari-jari:</label>
    <input type="number" id="jariJari" />
  `;
}

// Menampilkan input untuk segitiga
function showInputSegitiga() {
  currentCalculation = "segitiga";
  const inputArea = document.getElementById("inputArea");
  inputArea.style.display = "block";
  document.getElementById("dynamicInputs").innerHTML = `
    <label for="alas">Masukkan Alas:</label>
    <input type="number" id="alas" />
    <label for="tinggi">Masukkan Tinggi:</label>
    <input type="number" id="tinggi" />
  `;
}

// Menampilkan input untuk jajar genjang
function showInputJajarGenjang() {
  currentCalculation = "jajarGenjang";
  const inputArea = document.getElementById("inputArea");
  inputArea.style.display = "block";
  document.getElementById("dynamicInputs").innerHTML = `
    <label for="alas">Masukkan Alas:</label>
    <input type="number" id="alas" />
    <label for="tinggi">Masukkan Tinggi:</label>
    <input type="number" id="tinggi" />
  `;
}

// Menampilkan input untuk persegi panjang
function showInputPersegiPanjang() {
  currentCalculation = "persegiPanjang";
  const inputArea = document.getElementById("inputArea");
  inputArea.style.display = "block";
  document.getElementById("dynamicInputs").innerHTML = `
    <label for="panjang">Masukkan Panjang:</label>
    <input type="number" id="panjang" />
    <label for="lebar">Masukkan Lebar:</label>
    <input type="number" id="lebar" />
  `;
}

// Menghitung hasil berdasarkan input
function hitung() {
  let hasil;
  if (currentCalculation === "lingkaran") {
    const r = parseFloat(document.getElementById("jariJari").value);
    if (isNaN(r) || r <= 0) {
      alert("Masukkan jari-jari yang valid!");
      return;
    }
    hasil = Math.PI * r * r; // Rumus π × r²
    document.getElementById(
      "hasil"
    ).innerText = `Luas Lingkaran: ${hasil.toFixed(2)}`;
  } else if (currentCalculation === "segitiga") {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
      alert("Masukkan alas dan tinggi yang valid!");
      return;
    }
    hasil = 0.5 * alas * tinggi; // Rumus ½ × alas × tinggi
    document.getElementById(
      "hasil"
    ).innerText = `Luas Segitiga: ${hasil.toFixed(2)}`;
  } else if (currentCalculation === "jajarGenjang") {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
      alert("Masukkan alas dan tinggi yang valid!");
      return;
    }
    hasil = alas * tinggi; // Rumus alas × tinggi
    document.getElementById(
      "hasil"
    ).innerText = `Luas Jajar Genjang: ${hasil.toFixed(2)}`;
  } else if (currentCalculation === "persegiPanjang") {
    const panjang = parseFloat(document.getElementById("panjang").value);
    const lebar = parseFloat(document.getElementById("lebar").value);
    if (isNaN(panjang) || isNaN(lebar) || panjang <= 0 || lebar <= 0) {
      alert("Masukkan panjang dan lebar yang valid!");
      return;
    }
    hasil = panjang * lebar; // Rumus panjang × lebar
    document.getElementById(
      "hasil"
    ).innerText = `Luas Persegi Panjang: ${hasil.toFixed(2)}`;
  } else {
    alert("Pilih bentuk terlebih dahulu!");
  }
}

function gajian() {
  // Ambil nilai input
  const nama = document.getElementById("nama").value.trim(); // Mengambil nama
  const harian = parseFloat(document.getElementById("harian").value); // Mengambil gaji per hari
  const hari = parseFloat(document.getElementById("hari").value); // Mengambil jumlah hari kerja

  // Validasi input
  if (!nama) {
    alert("Nama tidak boleh kosong!");
    return;
  }
  if (isNaN(harian) || harian <= 0) {
    alert("Masukkan gaji per hari yang valid!");
    return;
  }
  if (isNaN(hari) || hari <= 0) {
    alert("Masukkan jumlah hari kerja yang valid!");
    return;
  }

  // Hitung total gaji
  const totalGaji = harian * hari;

  // Tampilkan hasil
  document.getElementById("total").innerHTML = `
      <p>Nama: ${nama}</p>
      <p>Total gaji selama ${hari} hari adalah: Rp ${totalGaji.toLocaleString()}</p>
    `;
}
