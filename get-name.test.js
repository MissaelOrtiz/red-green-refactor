import getName from './get-name';

describe('getName', () => {
  it('gets a name from an object with a name key [spot]', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const expected = 'spot';
    const actual = getName(spot);

    expect(actual).toEqual(expected);
  });

  it('gets a name from an object with a name key [character]', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const expected = 'Aang';
    const actual = getName(character);

    expect(actual).toEqual(expected);
  });
});
