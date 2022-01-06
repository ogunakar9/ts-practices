const names: Array<string> = []; //string[]
names[0].split(" ");

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => resolve("hi"), 2000);
});

promise.then((data) => data.split(" "));
