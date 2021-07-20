describe('fetchQuotes', () => {
  it('fetches a single object (quote) from an API', async () => {
    const quote = await fetchQuote();

    expect(quote).toEqual(expect.any(Object));
  });
});
