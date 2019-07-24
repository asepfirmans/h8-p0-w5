function kaliTerusRekursif(angka) {
  var huruf = angka.toString()
  var count = 1
  for (var i = 0; i<huruf.length; i++) {
    var angka = Number(huruf[i])
    count = count * angka
  }
  if (count > 10) {
    return kaliTerusRekursif(count)
  } else {
    return count
  }
}
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6