describe('hasVowels', () => {
  it('Returns true if the string contains vowels', () => {
    expect('mice'.hasVowels()).toBeTrue();
  });

  it('Returns false if the string doesn\'t contain vowels', () => {
    expect('cry'.hasVowels()).toBeFalse();
  });
});

describe('toUpper', () => {
  it('Returns the String with all it\'s characters in upper case', () => {
    expect('country'.toUpper()).toEqual('COUNTRY');
  });
});

describe('toLower', () => {
  it('Returns the String with all it\'s characters in lower case', () => {
    expect('MACHO'.toLower()).toEqual('macho');
  });
});

describe('ucFirst', () => {
  it('Returns the String with the First Character Upper case', () => {
    expect('google'.ucFirst()).toEqual('Google');
  });
});

describe('isQuestion', () => {
  it('Return true if the string is a question', () => {
    expect('What?'.isQuestion()).toBeTrue();
  });

  it('Return false if the string is not a question', () => {
    expect('wow'.isQuestion()).toBeFalse();
    expect('w?ow'.isQuestion()).toBeFalse();
  });
});

describe('words', () => {
  it('Returns a list of the words in the string, as an Array', () => {
    expect('Oh my word'.words()).toEqual(['Oh', 'my', 'word']);
  });
});

describe('wordCount', () => {
  it('Returns the number of words in the string', () => {
    expect('Incomprehensibilities'.wordCount()).toEqual(21);
  });
});

describe('toCurrency', () => {
  it('Returns a currency representation of the String', () => {
    expect('12345'.toCurrency()).toEqual('12,345.00');
  });

  it('Returns a currency representation of the String', () => {
    expect('ksh39089'.toCurrency()).toEqual('39,089.00');
  });

  it('Returns a NaN if a string has a non-number', () => {
    expect('String'.toCurrency()).toEqual('NaN');
  });
});

describe('fromCurrency', () => {
  it('Returns a number representation of the Currency', () => {
    expect('11,111.11'.fromCurrency()).toEqual(11111.11);
  });

  it('Returns a number representation of the Currency', () => {
    expect('word'.fromCurrency()).toEqual(NaN);
  });
});