const cekAndSplit = (number) => {
  return new Promise((resolve, reject) => {
    if (typeof number === "number") {
      let cek = number.toString().split("0");
      resolve(cek);
    } else {
      reject(new Error("Paramater is not an interger"));
    }
  });
};

const divideAndSort = async (number) => {
  let data = await cekAndSplit(number)
    .then((convertedData) => {
      return convertedData.map((item) => item.split(""));
    })
    .then((sortData) => {
      return sortData.map((item) =>
        item
          .sort((a, b) => {
            return a - b;
          })
          .join("")
      );
    })
    .then((joinendData) => {
      return joinendData.join("");
    })
    .catch((error) => {
      throw error;
    });

  let Number = parseInt(data);

  console.log(Number);
};

divideAndSort(5333503939);
