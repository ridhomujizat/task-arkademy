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
        reject(new Error("Tidak ada gilm"));
      }
    }, 500);
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
