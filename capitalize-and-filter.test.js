describe('capitalizeAndFilter', () => {
  it('takes in an array and filters', () => {
    const strings = ['free', 'fifty percent off', 'something else', 'not on sale'];
    const expected = ['SOMETHING ELSE', 'NOT ON SALE'];
    const actual = capitalizeAndFilter(strings);

    expect(actual).toEqual(expected);
  });
});
