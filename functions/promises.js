// Callback
const getDataCallback = (callback) => {
  setTimeout(() => {
    callback("This is my callback error", undefined);
    callback("This is my callback error", undefined);
  }, 2000);
};

getDataCallback((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Promise
// Promise Chaning
const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Number must be provided");
      //   resolve(`This is my success data ${data}`)
      //    reject('This is my promise error')
      //    reject('This is my promise error')
    }, 2000);
  });

getDataPromise(2).then(
  (data) => {
    getDataPromise(data).then(
      (data) => {
        console.log(`Promise data: ${data}`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

getDataPromise(10)
  .then((data) => {
    return getDataPromise(data);
  })
  .then((data) => {
    return "This is some test data";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
