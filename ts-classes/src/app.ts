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
    console.log(this.employees.length, this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

//cannot push like this due to employees being private
// it.employees[2] = "Anna";

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();

const accounting = new AccountingDepartment("d2", []);
accounting.addReports("Something went wrong...");
accounting.printReports();
