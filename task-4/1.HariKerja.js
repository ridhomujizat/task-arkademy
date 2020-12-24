const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

cekHariKerja("senin")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    throw error;
  });

/**
 * pada code di atas method then akan menangkan nilai resolve
 * sedangkan catch akan menagkap nilai reject
 */

async function getData(hari) {
  try {
    const result = await cekHariKerja(hari);
    console.log(result);
  } catch (error) {
    throw error;
  }
}

getData("senin");

/**
 * pada code di atas menjalankan asynchronous dengan synchronous
 * printah console.log(result) akan di eksekusi jika variable result telah mendapat nilai dari fungsi cekHariKerja()
 * yang ditunggu (await)
 *
 */
