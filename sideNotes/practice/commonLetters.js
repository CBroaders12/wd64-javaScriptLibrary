//! Given two strings return all of the uncommon characters "bat" "cat" => bc

let findUncommon = (str1, str2) => {
  let uncommonChars = "";

  for (char of str1) {
    if (!str2.includes(char)) {
      uncommonChars += char;
    }
  }
  for (char of str2) {
    if (!str1.includes(char)) {
      uncommonChars += char;
    }
  }
  console.log(uncommonChars);
}

findUncommon('common', 'banana');