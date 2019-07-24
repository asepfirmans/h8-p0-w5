function changeVocals (str) {
  var newVocals = str.split("")
  for (var i=0; i<newVocals.length; i++) {
    if (newVocals[i] == "a"){
      newVocals[i] = "b"
    } else if (newVocals[i] == "e") {
      newVocals[i] = "f"
    } else if (newVocals[i] == "i") {
      newVocals[i] = "j"
    } else if (newVocals[i] == "o") {
      newVocals[i] = "p"
    } else if (newVocals[i] == "u") {
      newVocals[i] = "v"
    } else if (newVocals[i] == "E") {
      newVocals[i] = "F"
    } else if (newVocals[i] == "I") {
      newVocals[i] = "J"
    } else if (newVocals[i] == "O") {
      newVocals[i] = "P"
    } else if (newVocals[i] == "U") {
      newVocals[i] = "V"
    } else if (newVocals[i] == "A") {
      newVocals[i] = "B"
    }
  }
  return newVocals
}

function reverseWord (str) {
  var revWord =""
  for (var i =str.length-1; i>=0; i--) {
    revWord = revWord + str[i]
  }
  return revWord
}

function setLowerUpperCase (str) {
  var lowupCase =""
  for (var j=0; j<str.length; j++){
    if(str[j]===str[j].toUpperCase()) {
      lowupCase += str[j].toLowerCase()
    } else {
      lowupCase += str[j].toUpperCase()
    }
  }
  return lowupCase
}

function removeSpaces (str) {
  //code di sini
  return str.replace(/\s/g, "")
}

function passwordGenerator (name) {
  if (name.length >= 5) {
  var vocal = changeVocals (name)
  var revWord = reverseWord(vocal)
  var lowupCase = setLowerUpperCase(revWord)
  var noSpace = removeSpaces(lowupCase)
  return noSpace
  } else {
    return "Minimal karakter yang diinputkan adalah 5 karakter"
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'