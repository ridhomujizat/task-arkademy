function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAwal > nilaiAkhir) {
    return console.log("Nilai akhir harus lebih besar dari nilai awal");
  }

  if (dataArray.length < 5) {
    return console.log("Jumlah angka dalam dataArray harus lebih dari 5");
  }

  let result = dataArray.filter(
    (item) => nilaiAwal < item && item < nilaiAkhir
  );

  return console.log(result.sort((min, max) => min - max));
}

SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
SeleksiNilai(4, 17, [2, 25, 4]);
