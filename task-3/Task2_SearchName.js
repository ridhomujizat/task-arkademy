const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Amanda",
  "ella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function SearchName(search, amount, callback) {
  callback(search, amount);
}

function ShowName(search, amount) {
  let result = name
    .filter((item) => -1 != item.toLowerCase().indexOf(search))
    .slice(0, amount);

  console.log(result);
}

SearchName("a", 10, ShowName);
