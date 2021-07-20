const copyAndPush = (oriArr, pushedItem) => {
  const newArray = oriArr;
  newArray.push(pushedItem);
  return newArray;
};
  
export default copyAndPush;
