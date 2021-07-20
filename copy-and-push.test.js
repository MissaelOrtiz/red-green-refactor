import copyAndPush from './copy-and-push';

describe('copyAndPush', () => {
  it('returns a new array with an additional item pushed to the end', () => {
    const numbers = [1, 2, 3];
    const expected = [1, 2, 3, 4];
    const actual = copyAndPush(numbers, 4);
    
    expect(actual).toEqual(expected);
  });

  it('returns a new array with an additional item pushed to the end, validation', () => {
    const letters = ['a', 'b', 'c'];
    const expected = ['a', 'b', 'c', 'd'];
    const actual =  copyAndPush(letters, 'd');

    expect(actual).toEqual(expected);
  });
});
