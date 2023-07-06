let mtk = 80;
let bahasaIndonesia = 90;
let bahasaInggris = 89;
let ipa = 69;

if (mtk && bahasaIndonesia && bahasaInggris && ipa) {
  nilaiRata = Math.floor((mtk + bahasaIndonesia + bahasaInggris + ipa) / 4);
  if (nilaiRata >= 90 && nilaiRata <= 100) {
    nilaiAkhir = "A";
  } else if (nilaiRata >= 80 && nilaiRata < 90) {
    nilaiAkhir = "B";
  } else if (nilaiRata >= 70 && nilaiRata < 80) {
    nilaiAkhir = "C";
  } else if (nilaiRata >= 60 && nilaiRata < 70) {
    nilaiAkhir = "D";
  } else {
    nilaiAkhir = "E";
  }
  console.log(`Rata-rata = ${nilaiRata}
    Grade = ${nilaiAkhir}`);
} else {
  console.log("nilai mata pelajaran harus diisi!");
}

// function nilaiUjianSiswa(...param) {
//   let isUndefined = param.filter((a) => a == undefined).length > 0;
//   if (isUndefined) {
//     console.log("nilai mata pelajaran harus diisi!");
//     return;
//   }

//   nilaiRata = Math.floor(param.reduce((a, b) => a + b) / param.length);
//   if (nilaiRata >= 90 && nilaiRata <= 100) {
//     nilaiAkhir = "A";
//   } else if (nilaiRata >= 80 && nilaiRata < 90) {
//     nilaiAkhir = "B";
//   } else if (nilaiRata >= 70 && nilaiRata < 80) {
//     nilaiAkhir = "C";
//   } else if (nilaiRata >= 60 && nilaiRata < 70) {
//     nilaiAkhir = "D";
//   } else {
//     nilaiAkhir = "E";
//   }
//   console.log(`Rata-rata = ${nilaiRata}
//     Grade = ${nilaiAkhir}`);
// }
// nilaiUjianSiswa(mtk, bahasaIndonesia, bahasaInggris, ipa);
