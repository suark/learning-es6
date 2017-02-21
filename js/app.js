"use strict";

//fetch method

fetch('http://services.odata.org/V4/Northwind/Northwind.svc/', { //1
  method: 'get'
}).then(function(response) { //2
  return response.json()
}).then(function(data) {
  console.log(data.value) //3
}).catch(function() {
  console.log('Failed to fetch data') //4
})

//The first part returns a promise
//The second part returns another promise that we pass to the next function
//the third part gets the promise and displays the passed data
//If an error occurrs, it ends up at the catch
