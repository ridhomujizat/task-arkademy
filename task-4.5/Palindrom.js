function palindom(text) {
  let arrayText = new Array();

  let lowcase = text.toLowerCase();

  for (index = lowcase.length - 1; index >= 0; index--) {
    arrayText.push(lowcase[index]);
  }
  if (arrayText.join("") == lowcase) {
    return console.log(true);
  }
  return console.log(false);
}
palindom("Malam");
