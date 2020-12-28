//exemple data
const dataArray = [7, 3, 5, 32, 11, 22, 75, 32, 64];

/**
 * 1.Built in filter()
 * membuat data baru dari data sebelumnya yang bernilai true dari kondisi yang sudah diterapkan
 */
const filter = dataArray.filter((item) => item > 11);
// console.log(filter);

/**
 * 2. Built in map()
 * membuat data baru dari hasil data yang diaplikasina
 */
const map = dataArray.map((item) => item * 5);
// console.log(map);

/**
 * 3. Built in forEach()
 * untuk menjalani fungsi sesuai banyak jumlah data
 */
dataArray.forEach((item) => {
  //   console.log(`number ${item}`);
});

/**
 * 4. Built in push()
 * menambahkan nilai di belakang elemen terakhir di array
 */
dataArray.push(100, 150);
// console.log(dataArray);

/**
 * 5. Built in pop()
 * menghapus nilai elemen paling terakhir dari sebuah array
 */
dataArray.pop();
// console.log(dataArray);

/**
 * 6. Built in unshift()
 * menambahkan nilai pada index ke-0 sehingga elemen-elemen sebelumnya bergeser
 */
dataArray.unshift(-1, 0);
// console.log(dataArray);

/**
 * 7. Built in slice()
 * mengambil irisan data dari star & end yang sudah ditetapkan
 */
const slice = dataArray.slice(0, 3);
// console.log(slice);

/**
 * 8. Built in splice()
 * bisa digunakan untuk menreplace data, menambahkan atau menghapus  pada bagian tertentu
 * splice([nilaiawal], [nilai yang dihapus], [nilai akhir], )
 */
dataArray.splice(3, 2, "data baru", "coba");
console.log(dataArray);
dataArray.splice(0, 2);
// console.log(dataArray);

/**
 * 9. Built in  join()
 * untuk mengetahu jumlah panjang dari data yang ada
 */
const join = dataArray.join(" + ");
// console.log(join);

/**
 * 10. Built in split
 * memecah data array menjadi sebuah array
 */
const kata = "berani mencoba hal baru";
const splice = kata.split(" ");
// console.log(splice);
