"use strict";

//more on promises

//constructor of a promise
let promise = new Promise(function(resolve, reject) {
  if (success) {
    resolve(data)
  } else {
    reject('Error')
  }
})

//defining the functions to be used as your resolve and reject for the promise
promise.then(function(result) {
  console.log(result)
}, function(err) {
  console.log(err)
})

//other functions of promise

//This function will only be called when all the promises passed in, return
//this is freaking awesome
Promise.all([promise])
//how to use it
Promise.all([promise]).then(function(results){
  //do something
})

//Race function will run when at least one of the promises has completed
Promise.race([promise]).then(function(results){
  //do something
})

//Refect function will return a promise that is rejected
Promise.reject(new Error('fail')).then(function(error) {
  // not called
}, function(error) {
  console.log(error); // Stacktrace
});

//The resolve function will return a promise that is resolved
Promise.resolve('Success').then(function(value) {
  console.log(value); // "Success"
}, function(value) {
  // not called
});
