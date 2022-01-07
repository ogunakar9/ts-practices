function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING PERSON")
class Person {
  name = "Max";

  constructor() {
    console.log("creating person...");
  }
}

const pers = new Person();
