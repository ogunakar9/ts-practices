//spread operator on params
// const addNums = (...numbers: number[]) => {
//   return numbers.reduce((curRes, curVal) => {
//     return curRes + curVal;
//   }, 0);
// };

// const addedNums = addNums(2, 3, 2.3, 10);
// console.log(addedNums);

//class initiation
class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department:" + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
  }
}

const accounting = new Department("Accounting");
// console.log(accounting);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

//cannot push like this due to employees being private
// accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
