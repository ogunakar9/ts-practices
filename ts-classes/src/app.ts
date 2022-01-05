//spread operator on params
const addNums = (...numbers: number[]) => {
  return numbers.reduce((curRes, curVal) => {
    return curRes + curVal;
  }, 0);
};

const addedNums = addNums(2, 3, 2.3, 10);
console.log(addedNums);

//class initiation
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department:" + this.name);
  }
}

const accounting = new Department("Accounting");
console.log(accounting);

const accountingCopy = { name: "DUMMY", describe: accounting.describe };
accountingCopy.describe();
