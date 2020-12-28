function reverse(text) {
  let a = new Array();
  let textArray = text.split(" ");
  for (x = textArray.length - 1; x >= 0; x--) {
    a.push(textArray[x]);
  }
  console.log(a.join(" "));
}

reverse("Saya belajar Javascript");
