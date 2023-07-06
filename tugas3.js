const printSegitiga = "enam";
if (typeof printSegitiga == "string") {
  console.log("Data harus number");
}
for (let i = printSegitiga; i > 0; i--) {
  let hasil = "";
  for (let j = 1; j <= i; j++) {
    hasil += j;
  }
  console.log(hasil);
}
