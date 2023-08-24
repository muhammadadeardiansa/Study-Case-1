// Membuat objek buku
function Buku(judul, penulis, thn_terbit, stok) {
  this.judul = judul;
  this.penulis = penulis;
  this.thn_terbit = thn_terbit;
  this.stok = stok;
}

// Menambahkan metode ke objek buku
Buku.prototype.getJudul = function () {
  return "Judul Buku: " + this.judul;
};

Buku.prototype.getPenulis = function () {
  return "Penulis Buku: " + this.penulis;
};

Buku.prototype.getTahunTerbit = function () {
  return "Tahun Terbit Buku: " + this.thn_terbit;
};

Buku.prototype.getStok = function () {
  return "Stok Buku: " + this.stok;
};

// Membuat objek untuk memeriksa stok
function CekStok(buku) {
  this.buku = buku;
}

CekStok.prototype.getStokBuku = function () {
  return "Stok Buku " + this.buku.judul + ": " + this.buku.stok + " buah";
};

// Menggunakan prompt untuk mengisi informasi buku
var judul = prompt("Masukkan Judul Buku");
var penulis = prompt("Masukkan Penulis Buku");
var thn_terbit = prompt("Masukkan Tahun Terbit Buku");
var stok = prompt("Masukkan Stok Buku");

// Membuat objek buku baru
var bukuBaru = new Buku(judul, penulis, thn_terbit, stok);

// Membuat objek cek stok
var stokBuku = new CekStok(bukuBaru);

// Menampilkan informasi buku
alert(bukuBaru.getJudul());
alert(bukuBaru.getPenulis());
alert(bukuBaru.getTahunTerbit());
alert(bukuBaru.getStok());

// Menampilkan stok buku
alert(stokBuku.getStokBuku());
