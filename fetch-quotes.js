import fetch from 'node-fetch';

const fetchQuotes = async () => {
  const results = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const body = await results.json();
  const number = getRandomItemInArray(body);
  const randomQuote = body[number];
  return randomQuote;
};

const getRandomItemInArray = (array) => {
  return Math.floor(Math.random() * array.length);
};

export default fetchQuotes;
