// function antrian(nomerAntrian) {
//   console.log(`Sekarang antrian ke ${nomerAntrian}`);
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (nomerAntrian === 10) {
//         console.log("saya masuk ruangan");
//         reject(0);
//       } else {
//         console.log("saya masih menunggu");
//         resolve(nomerAntrian + 1);
//       }
//     }, 500);
//   });
// }

// function RunAntrian(nomorAntrian) {
//   antrian(nomorAntrian)
//     .then(function (nomorAntrainBaru) {
//       if (nomorAntrainBaru !== 0) {
//         RunAntrian(nomorAntrainBaru);
//       }
//     })
//     .catch((error) => {
//       throw error;
//     });
// }

// RunAntrian(7);

const dataFilm = [
  "Batmen",
  "Sepiderman",
  "Cinta Fitri",
  "Tuhan kenapa aku berbeda",
];

const cekFilm = (film) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let cek = dataFilm.find((item) => {
        return item === film;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Tidak ada film"));
      }
    }, 1000);
  });
};

dataFilm.forEach((item) =>
  cekFilm(item)
    .then((result) => {
      console.log(`saya menonton ${result}`);
    })
    .catch((error) => {
      throw error;
    })
);

async function getData(film) {
  try {
    const result = await cekFilm(film);
    console.log(`saya menonton ${result}`);
  } catch (error) {
    throw error;
  }
}

dataFilm.forEach((item) => getData(item));
