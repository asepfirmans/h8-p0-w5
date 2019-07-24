function sorting(arrNumber) {
    var length  = arrNumber.length;
    var status = true;
    var tmp;

    for (var i = 0; i < length; i++) {
        if (arrNumber[i] > arrNumber[i+1]) {
            tmp = arrNumber[i];
            arrNumber[i] = arrNumber[i+1];
            arrNumber[i+1] = tmp;
            status = false;
        }
    }

    if (status) {
        return arrNumber;
    } else {
        return sorting(arrNumber);
    }
}
function getTotal(arrNumber) {
    var highest = Math.max.apply(null, arrNumber);
    var count = 0;
    if (arrNumber.length < 1) {
        return "''";
    }
    else {
        for (i = 0; i < arrNumber.length; i++) {
            if (arrNumber[i] == highest) {
                count++;
            }
        }
        return "angka paling besar adalah " + highest + " dan jumlah kemunculan sebanyak " + count + " kali";
    }
}
function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
