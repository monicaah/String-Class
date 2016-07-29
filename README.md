[![Coverage Status](https://coveralls.io/repos/github/andela-mkwamboka/String-Class/badge.svg?branch=develop)](https://coveralls.io/github/andela-mkwamboka/String-Class?branch=develop) [![Build Status](https://travis-ci.org/swagger-api/swagger-js.svg?branch=master)](https://travis-ci.org/swagger-api/swagger-js)

# [String Class](https://github.com/andela-mkwamboka/String-Class)

>String class uses prototype oriented programming to extend the Javascript String Class to support more manipulation features

### Tech

The following resources were used:

* [Karma](https://karma-runner.github.io/1.0/index.html) -  Testing environment
* [Jasmine](http://jasmine.github.io/2.0/introduction.html) - Javascript testing framework
* [Travis](https://travis-ci.org) - Continuous integration service used to build and test software projects hosted at GitHub.
* [Node](https://nodejs.org/en/) -  An open-source, cross-platform runtime environment for developing server-side Web applications.

### Installation

You need [node](https://nodejs.org/en/download/package-manager/) installed globally depending on your OS:

*For mac install brew then use it to install node*
```sh
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew install node
```
Open your Terminal and run these commands.

Clone the repo from Github:
```sh
git clone https://github.com/andela-mkwamboka/String-Class
```
Change directory to the root folder:
```sh
$ cd String-Class
```
Install dependancies from package.json:
```sh
$ npm install
```
You can also:
  *Run the test* using:
```sh
$ npm test
```
## Usage
First run
```javascript
$ node
```
then on the node environment require the file with the methods by running the following command:
```javascript
> require('./src/stringclass.js')
```
**To use the various methods that have been added run the following commands**
```javascript
1. hasVowels : Returns true if the string contains vowels.
    'mice'.hasVowels(); // true

2. toUpper : Returns the string with all characters in upper cases.
    'country'.toUpper(); // COUNTRY

3. toLower : Returns the string with all characters in lower cases.
    'MACHO'.toLower(); // macho

4. ucFirst : Returns the string with the First Character to an Uppercase.
    'google'.ucFirst(); // Google

5. isQuestion : Return true if the string is a question.
    'what?'.isQuestion(); // true

6. words : Returns a list of the words in the string, as an Array.
    'Oh my word'.words(); // ['Oh', 'my', 'word']

7. wordCount : Returns the number of words in the string.
    'Incomprehensibilities'.wordCount(); // 21

8. toCurrency : Returns a currency representation of the String.
    '12345'.toCurrency(); // '12,345.00'

9. fromCurrency : Returns a number representation of the Currency String.
    '11,111.11'.fromCurrency(); // 11111.11
```
