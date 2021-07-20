import fetchQuotes from './fetch-quotes';

describe('fetchQuotes', () => {
  it('fetches a single object (quote) from an API', async () => {
    const quote = await fetchQuotes();

    expect(quote).toEqual(expect.any(Object));
  });
});
