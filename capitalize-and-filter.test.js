import capitalizeAndFilter from './capitalize-and-filter';

describe('capitalizeAndFilter', () => {
  it('takes in an array and filters strings that start with f, capitalizing the rest [validation]', () => {
    const strings = ['free', 'fifty percent off', 'something else', 'not on sale'];
    const expected = ['SOMETHING ELSE', 'NOT ON SALE'];
    const actual = capitalizeAndFilter(strings);

    expect(actual).toEqual(expected);
  });

  it('takes in an arrya and filters strings that start with f, capitalizing the rest [validation]', () => {
    const strings = ['something', 'wicked', 'this', 'way', 'comes', 'froyo'];
    const expected = ['SOMETHING', 'WICKED', 'THIS', 'WAY', 'COMES'];
    const actual = capitalizeAndFilter(strings);

    expect(actual).toEqual(expected);
  });
});
