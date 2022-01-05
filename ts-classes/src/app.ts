const addNums = (...numbers: number[]) => {
  return numbers.reduce((curRes, curVal) => {
    return curRes + curVal;
  }, 0);
};

const addedNums = addNums(2, 3, 2.3, 10);
console.log(addedNums);
