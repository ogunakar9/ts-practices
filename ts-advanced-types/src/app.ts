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

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      break;
  }

  console.log(`Moving at speed: ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 20 });

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("text-input")
// );
// userInputElement.value = "Hey there!";
const userInputElement = document.getElementById("text-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hey there stranger";
}
