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

  // private employees: string[] = [];
  // using protected instead of private to give access to
  // inheriting classes, still not changeable though
  static fiscalYear = 2021;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id;
  }

  static createEmployee(name: string) {
    return { name: name };
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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value.");
    }
    this.addReports(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

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

// check error case
// accounting.mostRecentReport = "";
accounting.mostRecentReport = "Year end report";

accounting.addReports("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printReports();
accounting.printEmployeeInformation();
