type Admin = {
  name: string;
  priviledges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {}
type ElevatedEmployee = Employee & Admin;

const e1: ElevatedEmployee = {
  name: "Max",
  priviledges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  if ("priviledges" in emp) {
    console.log("Priviledges: ", emp.priviledges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: ", emp.startDate);
  }
}

class Truck {
  drive() {
    console.log("driving");
  }
  loadCargo(amount: number) {
    console.log(amount);
  }
}

class Car {
  drive() {
    console.log("driving");
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1);
  }
}
