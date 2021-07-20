const capitalizeAndFilter = (array) => {
  const stringArray = array;
  const filteredArray = stringArray.filter(item => item[0].toLowerCase() !== 'f');
  const output = filteredArray.map(item => item.toUpperCase());
  return output;
};

export default capitalizeAndFilter;
