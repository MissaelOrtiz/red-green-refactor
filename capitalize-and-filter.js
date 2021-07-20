const capitalizeAndFilter = (array) => {
  const stringArray = array;
  const filteredArray = stringArray.filter(item => item[0].toLowerCase() !== 'f');
  return filteredArray.toUpperCase();
};

export default capitalizeAndFilter;
