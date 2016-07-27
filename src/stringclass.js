String.prototype.hasVowels = function hasVowels() {
  // Returns true if the string matches any of the characters between the brackets.
  return /[aeiou]/i.test(this);
};

String.prototype.toUpper = function toUpper() {
  // Anonymous function takes in parameter word
  // charCodeAt() changes the character to a Unicode
  // Subtract it by 32 to gets the uppercase Unicode
  // String.fromCharCode changes Unicode to a character
  return this.replace(/[a-z]/g, word => String.fromCharCode(word.charCodeAt() - 32));
};

String.prototype.toLower = function toLower() {
  // Anonymous function takes in parameter word
  // charCodeAt() changes the character to a Unicode
  // Subtract it by 32 to gets the lowercase Unicode
  // String.fromCharCode changes Unicode to a character
  return this.replace(/[A-Z]/g, word => String.fromCharCode(word.charCodeAt() + 32));
};

String.prototype.ucFirst = function ucFirst() {
  // Checks the range of characters between a-z to check if this is a string
  // If it is it uppercases the first character using its index [0]
  // Joins the rest of the words in the string
  // Else returns the word
  return /^[a-z]/i.test(this) ? this[0].toUpper() + this.slice(1) : this;
};

String.prototype.isQuestion = function isQuestion() {
  // ? Preceded by a backslash to represent the character itself
  // $ dollar sign matches the end of a string
  return /\?$/.test(this);
};

String.prototype.words = function words() {
  // Checks if it is a string
  // Splits the string at the point where the words stops
  // Else returns an array of the word if it cant be split
  return /\W+/.test(this) ? this.split(/\W+/) : [this];
};

String.prototype.wordCount = function wordCount() {
  // Uses the inbuilt.length method
  return this.length;
};

String.prototype.toCurrency = function toCurrency() {
  // parseFloat returns a number only
  // (\d) Parentheses group the regex between them and capture the text matched for later reuse
  // (?=(\d{3}) Asserts the captured group is immediately followed by a three number digits
  // \. Tests the digits before the fullstop
  // $1, Adds a comma after the first captured group.
  var results;
  (/^[0-9]+/gi).test(this) ?  results = this : results = this.replace(/[^\d]+/g.exec(this)[0], '');
  return parseFloat(results).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
};

String.prototype.fromCurrency = function fromCurrency() {
  // Removes argument in a number format
  // If the argument cannot be converted into a number, it returns NaN.
  return Number(this.replace(/,/ , ''));
};
