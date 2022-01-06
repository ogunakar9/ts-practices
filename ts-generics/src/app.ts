// const names: Array<string> = []; //string[]
// names[0].split(" ");

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("hi"), 2000);
// });

// promise.then((data) => data.split(" "));

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "max" }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got only 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }

  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Name: " + obj[key];
}

extractAndConvert({ name: "Mason" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("important item");

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

//partial is a built in type that wraps another type and changes properties to optional
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}
