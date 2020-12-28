const getmonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "januari",
      "Febuari",
      "March",
      "April",
      "May",
      "Juni",
      "Juli",
      "August",
      "September",
      "October",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found", []));
    }
  }, 1000);
};

getmonth(function (error, data) {
  if (error == null) {
    let newMonth = data.map((item) => item);
    console.log(newMonth);
  } else {
    console.log(error);
  }
});
