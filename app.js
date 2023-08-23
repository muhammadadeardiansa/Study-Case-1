//function tambah buku/insert dengan object
function tambahBuku(judul, penulis, thn_terbit, stok) {
  //properti
  this.judul = judul;
  this.penulis = penulis;
  this.thn_terbit = thn_terbit;
  this.stok = stok;

  this.judulBuku = function () {
    return alert("Judul Buku " + this.judul);
  };
  this.penulisBuku = function () {
    return alert("Penulis Buku " + this.penulis);
  };
  this.thnBuku = function () {
    return alert("Tahun Terbit Buku " + this.thn_terbit);
  };
  this.stokBuku = function () {
    return alert("Stok Buku " + this.stok);
  };
}

//Variable untuk menyimpan isi prompt
var buku = new tambahBuku(
  prompt("Masukan Judul Buku "),
  prompt("Masukan Penulis Buku "),
  prompt("Masukan Tahun Terbit Buku "),
  prompt("Masukan Stok Buku ")
);

//panggil function
buku.judulBuku();
buku.penulisBuku();
buku.thnBuku();
buku.stokBuku();
