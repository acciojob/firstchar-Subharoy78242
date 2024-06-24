function firstChar(text) {
  // Iterate through each character in the string
  for (let i = 0; i < text.length; i++) {
    // Check if the current character is not a space
    if (text[i] !== ' ') {
      return text[i];
    }
  }
  // If only spaces are found, return an empty string
  return '';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
