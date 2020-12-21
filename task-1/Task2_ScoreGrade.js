const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 109;

if (mtk && bahasaIndonesia && bahasaInggris && ipa) {
  let averageScore = (mtk + bahasaInggris + bahasaIndonesia + ipa) / 4;

  if (averageScore < 59) {
    console.log(`Rata-Rata = ${averageScore}`);
    console.log("Grade = E");
  } else if (averageScore < 69) {
    console.log(`Rata-Rata = ${averageScore}`);
    console.log("Grade = D");
  } else if (averageScore < 79) {
    console.log(`Rata-Rata = ${averageScore}`);
    console.log("Grade = C");
  } else if (averageScore < 89) {
    console.log(`Rata-Rata = ${averageScore}`);
    console.log("Grade = B");
  } else if (averageScore <= 100) {
    console.log(`Rata-Rata = ${averageScore}`);
    console.log("Grade = A");
  } else {
    console.log("Cek kembali nilai yang diinput");
  }
}
