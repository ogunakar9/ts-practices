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
