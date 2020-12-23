const printSegitiga = 6;

let segitiga = "";
for (let i = printSegitiga + 1; i > 0; i--) {
  for (let j = 1; j < i; j++) {
    segitiga += j;
  }
  segitiga += "\n";
}
console.log(segitiga);
