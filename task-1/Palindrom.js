function palindom(text) {
  let a = new Array();
  for (x = text.length - 1; x >= 0; x--) {
    a.push(text[x]);
  }
  if (a.join("") == text) {
    return console.log(true);
  }
  return console.log(false);
}
palindom("malam");
