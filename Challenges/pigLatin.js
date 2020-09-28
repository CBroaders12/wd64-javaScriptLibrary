/*
! PIG LATIN CHALLENGE (pair coding) - morning
************
    - Create a function that takes in strings
    - In the function, translate a phrase into pig latin and print it to the console.

    **
    - If able to do so, return the value into another variable and print that variable
    What is Pig Latin?

        * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
    - It is greatly encouraged to seek out possible solutions utilizing MDN (or anything else that may be helpful).
*/

let makePigLatin = phrase => {

  // Define a list of vowels to reference
  let vowels = 'aeiou';

  // Define the Pig Latin suffix
  let suffix = 'ay';

  // Split the phrase into individual words
  let phraseArray = phrase.split(' ');

  // Empty array for rearranged words and declare a new phrase variable for later
  let newPhraseArray = [];
  let newPhrase;

  // Loop through each word in the phrase
  for (word of phraseArray) {
    // console.log(word);

    // Check each character in each word
    for (let i = 0; i < word.length; i++) {
      let char = word.charAt(i);
      // console.log(char);

      // If the character is a vowel, rearrange the word and add it to a new array
      if (vowels.includes(char.toLowerCase())) {
        let wordEnd = word.slice(i);
        let wordStart = word.slice(0, i);
        let ordWay = wordEnd + wordStart + suffix;
        // console.log(ordWay);
        newPhraseArray.push(ordWay);
        // console.log(newPhraseArray);
        break;
      }
    }
  }
  // Return the new array joined into a string
  newPhrase = newPhraseArray.join(" ");
  return newPhrase
}

let phrase = "To be or not to be That is the question";

console.log(makePigLatin(phrase));