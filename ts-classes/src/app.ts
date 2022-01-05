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
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
    //readonly throws error when changing id field
    // this.id = "d2";
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
  }
}

const accounting = new Department("d1", "Accounting");
// console.log(accounting);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

//cannot push like this due to employees being private
// accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
